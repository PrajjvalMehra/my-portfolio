import { Button } from "@mui/material";
import React from "react";
import "./HeaderButton.scss";
const HeaderButton = (props: any) => {
  return (
    <Button
      onClick={() => {
        props.handleActiveSection(props.anchor);
      }}
      id={props.anchor}
      className="headerButton"
    >
      <span style={{ fontWeight: 200 }}> 0{props.index + 1}.</span>
      {props.title}
    </Button>
  );
};

export default HeaderButton;
