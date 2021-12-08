import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
const LOGIN_DATA = "loginData";

export default function GoogleAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response) => {
    localStorage.setItem(LOGIN_DATA, JSON.stringify(response.profileObj));
    if (response) {
      setIsLoggedIn(true);
    }
  };
  if (isLoggedIn) {
    return <Redirect to="/userDetails" />;
  }

  return (
    <div>
      <Card
        sx={{
          p: 20,
          mt: 5,
          ml: 25,
          align: "center",
          width: 500,
          height: 200,
          bgcolor: "success.main",
        }}
      >
        <Box
          sx={{
            boxShadow: 3,
            mx: "auto",
            width: 500,
            bgcolor: "secondary.main",
          }}
        >
          <Typography variant="h3" sx={{ color: "white", mb: 10 }}>
            Cick The Button To login
          </Typography>
          <GoogleLogin
            clientId="979904057678-s8kthcqkrda7tcpqje5jfl1toss66bau.apps.googleusercontent.com"
            buttonText="Log in with Google"
            onSuccess={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </Box>
      </Card>
    </div>
  );
}
