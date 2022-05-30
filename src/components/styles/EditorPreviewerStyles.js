const styles = {
  container: {
    height: "100%",
  },
  previwerSection: {
    //padding: "0.5em 1em",
    display: "flex !important",
    backgroundColor: "#ddd",
    overflow: "visible",
    color: "#2b2d42",
    gridColumn: "2",
    transition: "all 0.2s ease",
  },
  previwerControls: {
    backgroundColor: "#ddd",
    borderRight: "1px solid #ccc",
    height: "100%",
    width: "2rem",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  outputSection: {
    padding: "0.5em 1em",
    width: "100%",
    fontSize: "1.1rem",
    //"& ::selection": {
    //backgroundColor: "#adb5bd",
    //},
    "& h1": {
      fontSize: "1.4em",
      marginTop: 0,
    },
    "& h2": {
      fontSize: "1.1em",
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
