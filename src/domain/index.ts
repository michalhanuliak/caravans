export type BooleanSelectValue = boolean | "all";

export type FilterTypeOption =
  | "Campervan"
  | "Intergrated"
  | "BuiltIn"
  | "Alcove";

export type Option = {
  id: FilterTypeOption;
  name: string;
  desc: string;
};

export type TFilters = {
  slider: number[];
  type: FilterTypeOption[];
  instantReservation: BooleanSelectValue;
};

export type Caravan = {
  location: string;
  instantBookable: boolean;
  name: string;
  passengersCapacity: number;
  sleepCapacity: number;
  price: number;
  vehicleType: FilterTypeOption;
  toilet: boolean;
  shower: boolean;
  pictures: string[];
};

export type Caravans = {
  items: Caravan[];
  count: number;
};
