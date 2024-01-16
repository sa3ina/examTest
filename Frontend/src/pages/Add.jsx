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
  const filtered = data.filter((elem) => {
    return elem.name.toLowerCase().includes(search.toLowerCase());
  });
  console.log(filtered);
  console.log("he");
  return (
    <>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
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
            {data &&
              data.map((row) => (
                <TableRow
                  key={row.name}
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
    </>
  );
};

export default Add;
