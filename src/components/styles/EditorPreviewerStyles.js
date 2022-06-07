const styles = {
  container: {
    height: "100%",
  },
  previwerSection: {
    display: "flex !important",
    backgroundColor: "#ddd",
    gridColumn: "2",
    gridRow: "1 / span 2",
  },
  center: {
    gridColumn: "1",
  },
  previwerControls: {
    overflow: "hidden",
    backgroundColor: "#ddd",
    borderRight: "1px solid #ccc",
    height: "100%",
    width: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  outputSection: {
    padding: "0.5em 1em 1em 1em",
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "scroll",
    "& span": {
      position: "absolute",
      fontSize: "1.9em",
      height: "100%",
      left: "94%",
      top: "3%",
      "& button": {
        position: "sticky",
        transition: "all 0.2s ease",
        top: 0,
        right: 0,
      },
    },
  },
  previwerControlBtn: {
    marginBottom: 0,
    padding: 6,
    outline: "none",
    border: "none",
    backgroundColor: "inherit",
    fontSize: 20,
    transition: "all 0.2s ease",
    overflow: "hidden",
    cursor: "pointer",
    "& i": {
      color: "#495057",
    },
    "&:hover": {
      backgroundColor: "#ced4da",
      "& i": {
        color: "#495057",
      },
    },
  },
  faceDown: {
    transform: "rotate(-90deg)",
  },
};

export default styles;
