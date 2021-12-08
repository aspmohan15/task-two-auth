import { Card, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { allUserContext } from "../App";

const theme = createTheme();

const LOGIN_DATA = "loginData";

let data;

const USER_DATA = "userData";

export default function Form() {
  const { storeData } = useContext(allUserContext);

  data = JSON.parse(localStorage.getItem(LOGIN_DATA));

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    let formData = {
      name: data.name,
      email: data.email,
      age: form.get("age"),
      phone: form.get("phone"),
      language: form.get("language"),
    };
    localStorage.setItem(USER_DATA, JSON.stringify(formData));
    storeData(formData);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Card>
          <Typography variant="h4">User Details</Typography>
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {data ? (
              <Avatar
                alt={data.name}
                src={data.imageUrl}
                sx={{ width: 100, height: 100 }}
              />
            ) : (
              <Avatar />
            )}

            <br />

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                width: 500,
              }}
            >
              <Card>
                <Grid container spacing={1} sx={{ mt: 0, mb: 2, m: 3, mr: 3 }}>
                  <Grid item xs={10}>
                    <TextField
                      name="firstName"
                      fullWidth
                      value={data.name}
                      variant="standard"
                      label="First Name"
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      variant="standard"
                      value={data.email}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      fullWidth
                      name="age"
                      variant="standard"
                      label="Age"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      fullWidth
                      name="phone"
                      label="Phone Number"
                      type="text"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={10} sx={{ mb: 3 }}>
                    <TextField
                      variant="standard"
                      fullWidth
                      name="language"
                      label="Language preference"
                      type="text"
                    />
                  </Grid>
                </Grid>
              </Card>

              <Button type="submit" fullWidth sx={{ mt: 2, mb: 1 }}>
                Submit
              </Button>

              <Grid item>
                <Box
                  sx={{
                    marginTop: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mb: 5,
                  }}
                >
                  <Link
                    to="/retrieve"
                    style={{ textDecoration: "none" }}
                    variant="body2"
                  >
                    Click to view Details
                  </Link>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Card>
      </ThemeProvider>
    </>
  );
}
