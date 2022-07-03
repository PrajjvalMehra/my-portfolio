import { Box, Grid, Stack } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import HeaderButton from "../../Components/HeaderButton/HeaderButton";
import { headerButtonData } from "../../Helpers/headerButtonData";
import "./Sidebar.scss";

const Sidebar = (props: any) => {
  const [open, setOpen] = useState(false);
  useLayoutEffect(() => {
    setOpen(props.showSidebar);
  }, [props.showSidebar]);

  return (
    <Grid className={open ? "sidebarContainerOpen" : "sidebarContainerClosed"}>
      <Stack spacing={4}>
        {headerButtonData.map((button: any, index: number) => (
          <Box
            key={index}
            onClick={() => props.handleSidebar()}
            className={
              props.showSidebar ? `slideRight-${index}` : `slideLeft-${index}`
            }
          >
            <HeaderButton
              handleActiveSection={props.handleActiveSection}
              index={index}
              title={button.title}
              anchor={button.anchor}
            />
          </Box>
        ))}
      </Stack>
    </Grid>
  );
};

export default Sidebar;
