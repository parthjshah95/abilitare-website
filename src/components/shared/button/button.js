import React from "react";
import ButtonComponent from "react-bootstrap/Button";
 
const Button = ({ size, value, onClick, variant, id }) => {
  const handleClick = () => {
    if (id) {
      return onClick(id);
    }
    return onClick();
  };
  return (
    <div>
      <ButtonComponent variant={variant} size={size} onClick={handleClick}>
        {value}
      </ButtonComponent>
    </div>
  );
};
 
export default Button;