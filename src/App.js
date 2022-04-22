import React from "react";
import { Box, Container, Grid, Paper, Stack } from "@mui/material";
import EditorFooter from "./components/EditorFooter";
import EditorNavBar from "./components/EditorNavBar";

function App() {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Grid item gridRow="1">
        <EditorNavBar />
      </Grid>
      <Grid
        item
        gridRow="2"
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        <Paper elevation={24}>
          <Box sx={{ width: "100%", height: "100%", bgcolor: "#ddd" }} />
        </Paper>
        <Box sx={{ width: "100%", height: "100%", bgcolor: "#ccc" }} />
      </Grid>
      <Grid item gridRow="3">
        <Paper elevation={24}>
          <EditorFooter />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
