import React from 'react';
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import "./Photos.scss";

const Photos = () => {
    return (
        <Box className="PhotosPageContainer">
            <Box>
                <Container>
                    <Typography variant="h4" fontFamily="Trispace" fontWeight="700" className="pageTitle">
                        Photos
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}

export default Photos