import { Box } from "@mui/material";
import React from "react";
import logo from "../../../assets/moi.png";
import logo2 from "../../../assets/logo.png";

const Head = () => {
  return (
    <>
      <Box sx={{ position: "relative"}}>
        <img style={{ width: "100%", height: "10vw" }} src={logo2} alt="Logo" />
        <img
          style={{
            zIndex: 10,
            position: "absolute",
            color: "white",
            fontSize: "49px",
            fontWeight: "bolder",
            right: "30vw",
            height: "7vw",
            top: "1vw",
            width: "34vw",
          }}
          src={logo}
          alt="Logo"
        />
      </Box>
    </>
  );
};

export default Head;
