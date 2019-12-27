import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function Component() {
  return (
    <React.Fragment>
      <Container
        maxWidth="xs"
        style={{ padding: 0, backgroundColor: "#fff", height: "100vh" }}
      >
        <AppBar position="static" style={{ backgroundColor: "#fff" }}>
          <Grid container spacing={0} style={{ padding: 15 }}>
            <Grid item xs={12} align="center">
              <Typography style={{ color: "black" }}>
                <b>Account</b>
              </Typography>
            </Grid>
          </Grid>
        </AppBar>
      </Container>
    </React.Fragment>
  );
}

export default Component;
