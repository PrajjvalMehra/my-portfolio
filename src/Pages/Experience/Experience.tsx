import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef } from "react";
import "./Experience.scss";
const Experience = (props: any) => {
  const expRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (props.activeSection !== "experience") return;
    expRef?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    props.handleActiveSection("");
  }, [props.activeSection]);
  return (
    <>
      <Grid
        container
        className="experienceContainer"
        direction="row"
        alignItems="center"
        justifyContent="center"
        alignContent="center"
        paddingRight={1.5}
        paddingLeft={1.5}
      >
        <Box ref={expRef}>Experience</Box>
      </Grid>
    </>
  );
};

export default Experience;
