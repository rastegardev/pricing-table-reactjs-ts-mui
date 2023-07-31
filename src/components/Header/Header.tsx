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
          minHeight: "45px",
          bgcolor: "#F5F5F5",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Container
          sx={{
            p: { xs: 2, sm: 1 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
            }}
          >
            {props.title}
          </Typography>
          <List
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              display: { xs: "none", sm: "flex" },
              cursor: "pointer",
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
