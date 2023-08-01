import { Container } from "@mui/material";
import Card from "../Card/Card";
import CardsProps from "./Cards.interface";

const cardItem: CardsProps | CardsProps[] = [
  {
    id: 1,
    title: "FREE",
    price: 0,
    details:
      "10 users included, 2 GB of storage, Help center access, Email support",
    button: "SIGN UP FREE",
    variant: "outlined",
  },
  {
    id: 2,
    title: "Pro",
    price: 15,
    details:
      "20 users included, 10 GB of storage, Help center access, Priority email support",
    button: "GET STATED",
    variant: "contained",
  },
  {
    id: 3,
    title: "Enterprise",
    price: 30,
    details:
      "50 users included, 30 GB of storage, Help center access, Phone & email support",
    button: "GET STATED",
    variant: "outlined",
  },
];

const Cards = () => {
  return (
    <>
      <Container
        sx={{
          mt: 5,
          mb: 10,
          display: { xs: "block", sm: "block", md: "flex" },
        }}
      >
        {cardItem.map((value, index) => (
          <Card
            key={`Cards Item:${index + 1}`}
            title={value.title}
            price={value.price}
            details={value.details}
            button={value.button}
            variant={value.variant}
          />
        ))}
      </Container>
    </>
  );
};

export default Cards;
