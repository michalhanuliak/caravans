import { PropsWithChildren } from "react";
import { Box } from "./Box";
import { useTheme } from "@mui/material";

export function Section({ children }: PropsWithChildren<{}>) {
  const theme = useTheme();

  return (
    <Box
      p="0 10rem"
      sx={{
        [theme.breakpoints.down("sm")]: {
          padding: "1.6rem",
        },
      }}
    >
      {children}
    </Box>
  );
}
