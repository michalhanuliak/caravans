import { ChangeEvent, ChangeEventHandler } from "react";
import { Slider, HorizontalStack, PriceField } from "../atoms";
import { FilterWrapper } from "./FilterWrapper";

interface SliderFilterProps {
  value: number[];
  onChange: (
    event: Event | ChangeEvent<HTMLInputElement>,
    newValue?: number | number[]
  ) => void;
}

export function SliderFilter({ value, onChange }: SliderFilterProps) {
  return (
    <FilterWrapper title="Cena za den">
      <Slider
        name="slider"
        value={value}
        onChange={onChange}
        min={100}
        max={10000}
      />
      <HorizontalStack>
        <PriceField
          name="valueFrom"
          value={value[0]}
          currency="Kč"
          onChange={onChange}
        />
        <PriceField
          name="valueTo"
          value={value[1]}
          currency="Kč"
          onChange={onChange}
        />
      </HorizontalStack>
    </FilterWrapper>
  );
}
