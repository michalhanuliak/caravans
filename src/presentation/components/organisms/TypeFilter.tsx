import { useTheme } from "@mui/material";
import { HorizontalStack } from "../atoms";
import { FilterOption, FilterWrapper } from "../molecules";
import { memo } from "react";
import { areArraysEqual } from "../../utils";
import { FilterTypeOption, Option } from "../../../domain";

export interface TypeFilterProps {
  options: Option[];
  value: FilterTypeOption[];
  onChange: (id: FilterTypeOption) => void;
}

export const TypeFilter = memo(function TypeFilter({
  options,
  value,
  onChange,
}: TypeFilterProps) {
  const theme = useTheme();

  const renderOptions = options.map((option) => (
    <FilterOption
      {...option}
      key={option.id}
      onClick={() => onChange(option.id)}
      active={value.includes(option.id)}
    />
  ));

  return (
    <FilterWrapper
      title="Typ karavanu"
      sx={{
        [theme.breakpoints.down("sm")]: {
          alignItems: "center",
        },
      }}
    >
      <HorizontalStack
        sx={{
          [theme.breakpoints.down("sm")]: {
            display: "grid",
            gridTemplateColumns: "repeat(2, 2fr)",
          },
        }}
      >
        {renderOptions}
      </HorizontalStack>
    </FilterWrapper>
  );
},
arePropsEqual);

function arePropsEqual(oldProps: TypeFilterProps, newProps: TypeFilterProps) {
  return areArraysEqual(oldProps.value, newProps.value);
}
