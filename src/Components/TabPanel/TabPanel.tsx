import { Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { TabPanelProps } from "../../Types/Types";
import "./TabPanel.scss";

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, data, windowWidth, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${
        props.windowWidth > 1000 ? "vertical" : "simple"
      }-tabpanel-${index}`}
      aria-labelledby={`${
        props.windowWidth > 1000 ? "vertical" : "simple"
      }-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="panelDataContainer">
          <Typography
            variant="h6"
            fontFamily="inherit"
            fontWeight="500"
            className="designation"
          >
            {data.title}&nbsp;
            <span
              className="companyStyle"
              onClick={() => {
                window.open("https://intelligaia.com/", "_blank");
              }}
            >
              @{data.company}
            </span>
          </Typography>
          <Typography variant="subtitle1" fontFamily="inherit" fontWeight="300">
            {data.date}&nbsp;
          </Typography>
          {data.description.map((item: string) => {
            return (
              <div
                style={{
                  fontWeight: "700",
                  display: "flex",
                }}
              >
                <Typography
                  variant="body1"
                  fontFamily="inherit"
                  fontWeight="800"
                >
                  ~&nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="inherit"
                  fontWeight="400"
                >
                  {item}
                </Typography>
              </div>
            );
          })}
          {data.techStack.map((item: string) => {
            return (
              <Chip
                sx={{
                  marginTop: "10px",
                  marginRight: "7px",
                  borderColor: "black",
                  borderWidth: "px",
                  fontFamily: "inherit",
                  fontWeight: "500",
                }}
                size="small"
                label={item}
                variant="outlined"
              />
            );
          })}
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
