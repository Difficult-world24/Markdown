const styles = {
  container: {
    padding: 1,
    flexDirection: "row !important",
    alignItems: "center",
    justifyContent: "space-between",
  },

  btn: {
    color: "#fff !important",
    padding: "0 !important",
    "& i": {
      fontFamily: "Monospace",
      fontSize: "1.1rem",
      fontWeight: 700,
      color: "inherit",
    },
  },
  btnActive: {
    "& i": {
      color: "#ddd",
    },
  },
};

export default styles;
