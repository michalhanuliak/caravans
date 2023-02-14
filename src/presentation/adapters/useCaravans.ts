import { useCallback, useEffect, useState } from "react";
import { useCaravansData } from "../../infrastructure";
import { Caravan, Caravans, Filters } from "../../domain";
import { useUpdateEffect } from "../utils";

const ITEMS_PER_PAGE = 6;

export function useCaravans() {
  const { data, isLoading, error } = useCaravansData();
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  const [localData, setLocalData] = useState<Caravans>(
    data ?? { items: [], count: 0 }
  );

  useEffect(() => {
    if (isLoading) return;
    setLocalData(data);
  }, [isLoading, data]);

  const handlePriceRangeChange = useCallback((data, priceRange: number[]) => {
    return data.filter(
      (caravan: Caravan) =>
        caravan.price >= priceRange[0] && caravan.price <= priceRange[1]
    );
  }, []);

  const handleTypeChage = useCallback((data, type: any[]) => {
    if (type.length === 0) return data;
    return data.filter((caravan: any) => type.includes(caravan.vehicleType));
  }, []);

  const handleInstantReservationSelection = useCallback(
    (data, selection: boolean | "all") => {
      if (selection === "all") return data;
      return data.filter(
        (caravan: any) => caravan.instantBookable === selection
      );
    },
    []
  );

  const handleFilterData = useCallback(
    (filters: Filters) => {
      setPage(1);
      let filteredData = [...(data?.items ?? [])];
      filteredData = handlePriceRangeChange(filteredData, filters.slider);
      filteredData = handleTypeChage(filteredData, filters.type);
      filteredData = handleInstantReservationSelection(
        filteredData,
        filters.instantReservation
      );

      setLocalData({
        count: filteredData.length,
        items: filteredData as [],
      });
    },
    [
      data?.items,
      handleInstantReservationSelection,
      handlePriceRangeChange,
      handleTypeChage,
    ]
  );

  const handlePageIncrease = () => setPage((prevPage) => prevPage + 1);

  useUpdateEffect(() => {
    setHasNextPage((page + 1) * ITEMS_PER_PAGE < localData?.count);
  }, [page, localData.count]);

  return {
    count: localData?.count,
    items: localData.items.slice(0, page * ITEMS_PER_PAGE),
    isLoading,
    error,
    handleFilterData,
    handlePageIncrease,
    hasNextPage: hasNextPage,
  };
}
