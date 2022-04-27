const styles = {
  container: {
    height: "100vh",
    display: "grid !important",
    gridTemplateRows: "auto 1fr auto",
    fontFamily: "Monospace",
  },
  containerSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    "& ::selection": {
      backgroundColor: "#495057",
      color: "#f8f9fa",
    },
  },
};

export default styles;
