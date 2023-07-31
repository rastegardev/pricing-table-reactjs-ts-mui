import Typography from "@mui/material/Typography";

const cardItem = [
  {
    id: 1,
    title: "FREE",
    price: 0,
    details: "10 users included, 2 GB of storage",
    button: "SIGN UP FREE",
  },
];

const Card = () => {
  return (
    <>
      {cardItem.map((value, index) => (
        <Typography key={`item-${index}`} variant="h4" color="initial">
          {value.title}
        </Typography>
      ))}
    </>
  );
};

export default Card;
