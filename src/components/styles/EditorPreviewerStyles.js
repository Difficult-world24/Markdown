const styles = {
  previwerSection: {
    display: "flex !important",
    backgroundColor: "#ddd",
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
  },
  outputSection: {
    padding: "0.5em 1em",
    width: "100%",
    fontSize: "1.1rem",
    "& ::selection": {
      backgroundColor: "#adb5bd",
    },
  },
  previwerControlBtn: {
    margin: 2,
    padding: 6,
    outline: "none",
    border: "none",
    backgroundColor: "inherit",
    fontSize: 20,
    transition: "all 0.2s ease",
    cursor: "pointer",
    "& i": {
      color: "#6c757d",
    },
    "&:hover": {
      backgroundColor: "#ced4da",
      "& i": {
        color: "#495057",
      },
    },
  },
  active: {
    transform: "scale(0.96)",
  },
};

export default styles;
