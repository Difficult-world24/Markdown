import { Grid } from "@mui/material";
import EditorInput from "./components/EditorInput";
import EditorFooter from "./components/EditorFooter";
import EditorNavBar from "./components/EditorNavBar";
import EditorPreviewer from "./components/EditorPreviewer";
import Markdown from "./components/context/MarkdownContext";

function App() {
  return (
    <Markdown>
      <Grid
        container
        component="section"
        sx={{
          height: "100vh",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          fontFamily: "Monospace",
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
          <EditorInput />
          <EditorPreviewer />
        </Grid>
        <Grid item gridRow="3">
          <EditorFooter />
        </Grid>
      </Grid>
    </Markdown>
  );
}

export default App;
