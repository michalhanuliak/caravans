import Stack, { StackProps } from "@mui/material/Stack";

export type HorizontalStackProps = Omit<StackProps, "direction">;

export function HorizontalStack({ children, ...props }: HorizontalStackProps) {
  return (
    <Stack direction="row" gap={props.gap ?? "1rem"} {...props}>
      {children}
    </Stack>
  );
}
