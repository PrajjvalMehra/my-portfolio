import { Box, Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import "./Work.scss";
const Work = (props: any) => {
  const workRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (props.activeSection !== "work") return;
    workRef?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
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
        <Box ref={workRef}>Work</Box>
      </Grid>
    </>
  );
};

export default Work;
