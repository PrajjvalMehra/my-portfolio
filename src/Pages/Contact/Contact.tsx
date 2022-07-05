import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Button, Grid, Icon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef } from "react";
import IsComponentVisible from "../../Hooks/IsComponentVisible";
import "./Contact.scss";
import { social } from "../../Helpers/constants";
import Footer from "../../Components/Footer/Footer";

const Contact = (props: any) => {
  const contactRef = useRef<null | HTMLElement>(null);
  const isVisible = IsComponentVisible(contactRef);

  useEffect(() => {
    if (props.activeSection !== "contact") return;
    window.scrollTo({
      behavior: "smooth",
      top: document.body.scrollHeight,
    });
    props.handleActiveSection("");
  }, [props.activeSection]);
  return (
    <>
      <Grid
        container
        className="contactContainer"
        direction="column"
        alignItems="center"
        justifyContent="center"
        alignContent="center"
        paddingRight={1.5}
        paddingLeft={1.5}
      >
        <Box ref={contactRef}>
          <Typography variant="h5" className="sectionTitleStyle">
            <span style={{ fontWeight: 400 }}> 04.</span> Contact Me
            <div
              className={`${
                isVisible ? "sectionDividerAnimation" : "hidden-default"
              }`}
            />
          </Typography>
          <Box
            className={`contactDescription ${
              isVisible ? "sectionText-Visible" : "hidden-default"
            }`}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontFamily: "inherit" }}>
              Feel free to ask anything!
            </Typography>
            <Box className="hello-btn">
              <span onClick={() => window.open("mailto:" + social.email)}>
                <Typography fontFamily={"inherit"}>Say Hello</Typography>
              </span>
            </Box>
            <Box className="social-container">
              <span onClick={() => window.open(social.github, "_blank")}>
                <GitHubIcon className="social-icon" />
              </span>
              <span onClick={() => window.open(social.linkedIn, "_blank")}>
                <LinkedInIcon className="social-icon" />
              </span>
              <span onClick={() => window.open(social.instagram, "_blank")}>
                <InstagramIcon className="social-icon" />
              </span>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Contact;
