import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useRef } from "react";
import "./About.scss";

const About = (props: any) => {
  const aboutRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (props.activeSection !== "about") return;
    aboutRef?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    props.handleActiveSection("");
  }, [props.activeSection]);

  return (
    <>
      <Grid
        container
        className="aboutMeContainer"
        direction="row"
        alignItems="center"
        justifyContent="center"
        alignContent="center"
        paddingRight={1.5}
        paddingLeft={1.5}
      >
        <Box ref={aboutRef} className="aboutBox">
          <Typography variant="h5" className="aboutMeTitle">
            <span style={{ fontWeight: 400 }}> 01.</span> About Me
            <div
              style={{
                width: "38.5px",
                height: "2px",
                opacity: "7",
                backgroundColor: "black",
              }}
            ></div>
          </Typography>
          <Typography variant="body1" className="aboutMeText">
            Hello! My name is Prajjval and I love creating things that live on
            the internet. I am a full stack developer with a passion for
            building scalable web applications. My interest in web development
            started when I first made a simple website using vanilla HTML, CSS
            AND JS for a high school project. <br /> <br />
            Here are a few technologies I've been working with recently:
            <br />
          </Typography>
          <ul className="skills-list" style={{ fontFamily: "Trispace" }}>
            <li>~ JavaScript</li>
            <li>~ React</li>
            <li>~ Node.js</li>
            <li>~ Typescript</li>
            <li>~ Koa.js</li>
            <li>~ Firebase</li>
          </ul>
        </Box>
      </Grid>
    </>
  );
};

export default About;
