import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "../src/Link";
import Wrapper from "../components/Wrapper";
import {
  useMonetizationState,
  useMonetizationCounter,
} from "react-web-monetization";

export default function Streaming() {
  const initialState = useMonetizationState();
  const counter = useMonetizationCounter();
  const [monetization, setMonetization] = useState({});
  useEffect(() => setMonetization(initialState), [initialState]);

  return (
    <Wrapper>
      <Box sx={{ my: 4 }}>
        <Button
          variant="outlined"
          component={Link}
          noLinkStyle
          href="/"
          size="small"
        >
          Go to the main page
        </Button>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Streaming Payment
        </Typography>
        <Typography variant="h6" component="h2" align="center" gutterBottom>
          {monetization.state === "stopped" && "Stopped"}
          {monetization.state === "pending" && "Loading..."}
          {monetization.state === "started" && "Streaming Started!"}
          {!monetization.state && "Sign up for Coil to support our site!"}
        </Typography>
        <Typography variant="body1" component="h2" align="center" gutterBottom>
          {counter.assetCode}{" "}
          {(counter.totalAmount / 10 ** counter.assetScale).toFixed(
            counter.assetScale
          )}{" "}
          sent
        </Typography>
      </Box>
    </Wrapper>
  );
}
