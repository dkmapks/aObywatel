import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
    interface Theme {
        colors: {
            primary: {
                10: string;
                20: string;
                30: string;
                40: string;
                60: string;
                80: string;
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
            };
            secondary: {
                10: string;
                20: string;
                30: string;
                40: string;
                60: string;
                80: string;
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
            };
            neutral: {
                10: string;
                20: string;
                30: string;
                40: string;
                60: string;
                80: string;
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
            };
            green: {
                20: string;
                80: string;
                200: string;
            };
            orange: {
                20: string;
                80: string;
                200: string;
            };
            red: {
                20: string;
                80: string;
                200: string;
            };
            blue: {
                20: string;
                80: string;
                200: string;
            };
        };
    }
    interface ThemeOptions {
        colors: {
            primary: {
                10: string;
                20: string;
                30: string;
                40: string;
                60: string;
                80: string;
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
            };
            secondary: {
                10: string;
                20: string;
                30: string;
                40: string;
                60: string;
                80: string;
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
            };
            neutral: {
                10: string;
                20: string;
                30: string;
                40: string;
                60: string;
                80: string;
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
            };
            green: {
                20: string;
                80: string;
                200: string;
            };
            orange: {
                20: string;
                80: string;
                200: string;
            };
            red: {
                20: string;
                80: string;
                200: string;
            };
            blue: {
                20: string;
                80: string;
                200: string;
            };
        };
    }
}

const customTheme = createTheme({
    colors: {
        primary: {
            10: "#F4F6FB",
            20: "#DDEBFB",
            30: "#BCD9f9",
            40: "#9DC3EE",
            60: "#5094DF",
            80: "#1F71CC",
            100: "#0452A8",
            200: "#084297",
            300: "#053274",
            400: "#071F57",
            500: "#030F3A",
        },
        secondary: {
            10: "#FFF3F5",
            20: "#FFE9EC",
            30: "#FCD9DF",
            40: "#F8B9C3",
            60: "#F27F91",
            80: "#EE3955",
            100: "#D4213D",
            200: "#0452A8",
            300: "#063477",
            400: "#09215A",
            500: "#051342",
        },
        neutral: {
            10: "#F6F8F9",
            20: "#EFF1F3",
            30: "#E7EAED",
            40: "#D0D4DB",
            60: "#A4AAB2",
            80: "#808893",
            100: "#656A75",
            200: "#52575F",
            300: "#34383F",
            400: "#1F2328",
            500: "#101317",
        },
        green: {
            20: "#EEFAE1",
            80: "#74B05B",
            200: "#115A22",
        },
        orange: {
            20: "#FDF1D2",
            80: "#DC7606",
            200: "#924E00",
        },
        red: {
            20: "FFE9E5",
            80: "#F15A4E",
            200: "#9B1813",
        },
        blue: {
            20: "#E7F2FF",
            80: "#1A7EEC",
            200: "#0059BC",
        },
    },
});

export default customTheme;