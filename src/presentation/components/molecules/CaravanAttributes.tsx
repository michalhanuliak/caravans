import { HorizontalStack, VerticalStack, Text } from "../atoms";
import { Attribute } from "./Attribute";
import Toilet from "../../../assets/icons/Toilet.svg";
import Lay from "../../../assets/icons/Lay.svg";
import Shower from "../../../assets/icons/Shower.svg";
import Bed from "../../../assets/icons/Bed.svg";

interface CaravanAttributesProps {
  location: string;
  shower: boolean;
  passengersCapacity: number;
  sleepCapacity: number;
  toilet: boolean;
}

export function CaravanAttributes({
  location,
  shower,
  passengersCapacity,
  sleepCapacity,
  toilet,
}: CaravanAttributesProps) {
  return (
    <VerticalStack>
      <Text fontSize="1.4rem">{location}</Text>
      <HorizontalStack>
        <Attribute value={passengersCapacity} icon={Lay} />
        <Attribute value={sleepCapacity} icon={Bed} />
        {toilet && <Attribute icon={Toilet} />}
        {shower && <Attribute icon={Shower} />}
      </HorizontalStack>
    </VerticalStack>
  );
}
