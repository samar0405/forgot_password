import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./index.css";
import { Padding } from "@mui/icons-material";

const Index = () => {
  return (
    <AppBar position="fixed" sx={{ width: "95%" }} className="header">
      <Toolbar className="header-content">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Index;
