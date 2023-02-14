import { default as MuiMenuItem } from "@mui/material/MenuItem";
import type { MenuItemProps as MuiMenuItemProps } from "@mui/material/MenuItem";

export function MenuItem(props: MuiMenuItemProps) {
  return <MuiMenuItem {...props} sx={{ fontSize: "1.4rem " }} />;
}
