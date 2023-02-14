import { Caravan } from "../../../domain";
import { shortid } from "../../utils";
import { Box, Text } from "../atoms";
import { CaravanCard } from "../organisms";

export interface CardsLayoutProps {
  data: Caravan[];
}

export function CardsLayout({ data }: CardsLayoutProps) {
  const renderCards = (data ?? []).map((item) => (
    <CaravanCard key={shortid.generate()} {...item} />
  ));

  // Empty state not working correctly since there is no loading from API
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, 34rem)"
      gap="3.2rem"
      width="100%"
      justifyContent="center"
    >
      {data.length > 0 ? (
        renderCards
      ) : (
        <Text fontSize="2.2rem">Žádné výsledky</Text>
      )}
    </Box>
  );
}
