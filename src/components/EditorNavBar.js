import { AppBar, Button, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles/EditorNavBarStyles";

function EditorNavBar(props) {
  const { classes } = props;
  return (
    <AppBar
      sx={{
        p: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      color="primary"
    >
      <div className={classes.btnGroup}>
        <Button size="large" className={`${classes.btn} ${classes.btnActive}`}>
          <i className="ri-bold"></i>
        </Button>
        <Button size="large" className={classes.btn}>
          <i className="ri-italic"></i>
        </Button>
        <Button size="large" className={classes.btn}>
          <i className="ri-heading"></i>
        </Button>

        <Button size="large" className={classes.btn}>
          <i className="ri-code-view"></i>
        </Button>
        <Button size="large" className={classes.btn}>
          <i className="ri-list-unordered"></i>
        </Button>
        <Button size="large" className={classes.btn}>
          <i className="ri-link"></i>
        </Button>
      </div>
      <Typography
        variant="h6"
        sx={{ fontFamily: "Monospace", fontWeight: "bold", mr: 1 }}
      >
        Markdown Editor
      </Typography>
    </AppBar>
  );
}

export default withStyles(styles)(EditorNavBar);
