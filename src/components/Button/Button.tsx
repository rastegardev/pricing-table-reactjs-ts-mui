import Button from "@mui/material/Button";
import ButtonProps from "./Button.interface";

const ButtonPrimary: React.FC<ButtonProps> = ({ variant, value }) => {
  return (
    <>
      <Button variant={variant}>{value}</Button>
    </>
  );
};

export default ButtonPrimary;
