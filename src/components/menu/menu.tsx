import { ListItem } from "@mui/material";

const navItem = [
  { id: 1, name: "FEATURES" },
  { id: 2, name: "ENTERPRISE" },
  { id: 3, name: "SUPPORT" },
];

const MenuItem = () => {
  return (
    <>
      {navItem.map((value, index) => {
        <ListItem key={`item-${index}`}>{value.name}</ListItem>;
        console.log(index);
        console.log(value);
      })}
    </>
  );
};
export default MenuItem;
