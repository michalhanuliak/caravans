import { useTheme } from "@mui/material";
import { Divider, HorizontalStack } from "../atoms";
import { BooleanSelect, SliderFilter } from "../molecules";
import { TypeFilter } from "../organisms";
import { debounce, useUpdateEffect } from "../../utils";
import { useCallback } from "react";
import { useFilters } from "../../hooks";
import { Option, TFilters } from "../../../domain";

const OPTIONS: Option[] = [
  {
    id: "Campervan",
    name: "Campervan",
    desc: "Obytka s rozměry osobáku, se kterou dojedete všude.",
  },
  {
    id: "Intergrated",
    name: "Integrál",
    desc: "Král mezi karavany. Luxus na kolech.",
  },
  {
    id: "BuiltIn",
    name: "Vestavba",
    desc: "Celý byt geniálně poskládaný do dodávky.",
  },
  {
    id: "Alcove",
    name: "Přívěs",
    desc: "Tažný karavan za vaše auto. Od kapkovitých až po rodinné.",
  },
];

interface FiltersProps {
  onChange: (filters: TFilters) => void;
}

export function Filters({ onChange }: FiltersProps) {
  const theme = useTheme();
  const {
    actions: { handleSliderChange, handleTypeChange, handleBooleanChange },
    filterValues,
  } = useFilters();

  const debounceOnChange = useCallback(
    debounce((key) => onChange(key), 300),
    [onChange]
  );

  useUpdateEffect(() => {
    debounceOnChange(filterValues);
  }, [filterValues.slider, filterValues.type, filterValues.instantReservation]);

  return (
    <HorizontalStack
      justifyContent="center"
      sx={{
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
        },
      }}
    >
      <SliderFilter value={filterValues.slider} onChange={handleSliderChange} />
      <Divider variant="middle" sx={{ borderWidth: "0.1rem" }} />
      <TypeFilter
        options={OPTIONS}
        value={filterValues.type}
        onChange={handleTypeChange}
      />
      <Divider variant="middle" sx={{ borderWidth: "0.1rem" }} />
      <BooleanSelect
        value={filterValues.instantReservation}
        onChange={handleBooleanChange}
      />
    </HorizontalStack>
  );
}
