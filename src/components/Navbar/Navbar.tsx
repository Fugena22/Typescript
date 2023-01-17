import {
  AppBar,
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useContext, useEffect, useState } from "react";
import { ProgressContext } from "../../contexts/ProgressContext/ProgressContext";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import WelcomeMessage from "../WelcomMessage/WelcomeMessage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: "white !important",
      borderBottom: "1px solid white",
    },
  })
);

const Navbar = () => {
  //styles
  const classes = useStyles();

  //context
  const { lastTime, status } = useContext(ProgressContext);

  const { theme } = useContext(ThemeContext);
  //state
  const [position, setPosition] = useState<string>("Full-stack Developer");

  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  //effect
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return clearInterval(timer);
  }, []);

  const onPositionChange = (event: SelectChangeEvent<string>) =>
    setPosition(event.target.value);
  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My Movies</Typography>

          <Box textAlign="center">
            <WelcomeMessage position={position} />
            <Chip label={`Last time: ${lastTime} - Status: ${status}`}></Chip>
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={onPositionChange}
                  className={classes.positionSelect}
                >
                  <MenuItem value="Full-stack Developer">
                    Full-stack Developer
                  </MenuItem>
                  <MenuItem value="Front-end Developer">
                    Front-end Developer
                  </MenuItem>
                  <MenuItem value="Back-end Developer">
                    Back-end Developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">{time.toUTCString()}</Typography>
            </Box>
            <Button variant="contained">Login</Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
