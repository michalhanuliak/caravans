import {
  Box,
  Button,
  CardsLayout,
  CircularProgress,
  Divider,
  Filters,
  Header,
  Section,
  VerticalStack,
} from "../components";
import { useCaravans } from "../adapters";

export function CaravanScreen() {
  const {
    items,
    handleFilterData,
    handlePageIncrease,
    hasNextPage,
    isLoading,
  } = useCaravans();

  return (
    <VerticalStack gap="0">
      <Section>
        <Header />
      </Section>

      <Divider />

      <Section>
        <Filters onChange={handleFilterData} />
      </Section>

      <Divider />

      {isLoading ? (
        <Box
          alignItems="center"
          justifyContent="center"
          display="flex"
          p="5rem"
        >
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Section>
          <VerticalStack p="3.2rem 0">
            <CardsLayout data={items} />
            {hasNextPage && (
              <Button
                color="secondary"
                variant="contained"
                onClick={handlePageIncrease}
                sx={{ alignSelf: "center", marginTop: "3.8rem" }}
              >
                Načíst další
              </Button>
            )}
          </VerticalStack>
        </Section>
      )}
    </VerticalStack>
  );
}
