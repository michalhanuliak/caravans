import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Image } from "../atoms";
import { styled } from "@mui/material";

interface CarouselProps {
  imageList: string[];
}

const StyledImage = styled(Image)({
  "&:hover": {
    cursor: "pointer",
  },
});

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function Carousel({ imageList }: CarouselProps) {
  const renderImages = imageList.map((image, index) => {
    const imageSettings =
      index === 0
        ? {
            loading: "eager" as const,
            priority: true,
          }
        : {
            loading: "lazy" as const,
            priority: false,
          };

    return (
      <Box key={image} position="relative" height="19rem">
        <StyledImage
          objectFit="cover"
          src={image}
          alt="123"
          layout="fill"
          {...imageSettings}
        />
      </Box>
    );
  });

  return <Slider {...settings}>{renderImages}</Slider>;
}
