import { Grid, Slide, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import TabPanel from "../../Components/TabPanel/TabPanel";
import { experience } from "../../Helpers/experience";
import scrollIntoViewOffset from "../../Helpers/scrollIntoViewOffset";
import IsComponentVisible from "../../Hooks/IsComponentVisible";
import "./Experience.scss";

const Experience = (props: any) => {
  const expRef = useRef<null | HTMLDivElement>(null);
  const isVisible = IsComponentVisible(expRef);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  useEffect(() => {
    if (props.activeSection !== "experience") return;
    if (window.innerHeight > 800) {
      expRef?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      scrollIntoViewOffset(".expBox", 70);
    }

    props.handleActiveSection("");
  }, [props.activeSection]);

  function a11yProps(index: number) {
    return {
      id: `${windowWidth > 1000 ? "vertical" : "simple"}-tab-${index}`,
      "aria-controls": `${
        windowWidth > 1000 ? "vertical" : "simple"
      }-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      className="experienceContainer"
      display="flex"
      direction="row"
      alignItems="center"
      justifyContent="center"
      alignContent="center"
      paddingRight={1.5}
      paddingLeft={1.5}
      marginBottom={window.innerHeight > 800 ? "0px" : "32px"}
    >
      <Box ref={expRef} className="expBox">
        <Typography variant="h5" className="sectionTitleStyle">
          <span style={{ fontWeight: 400 }}> 02.</span> Where I've Worked
          <div
            className={`${
              isVisible ? "sectionDividerAnimation" : "hidden-default"
            }`}
          />
        </Typography>
        <Box
          className={`expDescription ${
            isVisible ? "sectionText-Visible" : "hidden-default"
          }`}
          sx={{
            display: "flex",
            flexDirection: `${windowWidth > 1000 ? "row" : "column"}`,
          }}
        >
          <Tabs
            orientation={windowWidth > 1000 ? "vertical" : "horizontal"}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              borderRight: 1,
              borderColor: `${windowWidth < 1000 ? "transparent" : "black"}`,
            }}
            TabIndicatorProps={{
              style: {
                backgroundColor: "black",
              },
            }}
            textColor="inherit"
          >
            {experience.map((tab, index) => {
              return (
                <Tab
                  disableRipple={true}
                  className="TabStyle"
                  label={tab.company}
                  {...a11yProps(index)}
                />
              );
            })}
          </Tabs>
          {experience.map((tab, index) => {
            return (
              <TabPanel
                value={value}
                index={index}
                data={tab}
                windowWidth={windowWidth}
              />
            );
          })}
        </Box>
      </Box>
    </Grid>
  );
};

export default Experience;
