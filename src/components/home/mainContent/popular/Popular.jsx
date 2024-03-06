import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popular } from "../../../../dummyData";
import Heading from "../../../common/heading/Heading";
import { Box, Container, Typography } from "@mui/material";

const Popular = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  };
  return (
    <>
      <Container sx={{ width: "100%" }}>
        <Heading title="Popular" />
        <Box>
          <Slider {...settings}>
            {popular.map((val) => {
              return (
                <Box sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      boxShadow: "rgba(0, 0, 0, 0.2) 0px 15px 10px -10px",
                      backgroundColor: "#fff",
                      display: "flex",
                      position: "relative",
                      margin: "15px 15px 15px 0",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        width: "50%",
                        position: "relative",
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "cover",
                        }}
                        src={val.cover}
                        alt=""
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          pl: "10px",
                          borderLeft: "5px solid #fb4c35",
                          width: "80px",
                          background:
                            "linear-gradient(to right, #fb4c35 50%, black 50%)",
                          backgroundSize: "200% 100%",
                          backgroundPosition: "right bottom",
                          transition: "width 0.5s ease-out",
                          "&:hover": {
                            width: "100px",
                          },
                          cursor: "pointer",
                        }}
                      >
                        <Box sx={{ color: "white" }}>{val.catgeory}</Box>
                      </Box>
                    </Box>
                    <Box sx={{ width: "50%", p: "10px" }}>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "17px",
                          marginBottom: "15px",
                        }}
                      >
                        {val.title.slice(0, 40)}...
                      </Typography>
                      <Box
                        sx={{ marginTop: "15px", padding: "0 0 0 20px" }}
                        className="date"
                      >
                        <i class="fas fa-calendar-days"></i>
                        <label>{val.date}</label>
                      </Box>
                      <Box
                        sx={{
                          borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                          padding: "5px 0 0 20px",
                          marginTop: "5px",
                          color: "#BD081C",
                        }}
                      >
                        <i class="fas fa-comments"></i>
                        <label>{val.comments}</label>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Container>
    </>
  );
};

export default Popular;
