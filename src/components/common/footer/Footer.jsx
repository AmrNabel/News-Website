import { Box, Typography } from "@mui/material";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <Box className="container">
          <Box className="box logo">
            <img src="../images/tech-logo-footer.png" alt="" />
            <Typography>
              Busan is an amazing magazine Blogger theme that is easy to
              customize for your needs
            </Typography>
            <i className="fa fa-envelope"></i>
            <span> hello@beautiful.com </span> <br />
            <i className="fa fa-headphones"></i>
            <span> +91 60521488</span>
          </Box>
          <Box className="box">
            <h3>SPORT</h3>
            <Box className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <Typography>
                Google To Boost Android Security In Few Days
              </Typography>
            </Box>
            <Box className="item">
              <img src="../images/hero/hero2.jpg" alt="" />
              <Typography>Cespedes play the winning Baseball Game</Typography>
            </Box>
          </Box>
          <Box className="box">
            <h3>CRICKET</h3>
            <Box className="item">
              <img src="../images/hero/hero3.jpg" alt="" />
              <Typography>
                US Promises to give Intel aid to locate the soldiers
              </Typography>
            </Box>
            <Box className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <Typography>
                Renewable energy dead as industry waits for Policy
              </Typography>
            </Box>
          </Box>
          <Box className="box">
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </Box>
        </Box>
      </footer>
      <Box className="legal  ">
        <Box className="container flexSB">
          <Typography>© all rights reserved</Typography>
          <Typography>
            made with <i className="fa fa-heart"></i> by gorkhcoder
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
