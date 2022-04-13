import * as React from "react";
import { Typography, Box, Button, Grid } from "@mui/material/";
import Wrapper from "../components/Wrapper";

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
    <Wrapper>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Web Monetization Examples
        </Typography>
        <CustomLink title="View streaming events" url="examples/streaming" />
        <CustomLink
          title="Detect and Respond to tip"
          url="examples//tip-respond"
        />
      </Box>
    </Wrapper>
  );
}
