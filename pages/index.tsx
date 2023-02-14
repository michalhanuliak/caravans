import styled from "styled-components";
import { CaravanScreen } from "../src/presentation";

const Home = () => {
  // TODO: add app error boundary
  return (
    <PageWrapper>
      <CaravanScreen />
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;

export default Home;
