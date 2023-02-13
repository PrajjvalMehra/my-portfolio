import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Title from "../../Components/Title/Title";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Work from "../Work/Work";
import "./Home.scss";

const Home = () => {
    const topRef = useRef<null | HTMLElement>(null);
    const [currentSection, setCurrentSection] = useState("");
    const handleActiveSection = (section: string) => {
        setCurrentSection(section);
    };

    console.log(currentSection);
    return (
        <>
            <Box className="mainContainer">
                <Box ref={topRef} className="headerContainer">
                    <Header handleActiveSection={handleActiveSection} />
                </Box>

                <Grid
                    className="main"
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    alignContent="center"
                    paddingRight={0}
                    paddingLeft={0}
                >
                    <Box>
                        <Title handleActiveSection={handleActiveSection} />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <About
                            activeSection={currentSection}
                            handleActiveSection={handleActiveSection}
                        />
                        <Experience
                            activeSection={currentSection}
                            handleActiveSection={handleActiveSection}
                        />
                        <Work
                            activeSection={currentSection}
                            handleActiveSection={handleActiveSection}
                        />
                        <Contact
                            activeSection={currentSection}
                            handleActiveSection={handleActiveSection}
                        />
                        <Footer />
                    </Box>
                </Grid>

                {/* <Box
          sx={{
            bottom: 0,
            left: 0,
            right: 0,
            top: "100%",
            width: "100%",
            position: "sticky",
          }}
        > */}

                {/* </Box> */}
            </Box>
        </>
    );
};

export default Home;
