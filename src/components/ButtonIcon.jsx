import React from "react";
import { IconButton } from '@mui/material';
import button from "./styles/button.css"


const ButtonIcon = ({ onClick, children }) => {
  return (
    <IconButton onClick={onClick}>
      {children}  
    </IconButton>
  );
};

export default ButtonIcon;