import MuiSlider, { SliderProps as MuiSliderProps } from "@mui/material/Slider";

export function Slider({ ...props }: MuiSliderProps) {
  return (
    <MuiSlider
      color="secondary"
      onChange={() => {}}
      valueLabelDisplay="auto"
      disableSwap
      {...props}
    />
  );
}
