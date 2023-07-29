import React from "react";
import Header from "./header";
import Container from "@mui/material/Container";
import Menu from "./menu";
import { Box } from "@mui/material";

export default function Layouts(props) {
  return (
    <Box className="super-app-container">
      <Header />
      <Container maxWidth="sm">
        <div className="scroll-auto">{props.children}</div>
      </Container>
      <Menu />
    </Box>
  );
}
