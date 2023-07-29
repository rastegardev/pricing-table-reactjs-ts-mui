import { Typography, Paper, Container, List } from "@mui/material";
import ButtonPrimary from "../Button/Button";
import MenuItem from "../menu/menu";

const Header = (props: any) => {
  return (
    <>
      <Paper
        elevation={1}
        sx={{
          width: "100%",
          display: "flex",
          minHeight: "85px",
          bgcolor: "#F5F5F5",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Container
          sx={{
            p: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>{props.title}</Typography>
          <List
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MenuItem />
          </List>

          <ButtonPrimary variant="outlined" value="LOGIN"></ButtonPrimary>
          
        </Container>
      </Paper>
    </>
  );
};

export default Header;
