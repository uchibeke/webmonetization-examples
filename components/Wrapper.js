import * as React from "react";
import { Container, Grid } from "@mui/material/";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";

export default function About({ children }) {
  return (
    <Container maxWidth="md">
      <Grid style={{ minHeight: "80vh" }}>{children}</Grid>
      <ProTip />
      <Copyright />
    </Container>
  );
}
