// Modules
import { Link as RouterLink } from "react-router-dom";
// Components
import { AppBar, Toolbar, Button } from "@mui/material";

export const Navigation: React.FC = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};
