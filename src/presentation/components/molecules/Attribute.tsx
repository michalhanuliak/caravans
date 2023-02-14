import { HorizontalStack, Image, Text } from "../atoms";

interface AttributeProps {
  icon?: string;
  value?: number;
}

export function Attribute({ icon, value }: AttributeProps) {
  return (
    <HorizontalStack position="relative">
      <Image src={icon as string} alt="attribute" />
      {value && <Text fontSize="1.4rem">{value}</Text>}
    </HorizontalStack>
  );
}
