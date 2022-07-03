import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./Title.scss";

const Title = (props: any) => {
  const subtitle = "<Developer style={{type:”fullStack”}} />";
  useEffect(() => {
    props.handleActiveSection("");
  }, []);

  return (
    <Grid
      className="main"
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      alignContent="center"
    >
      <Typography variant="h2" className="title">
        Prajjval Mehra
      </Typography>
      <Typography className="subtitle typingBox">{subtitle}</Typography>
    </Grid>
  );
};

export default Title;
