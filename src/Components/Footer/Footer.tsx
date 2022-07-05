import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <Box className="footer-container">
      <Typography className="footer-title">
        Designed & Built by Prajjval Mehra
      </Typography>
    </Box>
  );
};

export default Footer;
