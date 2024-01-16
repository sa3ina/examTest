import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserData } from "../redux/slices/Slice";
import { addToCart } from "../redux/slices/Slice";
import { removeItem } from "../redux/slices/Slice";
import { incrementQuantity } from "../redux/slices/Slice";
import { decrementQuantity } from "../redux/slices/Slice";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addtoWishlist } from "../redux/slices/Slice";

import axios from "axios";
const Wishlist = () => {
  const dispatch = useDispatch();
  const { data, loading, error, cart, wishlist } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LoyaltyIcon style={{ fontSize: "60px", marginTop: "100px" }} />
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
          <p style={{ fontSize: "50px" }}>Wishlist</p>
          <div
            style={{ backgroundColor: "orange", width: "300px", height: "1px" }}
          ></div>
          <div style={{ border: "1px solid orange" }}></div>
        </div>

        <Container>
          {wishlist &&
            wishlist.map((elem, i) => {
              return (
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

                  <button
                    style={{
                      cursor: "pointer",
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#c1121f",
                    }}
                    onClick={() => {
                      dispatch(addtoWishlist(elem));
                    }}
                  >
                    <FavoriteIcon />
                  </button>
                </div>
              );
            })}
        </Container>
      </div>
    </div>
  );
};

export default Wishlist;
