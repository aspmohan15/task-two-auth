import "../css/retrieve.css";
import TableRow from "@mui/material/TableRow";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Retrieve() {
  const rows = JSON.parse(localStorage.getItem("allUserData"));

  const clearLogs = () => {
    localStorage.removeItem("allUserData");
    window.location.reload();
  };

  return (
    <>
      <Card
        sx={{
          p: 10,
          color: "success.dark",
          fontWeight: "medium",
          mx: 4,
          alignItems: "center",
        }}
      >
        <Typography variant="h4">User Details</Typography>

        {rows ? (
          rows.map((row) => (
            <Box key={row.phone}>
              <div>
                <Card sx={{ p: 2, margin: 2 }}>
                  <Box sx={{ color: "red" }}>Name</Box> {row.name}
                </Card>
              </div>
              <div>
                <Card sx={{ p: 2, margin: 2 }}>
                  <Box sx={{ color: "red" }}>Email</Box> {row.email}
                </Card>
              </div>
              <div>
                <Card sx={{ p: 2, margin: 2 }}>
                  <Box sx={{ color: "red" }}>Age</Box> {row.age}
                </Card>
              </div>
              <div>
                <Card sx={{ p: 2, margin: 2 }}>
                  <Box sx={{ color: "red" }}>Phone</Box> {row.phone}
                </Card>
              </div>
              <div>
                <Card sx={{ p: 2, margin: 2 }}>
                  <Box sx={{ color: "red" }}>Language</Box> {row.language}
                </Card>
              </div>
            </Box>
          ))
        ) : (
          <TableRow
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          ></TableRow>
        )}
      </Card>
    </>
  );
}
