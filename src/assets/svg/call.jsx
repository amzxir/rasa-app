import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Call() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_842_5904)">
                <path d="M11.2351 5.26703V2.26703C11.2351 2.06812 11.3142 1.87735 11.4548 1.7367C11.5955 1.59605 11.7862 1.51703 11.9851 1.51703C12.184 1.51703 12.3748 1.59605 12.5155 1.7367C12.6561 1.87735 12.7351 2.06812 12.7351 2.26703V4.22528C13.2076 3.74978 16.2609 0.680779 16.7049 0.236779C16.7741 0.165146 16.8568 0.108009 16.9483 0.0687026C17.0398 0.0293959 17.1383 0.00870618 17.2378 0.00784082C17.3374 0.00697546 17.4362 0.0259517 17.5284 0.0636624C17.6205 0.101373 17.7043 0.157063 17.7747 0.227482C17.8451 0.297902 17.9008 0.381641 17.9385 0.473813C17.9762 0.565985 17.9952 0.664745 17.9943 0.76433C17.9935 0.863914 17.9728 0.962329 17.9335 1.05383C17.8942 1.14534 17.837 1.22809 17.7654 1.29728C17.3214 1.74128 14.2839 4.79603 13.8144 5.26703H15.7351C15.934 5.26703 16.1248 5.34605 16.2655 5.4867C16.4061 5.62735 16.4851 5.81812 16.4851 6.01703C16.4851 6.21594 16.4061 6.40671 16.2655 6.54736C16.1248 6.68801 15.934 6.76703 15.7351 6.76703H12.7351C12.3373 6.76703 11.9558 6.60899 11.6745 6.32769C11.3932 6.04639 11.2351 5.66485 11.2351 5.26703ZM17.3064 12.5713C17.741 13.0071 17.9851 13.5975 17.9851 14.213C17.9851 14.8285 17.741 15.4189 17.3064 15.8548L16.6224 16.6423C10.4791 22.5208 -4.46686 7.57928 1.32239 1.41728L2.18489 0.667279C2.62112 0.244688 3.20618 0.0108328 3.81351 0.0163068C4.42084 0.0217807 5.0016 0.266144 5.43014 0.696529C5.45339 0.719029 6.84239 2.52503 6.84239 2.52503C7.25333 2.95894 7.48198 3.53406 7.48114 4.13168C7.4803 4.72929 7.25004 5.30378 6.83789 5.73653L5.96939 6.82853C6.45013 7.9963 7.15683 9.0576 8.0489 9.95147C8.94097 10.8453 10.0008 11.5542 11.1676 12.0373L12.2664 11.1635C12.6983 10.7503 13.2727 10.5193 13.8705 10.5184C14.4682 10.5176 15.0433 10.747 15.4764 11.159C15.4764 11.159 17.2831 12.5488 17.3064 12.5713ZM16.2751 13.6618C16.2751 13.6618 14.4804 12.2803 14.4571 12.2578C14.3026 12.1046 14.0938 12.0186 13.8763 12.0186C13.6587 12.0186 13.4499 12.1046 13.2954 12.2578C13.2751 12.2773 11.7624 13.4833 11.7624 13.4833C11.6604 13.5644 11.5391 13.6176 11.4104 13.6376C11.2816 13.6576 11.1499 13.6437 11.0281 13.5973C9.5157 13.0346 8.14193 12.1533 6.99995 11.0131C5.85798 9.87294 4.97449 8.50057 4.40939 6.98903C4.35929 6.86562 4.34295 6.7311 4.36206 6.59928C4.38118 6.46747 4.43505 6.34313 4.51814 6.23903C4.51814 6.23903 5.72414 4.72853 5.74439 4.70903C5.89759 4.55452 5.98355 4.34574 5.98355 4.12815C5.98355 3.91057 5.89759 3.70179 5.74439 3.54728C5.72189 3.52478 4.34039 1.72853 4.34039 1.72853C4.18356 1.58791 3.97889 1.5126 3.76832 1.51804C3.55776 1.52348 3.35724 1.60925 3.20789 1.75778L2.34539 2.50778C-1.88611 7.59503 11.0679 19.8305 15.5251 15.62L16.2091 14.8318C16.3704 14.6838 16.4675 14.4787 16.4799 14.2602C16.4922 14.0417 16.4187 13.827 16.2751 13.6618Z" fill={theme.palette.mode === "light" ? "#374957" : "#ffffff"} />
            </g>
            <defs>
                <clipPath id="clip0_842_5904">
                    <rect width="18" height="18" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}
