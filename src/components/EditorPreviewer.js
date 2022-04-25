import { Container, Box } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles/EditorPreviewerStyles";

function EditorPreviewer(props) {
  const { classes } = props;
  return (
    <Container
      className={classes.previwerSection}
      component="section"
      disableGutters
    >
      <Box sx={{ height: "100%" }}>
        <Box className={classes.previwerControls}>
          <button className={classes.previwerControlBtn}>
            <i className="ri-eye-fill"></i>
          </button>
          <button className={`${classes.previwerControlBtn} ${classes.active}`}>
            <i className="ri-side-bar-fill"></i>
          </button>
          <button className={classes.previwerControlBtn}>
            <i className="ri-eye-close-fill"></i>
          </button>
        </Box>
      </Box>
      <Box className={classes.outputSection}>
        <h1>hi</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </Box>
    </Container>
  );
}

export default withStyles(styles)(EditorPreviewer);
