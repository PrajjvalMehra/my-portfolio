import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Icon,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";

import React, { useEffect, useRef } from "react";
import { projects } from "../../Helpers/projects";

import IsComponentVisible from "../../Hooks/IsComponentVisible";
import "./Work.scss";
import scrollIntoViewOffset from "../../Helpers/scrollIntoViewOffset";
import WorkCard from "../../Components/WorkCard/WorkCard";
const Work = (props: any) => {
  const workRef = useRef<null | HTMLElement>(null);
  const isVisible = IsComponentVisible(workRef);

  useEffect(() => {
    if (props.activeSection !== "work") return;
    if (window.innerHeight > 800 && projects.length <= 3) {
      workRef?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      scrollIntoViewOffset(".workBox", 70);
    }

    props.handleActiveSection("");
  }, [props.activeSection]);

  return (
    <>
      <Grid
        container
        className="workContainer"
        direction="row"
        alignItems="center"
        justifyContent="center"
        alignContent="center"
        paddingRight={1.5}
        paddingLeft={1.5}
      >
        <Box ref={workRef} className="workBox">
          <Typography variant="h5" className="sectionTitleStyle">
            <span style={{ fontWeight: 400 }}> 03.</span> Some Things I've Built
            <div
              className={`${
                isVisible ? "sectionDividerAnimation" : "hidden-default"
              }`}
            />
          </Typography>
          <Box className="workGrid" sx={{ fontFamily: "Trispace" }}>
            {projects.map((project: any, index: number) => {
              return <WorkCard project={project} index={index} />;
            })}
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Work;
