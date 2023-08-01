import { Container, Box, Typography, Paper } from "@mui/material";
import ButtonPrimary from "../Button/Button";

const Card = (props: any) => {
  return (
    <>
      <Container>
        <Paper
          elevation={3}
          sx={{
            textAlign: "center",
            borderRadius: "10px",
            p: 3,
            mb: { xs: 3, sm: 0 },
          }}
        >
          <Typography
            variant="h4"
            color="initial"
            bgcolor="#f4f4f4"
            borderRadius="50px"
            sx={{
              p: 1,
            }}
          >
            {props.title}
          </Typography>

          <Typography sx={{ mt: 2 }} variant="h3" color="initial">
            {`$${props.price}/mo`}
          </Typography>

          {props.details.split(",").map((item: string, index: any) => (
            <Typography key={`detail-${index}`} variant="h6" color="initial">
              {item.trim()}{" "}
            </Typography>
          ))}

          <Box sx={{ mt: 5, mb: 2 }}>
            <ButtonPrimary
              variant={props.variant}
              value={props.button}
            ></ButtonPrimary>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Card;
