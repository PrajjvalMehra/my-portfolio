import {
    Card,
    CardActions,
    CardContent,
    Chip,
    Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { Box } from "@mui/system";
import React from "react";
import { projects } from "../../Helpers/projects";
import IsComponentVisible from "../../Hooks/IsComponentVisible";
import "./WorkCard.scss";

const WorkCard = (props: any) => {
    const ref = React.useRef<null | HTMLDivElement>(null);
    const cardVisibility = IsComponentVisible(ref);
    console.log(props);
    return (
        <div ref={ref}>
            <Card
                className={`${
                    cardVisibility ? "cardAnimation" : "hidden-default"
                }`}
                elevation={0}
                style={{ animationDelay: props.index * 0.08 + "s" }}
                sx={{
                    minWidth: "320px",
                    maxWidth: "320px",
                    minHeight: "320px",
                    maxHeight: "320px",
                    backgroundColor: "black",
                    color: "white",
                    marginTop: "10px",
                    display: "flex",
                    borderRadius: "10px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginRight: "10px",
                }}
            >
                <CardContent sx={{ padding: "20px" }}>
                    <CardActions
                        sx={{
                            padding: "0",
                            marginTop: "0px",
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        {props.project.icon ? (
                            <img
                                src={props.project.icon}
                                alt="icon"
                                style={{ width: "40px", height: "40px" }}
                            />
                        ) : (
                            <FolderOpenIcon
                                sx={{
                                    width: "35px",
                                    height: "35px",
                                }}
                            />
                        )}
                        <GitHubIcon
                            className="gitHoverAnimation"
                            onClick={() => {
                                window.open(props.project.repo, "_blank");
                            }}
                            sx={{
                                width: "25px",
                                height: "auto",
                            }}
                        />
                    </CardActions>

                    <Typography
                        variant="h5"
                        component="div"
                        className="cardTitle"
                    >
                        {props.project.title}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{ fontFamily: "inherit", marginTop: "15px" }}
                    >
                        {props.project.description}
                    </Typography>
                    <Box sx={{ marginTop: "20px" }}>
                        {props.project.techStack.map((item: string) => {
                            return (
                                <Chip
                                    variant="outlined"
                                    sx={{
                                        backgroundColor: "black",
                                        color: "white",
                                        marginTop: "5px",
                                        marginRight: "7px",
                                        fontFamily: "inherit",
                                    }}
                                    label={item}
                                    size="small"
                                />
                            );
                        })}
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

export default WorkCard;
