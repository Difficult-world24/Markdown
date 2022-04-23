import React from "react";
import { Grid, Paper } from "@mui/material";
import EditorFooter from "./components/EditorFooter";
import EditorNavBar from "./components/EditorNavBar";
import EditorPreviewer from "./components/EditorPreviewer";

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
        <EditorPreviewer />
      </Grid>
      <Grid item gridRow="3">
        <EditorFooter />
      </Grid>
    </Grid>
  );
}

export default App;
