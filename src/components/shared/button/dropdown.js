import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
 
const DropdownComponent = ({
  variant,
  size,
  defaultTitle,
  dropDownArray,
  dropDownHandler,
}) => {
  const [title, setTitle] = useState(defaultTitle);
  const onClickHandler = (text) => {
    dropDownHandler(text);
    return setTitle(text);
  };
  return (
    <div>
      <DropdownButton size={size} title={title} variant={variant.toLowerCase()}>
        <Dropdown.Item
          as="button"
          onClick={(e) => onClickHandler(e.target.textContent)}
        >
          {defaultTitle}
        </Dropdown.Item>
        {dropDownArray.map((item) => {
          return (
            <Dropdown.Item
              as="button"
              key={item.id}
              onClick={(e) => onClickHandler(e.target.textContent)}
            >
              {item.value}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
};
 
export default DropdownComponent;