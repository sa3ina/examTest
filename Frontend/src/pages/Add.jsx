import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUserData } from "../redux/slices/Slice";

const Add = () => {
  const dispatch = useDispatch();
  const { data, loading, error, cart } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  // const filtered = data.filter((elem) =>
  //   elem.name.toLowerCase().includes(search.toLowerCase())
  // );

  const sortedData = () => {
    if (type === "az") {
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "za") {
      return [...data].sort((a, b) => b.name.localeCompare(a.name));
    } else if (type === "price") {
      return [...data].sort((a, b) => a.price - b.price);
    }
    return data;
  };
  return (
    <>
      <div className="add">
        <div className="sort">
          <input
            type="text"
            className="input"
            placeholder="search.."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="button" onClick={() => setType("az")}>
            A to Z
          </button>
          <button className="button" onClick={() => setType("za")}>
            Z to A
          </button>
          <button className="button" onClick={() => setType("price")}>
            price
          </button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData()
                .filter((elem) =>
                  elem.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.id}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.desc}</TableCell>
                    <TableCell>${row.price}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Add;
