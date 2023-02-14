import { default as MuiButton } from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";

export function Button({ sx, ...props }: ButtonProps) {
  return (
    <MuiButton
      sx={{
        width: "fit-content",
        boxShadow: "unset",
        fontWeight: "bold",
        fontSize: "1.6rem",
        p: "1.3rem 3.6rem",
        textTransform: "none",
        ...sx,
      }}
      {...props}
    />
  );
}
