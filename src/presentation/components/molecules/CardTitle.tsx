import { PropsWithChildren } from "react";
import { VerticalStack, Text } from "../atoms";

export type CardTitleProps = PropsWithChildren<{ subheading: string }>;

export function CardTitle({ subheading, children }: CardTitleProps) {
  return (
    <VerticalStack gap="0">
      <Text
        color="primary.contrastText"
        fontSize="1.2rem"
        textTransform="uppercase"
      >
        {subheading}
      </Text>
      <Text fontSize="2.4rem" fontWeight="600">
        {children}
      </Text>
    </VerticalStack>
  );
}
