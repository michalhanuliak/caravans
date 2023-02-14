import InputAdornment from "@mui/material/InputAdornment";
import TextField, { OutlinedTextFieldProps } from "@mui/material/TextField";
import { Text } from "./Text";
import { ChangeEvent } from "react";

interface PriceFieldProps
  extends Omit<OutlinedTextFieldProps, "variant" | "onChange"> {
  currency: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement>,
    newValue?: number | number[]
  ) => void;
}

export function PriceField({ currency, ...props }: PriceFieldProps) {
  return (
    <TextField
      {...props}
      variant="outlined"
      InputProps={{
        ...props.InputProps,
        sx: {
          ...props.InputProps?.sx,
          fontSize: "1.6rem",
        },
        endAdornment: (
          <InputAdornment position="end">
            <Text fontSize="1.6rem">{currency}</Text>
          </InputAdornment>
        ),
      }}
    />
  );
}
