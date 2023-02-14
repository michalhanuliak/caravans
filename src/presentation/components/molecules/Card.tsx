import { PropsWithChildren } from "react";
import { VerticalStack, Box } from "../atoms";
import { styled } from "@mui/material";
import { Carousel } from "./Carousel";

export type CardProps = PropsWithChildren<{ pictures: string[] }>;

const StyledCard = styled(VerticalStack)({
  borderRadius: "0.8rem",
  border: "0.1rem solid #EDEAE3",
  overflow: "hidden",
  width: "100%",
});

export function Card({ pictures, children }: CardProps) {
  return (
    <StyledCard>
      {pictures && <Carousel imageList={pictures} />}
      <Box p="0 1.6rem 1.6rem">{children}</Box>
    </StyledCard>
  );
}
