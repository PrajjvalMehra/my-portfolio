import { AppBar, IconButton, Toolbar } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../../Pages/Sidebar/Sidebar";
import { Box } from "@mui/system";
import HeaderButton from "../HeaderButton/HeaderButton";
import { headerButtonData } from "../../Helpers/headerButtonData";
import "./Header.scss";
import { useOutsideAlerter } from "../../Hooks/useOutsideAlerter";
import { useScrollDirection } from "../../Hooks/scrollDirection";
import { debounce } from "lodash";
interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const Header = (props: any) => {
  const headerRef = useRef<null | HTMLDivElement>(null);

  const [showSidebar, setShowSidebar] = useState(false);
  const [navbarVisibility, setNavbarVisibility] = useState(true);
  const [headerStyleClasses, setHeaderStyleClasses] = useState({
    navButtons: "",
    navBar: "navBar-visible",
  });

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log("SIDEBAR", showSidebar)
  };

  const scrollDirection = useScrollDirection(setNavbarVisibility);


  useEffect(() => {
      if (scrollDirection === "down") {
        setHeaderStyleClasses({
          navButtons: "navButtons-hidden",
          navBar: "navBar-hidden",
        });
      }
      if(scrollDirection === "up") {
        setHeaderStyleClasses({
          navButtons: "navButtons-visible",
          navBar: "navBar-visible",
        });
      }
  }, [scrollDirection]);
  // console.log("SCROLL DIRECTION", typeof scrollDirection)
  const isOutside = useOutsideAlerter(headerRef, setShowSidebar);
  useEffect(() => {
    if (showSidebar) return;
    if (!isOutside) return;
    setHeaderStyleClasses({
      navButtons: "",
      navBar: "",
    });
    if (navbarVisibility) {
      setHeaderStyleClasses({
        navButtons: "rainfall-",
        navBar: "navBar-visible",
      });
    } else {
      setHeaderStyleClasses({
        navButtons: "riseUp-",
        navBar: "navBar-hidden",
      });
    }
  }, [navbarVisibility]);

  const navBarMouseEnterHandler = debounce(() => {
    if (headerStyleClasses.navBar === "navBar-visible") return;
    console.log(showSidebar);
    if (showSidebar) return;
    console.log("SHOW");
    setHeaderStyleClasses({
      navButtons: "rainfall-",
      navBar: "navBar-visible",
    });
  }, 50);

  const navBarMouseLeaveHandler = () => {
    navBarMouseEnterHandler.cancel();
    if (showSidebar) return;
    if (window.scrollY === 0 || navbarVisibility) return;
    if (headerStyleClasses.navBar === "navBar-hidden") return;
    console.log("HIDE");
    setTimeout(() => {
      setHeaderStyleClasses({
        navButtons: "riseUp-",
        navBar: "navBar-hidden",
      });
    }, 200);
  };

  return (
    <div
      ref={headerRef}
      onMouseOver={() => {
        navBarMouseEnterHandler();
      }}
      onMouseLeave={() => {
        navBarMouseLeaveHandler();
      }}
    >
      {/* <HideOnScroll {...props}> */}
      <AppBar elevation={0} className={headerStyleClasses.navBar}>
        <Toolbar
          sx={{
            zIndex: 400,
            minHeight: "64px",
            marginRight: { md: 5 },
            marginLeft: { md: 5 },
          }}
        >
          <Box sx={{ flexGrow: 1, display: { md: "flex", xs: "none" } }}>
            {headerStyleClasses.navButtons !== "" &&
              headerButtonData.map((button: any, index: number) => (
                <Box
                  className={`${headerStyleClasses.navButtons}` + index}
                  key={index}
                >
                  <HeaderButton
                    key={button.anchor}
                    handleActiveSection={props.handleActiveSection}
                    title={button.title}
                    index={index}
                    anchor={button.anchor}
                  />
                </Box>
              ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            {(headerStyleClasses.navBar === "navBar-default" ||
              headerStyleClasses.navBar === "navBar-visible") && (
              <IconButton
                onClick={() => handleSidebar()}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, zIndex: 400 }}
              >
                <MenuIcon sx={{ zIndex: 400 }} />
              </IconButton>
            )}
          </Box>
          <svg
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              setHeaderStyleClasses({
                navButtons: "rainfall-",
                navBar: "navBar-visible",
              });
            }}
            className="logo-svg"
            width="50"
            height="50"
            viewBox="0 0 263 263"
            color="white"
            stroke="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4.5"
              y="4.5"
              width="254"
              height="254"
              rx="37.5"
              stroke="white"
              strokeWidth="9"
            />
            <path
              d="M128.85 102V71.85C128.85 67.5167 128.083 64.2667 126.55 62.1C125.05 59.9333 122.567 58.85 119.1 58.85C116.9 58.85 114.867 59.45 113 60.65C111.167 61.85 109.667 63.4167 108.5 65.35C107.367 67.25 106.75 69.25 106.65 71.35L102.85 70.6C102.85 68.1333 103.35 65.7333 104.35 63.4C105.383 61.0333 106.783 58.9167 108.55 57.05C110.35 55.15 112.45 53.65 114.85 52.55C117.283 51.4167 119.9 50.85 122.7 50.85C126.233 50.85 129.183 51.55 131.55 52.95C133.95 54.3167 135.75 56.4667 136.95 59.4C138.15 62.3 138.75 66.0667 138.75 70.7V102H128.85ZM64.9 102V52H73.95L74.8 62.3V102H64.9ZM96.85 102V71.85C96.85 67.5167 96.0833 64.2667 94.55 62.1C93.0167 59.9333 90.5333 58.85 87.1 58.85C84.9 58.85 82.8833 59.45 81.05 60.65C79.2167 61.85 77.7333 63.4167 76.6 65.35C75.4667 67.25 74.85 69.25 74.75 71.35L70.95 70.6C70.9833 68.1333 71.5 65.7333 72.5 63.4C73.5 61.0333 74.9 58.9167 76.7 57.05C78.5 55.15 80.5833 53.65 82.95 52.55C85.35 51.4167 87.9333 50.85 90.7 50.85C96.0333 50.85 100.033 52.35 102.7 55.35C105.4 58.35 106.75 62.9333 106.75 69.1V102H96.85ZM146.011 122V52H154.861L155.911 60.4V122H146.011ZM171.161 103.1C168.061 103.1 165.294 102.45 162.861 101.15C160.461 99.8167 158.428 98.1 156.761 96C155.094 93.8667 153.828 91.5833 152.961 89.15C152.094 86.6833 151.661 84.35 151.661 82.15L155.711 80.8C155.878 82.6 156.294 84.35 156.961 86.05C157.628 87.75 158.511 89.2833 159.611 90.65C160.711 92.0167 162.011 93.1167 163.511 93.95C165.044 94.75 166.728 95.15 168.561 95.15C171.061 95.15 173.361 94.4833 175.461 93.15C177.594 91.8167 179.294 89.8 180.561 87.1C181.861 84.4 182.511 81 182.511 76.9C182.511 72.7333 181.894 69.3333 180.661 66.7C179.428 64.0333 177.778 62.0667 175.711 60.8C173.644 59.5 171.378 58.85 168.911 58.85C167.044 58.85 165.361 59.2333 163.861 60C162.361 60.7333 161.044 61.7333 159.911 63C158.778 64.2667 157.844 65.6833 157.111 67.25C156.411 68.7833 155.894 70.3667 155.561 72L151.811 70.65C151.811 68.5167 152.244 66.3 153.111 64C154.011 61.7 155.311 59.5667 157.011 57.6C158.744 55.6 160.828 53.9833 163.261 52.75C165.728 51.5167 168.528 50.9 171.661 50.9C175.161 50.9 178.494 51.8167 181.661 53.65C184.828 55.45 187.411 58.2833 189.411 62.15C191.411 65.9833 192.411 70.9 192.411 76.9C192.411 81.4 191.794 85.3 190.561 88.6C189.361 91.9 187.744 94.6333 185.711 96.8C183.678 98.9333 181.394 100.517 178.861 101.55C176.361 102.583 173.794 103.1 171.161 103.1Z"
              fill="white"
            />
            <rect
              x="81"
              y="222"
              width="100"
              height="10"
              rx="4"
              fill="white"
              stroke="white"
            />
            <circle cx="202" cy="97" r="5" fill="white" />
          </svg>
        </Toolbar>
      </AppBar>
      {/* </HideOnScroll> */}
      <Sidebar
        ref={headerRef}
        handleActiveSection={props.handleActiveSection}
        handleSidebar={handleSidebar}
        showSidebar={showSidebar}
      />
    </div>
  );
};;

export default Header;
