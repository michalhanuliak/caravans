import { Caravan } from "../../../domain";
import { Box } from "../atoms";
import { CaravanCard } from "../organisms";
import shortid from "shortid";

export interface CardsLayoutProps {
  data: Caravan[];
}

export function CardsLayout({ data }: CardsLayoutProps) {
  const renderCards = (data ?? []).map((item) => (
    <CaravanCard key={shortid.generate()} {...item} />
  ));

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, 34rem)"
      gap="3.2rem"
      width="100%"
      justifyContent="center"
    >
      {renderCards}
    </Box>
  );
}
