import React from "react";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserData } from "../redux/slices/Slice";
import { addToCart } from "../redux/slices/Slice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addtoWishlist } from "../redux/slices/Slice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
const Restaurant = () => {
  const dispatch = useDispatch();
  const { data, loading, error, cart, wishlist } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  console.log(wishlist);

  return (
    <div className="rest">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <RamenDiningIcon style={{ fontSize: "60px", marginTop: "100px" }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{ backgroundColor: "orange", width: "300px", height: "1px" }}
          ></div>
          <p style={{ fontSize: "50px" }}>Our Menu</p>
          <div
            style={{ backgroundColor: "orange", width: "300px", height: "1px" }}
          ></div>
          <div style={{ border: "1px solid orange" }}></div>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          {" "}
          <p style={{ color: "orange" }}>Breakfast</p>
          <p>Brunch</p>
          <p>Lunch</p>
          <p>Dinner</p>
        </div>
        <Container>
          <Grid container>
            {data &&
              data.map((elem, i) => {
                return (
                  <Grid xs={12} xl={6}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "50px",
                      }}
                    >
                      <div>
                        <p>{elem.name}</p>
                        <p>{elem.desc}</p>
                      </div>
                      <div>${elem.price}</div>
                      <button
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(addToCart(elem));
                        }}
                      >
                        add
                      </button>
                      <button
                        onClick={() => {
                          dispatch(addtoWishlist(elem));
                        }}
                        style={{
                          color: "white",
                          backgroundColor: "transparent",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <FavoriteBorderIcon />
                      </button>
                    </div>
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Restaurant;
