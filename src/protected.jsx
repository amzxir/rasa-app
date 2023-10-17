import React, { useContext } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import ColorModeContext from "./context/color-mode-context";


export default function Protected() {
    // start fetch context
    const { token } = useContext(ColorModeContext)
    // end fetch context
    if (!token) {
        return <Navigate to='/login' replace />
    }
    return <Outlet />
}

