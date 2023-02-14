import { Select, MenuItem, SelectChangeEvent } from "../atoms";
import { FilterWrapper } from "./FilterWrapper";
import InstantIcon from "../../../assets/icons/Instant.svg";
import { memo } from "react";
import { BooleanSelectValue } from "../../../domain";

export interface BooleanSelectProps {
  value: BooleanSelectValue;
  onChange: (event: SelectChangeEvent<BooleanSelectValue>) => void;
}

export const BooleanSelect = memo(function BooleanSelect({
  value,
  onChange,
}: BooleanSelectProps) {
  return (
    <FilterWrapper title="Okamžitá rezervace" icon={InstantIcon}>
      <Select
        value={value}
        onChange={onChange}
        inputProps={{ sx: { fontSize: "1.4rem" } }}
      >
        <MenuItem value="all">Vsechny</MenuItem>
        <MenuItem value={true as unknown as number}>Ano</MenuItem>
        <MenuItem value={false as unknown as number}>Ne</MenuItem>
      </Select>
    </FilterWrapper>
  );
});
