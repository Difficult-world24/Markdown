import { Button, Tooltip } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles/ButtonStyles";

function EditorButton(props) {
  const { classes, toolTitle, onclick } = props;
  return (
    <Tooltip title={toolTitle} disableInteractive>
      <Button size="large" onClick={onclick} className={classes.btn}>
        {props.children}
      </Button>
    </Tooltip>
  );
}

export default withStyles(styles)(EditorButton);
