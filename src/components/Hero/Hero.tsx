import { Container, Typography } from "@mui/material";
import HeroProps from "./Hero.interface";

const pageHero: HeroProps | HeroProps[] = [
  {
    id: 1,
    title: "Pricing",
    content:
      "Quickly build an effective pricing table for your potential customers with this layout. It's built with default MUI components with little customization",
  },
];

const Hero = () => {
  return (
    <>
      <Container
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {pageHero.map((value, index) => (
          <Typography
            variant="h1"
            align="center"
            color="initial"
            fontWeight="400"
            key={`item-${index}-1`}
          >
            {value.title}
          </Typography>
        ))}

        {pageHero.map((value, index) => (
          <Typography
            color="initial"
            align="center"
            fontWeight="400"
            sx={{
              mt: 2,
              color: "#A18D7F",
              fontSize: "22px",
            }}
            key={`item-${index}-2`}
          >
            {value.content}
          </Typography>
        ))}
      </Container>
    </>
  );
};

export default Hero;
