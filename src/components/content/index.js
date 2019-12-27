import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function Component() {
  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <b>Top picks for you</b>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default Component;
