import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
  IconButton,
  Hidden,
  Divider,
  Toolbar,
} from "@mui/material";
import {
  Home,
  Photo,
  Logout,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import "./index.css";

const Index = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const drawer = (
    <div className="sidebar">
      <Box className="sidebar-header">
        <Typography className="logo">MyApp</Typography>
        <IconButton onClick={handleSidebarToggle} className="menu"></IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem
          button
          component={NavLink}
          to="/main/services"
          activeClassName="active"
        >
          <ListItemIcon className="sidebar-icon">
            <Home />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>

        <ListItem
          button
          component={NavLink}
          to="/main"
          activeClassName="active"
        >
          <ListItemIcon className="sidebar-icon">
            <Photo />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>

        <ListItem button component={NavLink} to="/" activeClassName="active">
          <ListItemIcon className="sidebar-icon">
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ position: "fixed", top: 16, left: 16 }}
      >
        <MenuIcon />
      </IconButton>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          variant="persistent"
          open={sidebarOpen}
          onClose={handleSidebarToggle}
          sx={{
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
};

export default Index;
