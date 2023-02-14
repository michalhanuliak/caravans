import { HorizontalStack, Image, Text } from "../atoms";
import Instant from "../../../assets/icons/Instant.svg";

interface CartPriceProps {
  price: number;
  range?: "den" | "mesic" | "rok";
  instant: boolean;
}

export function CardPrice({ price, range = "den", instant }: CartPriceProps) {
  return (
    <HorizontalStack justifyContent="space-between" alignItems="center">
      <Text color="primary.light" fontSize="1.6rem">
        Cena od
      </Text>
      <HorizontalStack position="relative">
        <Text fontWeight="bold" fontSize="1.6rem">
          {`${price} Kč/${range}`}
        </Text>
        {instant && <Image src={Instant} alt="instant-icon" />}
      </HorizontalStack>
    </HorizontalStack>
  );
}
