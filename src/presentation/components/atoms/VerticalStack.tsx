import Stack, { StackProps } from "@mui/material/Stack";

export type VerticalStackProps = Omit<StackProps, "direction">;

export function VerticalStack({ children, ...props }: VerticalStackProps) {
  return (
    <Stack direction="column" gap={props.gap ?? "1rem"} {...props}>
      {children}
    </Stack>
  );
}
