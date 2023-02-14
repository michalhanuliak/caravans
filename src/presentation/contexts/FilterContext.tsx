import { PropsWithChildren, createContext, useContext } from "react";
import { useFilters } from "../hooks";

const FilterContext = createContext<{
  actions: {
    handleSliderChange: any;
    handleTypeChange: any;
    handleBooleanChange: any;
  };
  filterValues: {
    slider: number[];
    type: string[];
    instantReservation: boolean | string;
  };
}>({
  actions: {
    handleSliderChange: () => {},
    handleTypeChange: () => {},
    handleBooleanChange: () => {},
  },
  filterValues: {
    slider: [],
    type: [],
    instantReservation: false,
  },
});

export function FilterContextProvider({ children }: PropsWithChildren<{}>) {
  const filters = useFilters();

  return (
    <FilterContext.Provider value={filters}>{children}</FilterContext.Provider>
  );
}

export const useFilterContext = () => useContext(FilterContext);
