import { Divider } from "../atoms";
import { CaravanAttributes, CardPrice, CardTitle, Card } from "../molecules";

export interface CaravanCardProps {
  name: string;
  vehicleType: string;
  price: number;
  location: string;
  passengersCapacity: number;
  sleepCapacity: number;
  shower: boolean;
  toilet: boolean;
  pictures: string[];
  instantBookable: boolean;
}

export function CaravanCard({
  name,
  vehicleType,
  price,
  location,
  shower,
  passengersCapacity,
  sleepCapacity,
  toilet,
  pictures,
  instantBookable,
}: CaravanCardProps) {
  return (
    <Card pictures={pictures}>
      <CardTitle subheading={vehicleType}>{name}</CardTitle>
      <Divider sx={{ mt: "0.5rem", mb: "0.9rem" }} />
      <CaravanAttributes
        location={location}
        shower={shower}
        passengersCapacity={passengersCapacity}
        sleepCapacity={sleepCapacity}
        toilet={toilet}
      />
      <Divider sx={{ mt: "1.4rem", mb: "1.2rem" }} />
      <CardPrice price={price} instant={instantBookable} />
    </Card>
  );
}
