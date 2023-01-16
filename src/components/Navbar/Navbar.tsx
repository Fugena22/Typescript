import { AppBar, Box, FormControl, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import WelcomeMessage from "../WelcomMessage/WelcomeMessage";

const Navbar = () => {
  //state
  const [position, setPosition] = useState<string>("Full-stack Developer");
  return (
    <AppBar position="static" color="primary">
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
            <Box mt={1}>
              <FormControl></FormControl>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
