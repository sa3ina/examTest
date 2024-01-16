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
import axios from "axios";
const Basket = () => {
  const dispatch = useDispatch();
  const { data, loading, error, cart } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  console.log(cart);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ShoppingBasketIcon style={{ fontSize: "60px", marginTop: "100px" }} />
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
          <p style={{ fontSize: "50px" }}>Basket</p>
          <div
            style={{ backgroundColor: "orange", width: "300px", height: "1px" }}
          ></div>
          <div style={{ border: "1px solid orange" }}></div>
        </div>

        <Container>
          {cart &&
            cart.map((elem, i) => {
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
                  <div>${elem.price}</div> <p> quantity:{elem.quantity}</p>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(addToCart(elem));
                    }}
                  >
                    add
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(removeItem(elem));
                    }}
                  >
                    remove
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(incrementQuantity(elem));
                    }}
                  >
                    +
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(decrementQuantity(elem));
                    }}
                  >
                    -
                  </button>
                </div>
              );
            })}
        </Container>
      </div>
    </div>
  );
};

export default Basket;
