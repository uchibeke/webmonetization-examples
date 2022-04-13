import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "../../src/Link";
import Wrapper from "../../components/Wrapper";
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
          Detect and Respond to Tips
        </Typography>
      </Box>
    </Wrapper>
  );
}
