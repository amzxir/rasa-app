import React from "react";
import { Box } from "@mui/material";
import { FadeTransform } from "react-animation-components";

export default function Error() {
  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} fadeProps={{enterOpacity: 0.85,}}>
      <Box sx={{ mt: 5, mb: 5 }}>
        <div>alert error</div>
      </Box>
    </FadeTransform>
  );
}
