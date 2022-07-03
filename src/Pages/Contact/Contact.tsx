import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef } from "react";
import "./Contact.scss";

const Contact = (props: any) => {
  const contactRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (props.activeSection !== "contact") return;
    contactRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    props.handleActiveSection("");
  }, [props.activeSection]);
  return (
    <>
      <Grid
        container
        className="contactContainer"
        direction="row"
        alignItems="center"
        justifyContent="center"
        alignContent="center"
        paddingRight={1.5}
        paddingLeft={1.5}
      >
        <Box ref={contactRef}>Contact</Box>
      </Grid>
    </>
  );
};

export default Contact;
