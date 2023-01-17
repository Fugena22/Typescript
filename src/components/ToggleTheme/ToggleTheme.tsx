import { Fab, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    floatBtn: {
      position: "fixed",
      right: "3rem",
      bottom: "3rem",
    },
  })
);

const ToggleTheme = () => {
  const classes = useStyles();

  //context
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Fab
      color="primary"
      variant="extended"
      sx={{ position: "fixed", right: "3rem", bottom: "3rem" }}
      onClick={toggleTheme.bind(
        this,
        theme === "primary" ? "secondary" : "primary"
      )}
    >
      Toggle Theme
    </Fab>
  );
};

export default ToggleTheme;
