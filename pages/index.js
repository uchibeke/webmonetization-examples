import * as React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material/";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";

const CustomLink = ({ title, url }) => {
  return (
    <Grid style={{ marginBottom: "20px" }}>
      <Button href={url} color="primary" fullWidth variant="outlined">
        {title}
      </Button>
    </Grid>
  );
};

export default function Index() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Web Monetization Examples
        </Typography>
        <CustomLink title="View streaming events" url="/streaming" />
        <CustomLink title="Detect and Respond to tip" url="/tip-respond" />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
