const styles = {
  container: {
    height: "100vh",
    display: "grid !important",
    transition: "all 0.2s ease ",
    gridTemplateRows: "auto 2fr auto",
    fontFamily: "Monospace",
  },
  containerSection: {
    display: "grid",
    //backgroundColor: "#212529",
    minHeight: "calc(100vh - 66px)",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    "& ::selection": {
      backgroundColor: "#495057",
      color: "#f8f9fa",
    },
  },
  singleContainer: {
    gridTemplateColumns: "1fr",
  },
};
export default styles;
