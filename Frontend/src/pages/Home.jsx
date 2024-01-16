import React from "react";
import Navbar from "../components/Navbar";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { Container } from "@mui/material";
import AboutUs from "./AboutUs";
import Restaurant from "./Restaurant";
const Home = () => {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Container
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <BedtimeIcon style={{ fontSize: "40px" }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "orange",
                width: "300px",
                height: "1px",
              }}
            ></div>
            <p style={{ fontSize: "50px" }}>Welcome</p>
            <div
              style={{
                backgroundColor: "orange",
                width: "300px",
                height: "1px",
              }}
            ></div>
            <div style={{ border: "1px solid orange" }}></div>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <p>2002</p>
              <p>
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <p>2002</p>
              <p>
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <p>2002</p>
              <p>
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              </p>
            </div>
          </div>
        </div>
        <img
          src="https://preview.colorlib.com/theme/pulse/img/sign.png"
          alt=""
        />
      </Container>{" "}
      <Restaurant />
    </>
  );
};

export default Home;
