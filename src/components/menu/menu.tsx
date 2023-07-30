import { ListItem } from "@mui/material";
import MenuItemProps from "./Menu.interface.tsx";

const navItem: MenuItemProps | MenuItemProps[] = [
  { id: 1, name: "FEATURES" },
  { id: 2, name: "ENTERPRISE" },
  { id: 3, name: "SUPPORT" },
];

const MenuItem = () => {
  return (
    <>
      {navItem.map((value, index) => (
        <ListItem key={`item-${index}`}>{value.name}</ListItem>
      ))}
    </>
  );
};
export default MenuItem;
