import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Routes, Route, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";

export default function Detail() {
  const { id } = useParams();
  const { data, loading, error, cart, wishlist } = useSelector(
    (state) => state.user
  );
  const detailof = data.find((elem) => elem.id === id);
  console.log(detailof);
  return (
    <Container className="detail">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {detailof.desc}
          </Typography>
          <Typography variant="h5" component="div">
            {detailof.name}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
