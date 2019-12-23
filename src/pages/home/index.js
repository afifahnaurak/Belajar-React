import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Golog from "../../assets/lgjk.png";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import BottomNavigation from "@material-ui/core/BottomNavigation";

function Component() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xs"
        style={{ padding: 0, backgroundColor: "#fff", height: "100vh" }}
      >
        <AppBar position="static" style={{ backgroundColor: "#fff" }}>
          <Grid container spacing={0} style={{ padding: 10 }}>
            <Grid item xs={6}>
              <img src={Golog} style={{ width: 75 }} />
            </Grid>
            <Grid align="right" item xs={6}>
              <Typography
                variant="caption"
                gutterBottom
                style={{ color: "#000" }}
              >
                Promo
              </Typography>
            </Grid>
          </Grid>
        </AppBar>
        <div style={{ padding: 10 }}>
          <Card style={{ backgroundColor: "navy" }}>
            <Grid container spacing={0} style={{ padding: 10 }}>
              <Grid item xs={6}>
                <Typography
                  variant="subtitle2"
                  gutterbottom
                  style={{ color: "#fff" }}
                >
                  <b>Gopay</b>
                </Typography>
              </Grid>
              <Grid align="right" item xs={6}>
                <Typography
                  variant="caption"
                  gutterBottom
                  style={{ color: "#fff" }}
                >
                  Rp2000000
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={0} style={{ padding: 10 }}>
              <Grid align="center" item xs={3}>
                <Typography
                  variant="caption"
                  gutterBottom
                  style={{ color: "#fff" }}
                >
                  Bayar
                </Typography>
              </Grid>
              <Grid align="center" item xs={3}>
                <Typography
                  variant="caption"
                  gutterBottom
                  style={{ color: "#fff" }}
                >
                  Minta
                </Typography>
              </Grid>
              <Grid align="center" item xs={3}>
                <Typography
                  variant="caption"
                  gutterBottom
                  style={{ color: "#fff" }}
                >
                  Isi Saldo
                </Typography>
              </Grid>
              <Grid align="center" item xs={3}>
                <Typography
                  variant="caption"
                  gutterBottom
                  style={{ color: "#fff" }}
                >
                  Lainnya
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Component;
