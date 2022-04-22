import { Stack, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles/EditorFooterStyles";

function EditorFooter(props) {
  const { classes } = props;
  return (
    <Stack
      className={classes.footer}
      sx={{
        bgcolor: "secondary.dark",
        width: "100%",
      }}
    >
      <Typography className={classes.label}>Markdown</Typography>
      <ul className={classes.ul}>
        <li className={classes.label}>
          <Typography>
            <span>45</span>words
          </Typography>
        </li>
        <li className={classes.label}>
          <Typography>
            <span>8</span>lines
          </Typography>
        </li>
        <li className={classes.label}>
          <Typography>
            <span>Ln 15,</span>
          </Typography>
        </li>
        <li className={classes.label}>
          <Typography>
            <span>Col 18</span>
          </Typography>
        </li>
      </ul>
    </Stack>
  );
}
export default withStyles(styles)(EditorFooter);
