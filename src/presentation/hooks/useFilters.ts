import { useCallback, useState } from "react";
import { FilterTypeOption, Filters } from "../../domain";

export function useFilters() {
  const [slider, setSlider] = useState<Filters["slider"]>([0, 100000]);
  const [type, setType] = useState<Filters["type"]>([]);
  const [instantReservation, setinstantReservation] =
    useState<Filters["instantReservation"]>("all");

  const handleSliderChange = useCallback(
    (event, newValue?: number | number[]) => {
      const { name, value } = event.target;
      let newSliderValue = slider;

      switch (name) {
        case "slider":
          newSliderValue = newValue as number[];
          break;
        case "valueFrom":
          newSliderValue = [value, slider[1]] as number[];
          break;
        case "valueTo":
          newSliderValue = [slider[0], value];
          break;
        default:
          throw new Error("Unexpected filter name");
      }

      setSlider(newSliderValue);
    },
    [slider]
  );

  const handleTypeChange = useCallback(
    (id: FilterTypeOption) => {
      if (!type.includes(id)) {
        setType([...type, id]);
        return;
      }

      setType(type.filter((type) => type !== id));
    },
    [type]
  );

  const handleBooleanChange = useCallback((event) => {
    const { value } = event.target;
    setinstantReservation(value);
  }, []);

  return {
    actions: { handleSliderChange, handleTypeChange, handleBooleanChange },
    filterValues: { slider, type, instantReservation },
  };
}
