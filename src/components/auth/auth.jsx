import React from "react";
import { Box } from "@mui/material";
import { FadeTransform } from "react-animation-components";
import WizardForm from "react-wizard-form";
import Login from "./step-open/login";
import AuthenticationCode from "./step-two/authentication-code";


export default function Auth() {
  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} >
      <Box sx={{ mt: 5, mb: 5 }}>
        <WizardForm>
          <Login />
          <AuthenticationCode />
        </WizardForm>
      </Box>
    </FadeTransform>
  );
}
