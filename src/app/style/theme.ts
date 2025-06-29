// src/app/style/theme.ts
import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Palette {
        custom: {
            first: { 100: string; 200: string };
            second: { 100: string; 200: string; 300: string };
            fifth: { white: string; 100: string };
            sixth: { black: string; 100: string; 200: string };
            seventh: { 100: string };
            button: { 100: string; 200: string };
        };
    }

    interface PaletteOptions {
        custom?: {
            first: { 100: string; 200: string };
            second: { 100: string; 200: string; 300: string };
            fifth: { white: string; 100: string };
            sixth: { black: string; 100: string; 200: string };
            seventh: { 100: string };
            button: { 100: string; 200: string };
        };
    }
}

const theme = createTheme({
    typography: {
        h3: {
            fontWeight: 700,
            fontSize: '32px',
            color: '#393939',
        },
        h4: {
            fontWeight: 400,
            fontSize: '23px',
            color: '#696969',
            lineHeight: '1.5',
        },

        // You can define other variants here if needed
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,   // 40rem
            md: 768,   // 48rem
            lg: 1024,  // 64rem
            xl: 1280,  // 80rem
        },
    },
    palette: {
        primary: { main: "#F37021" },
        secondary: { main: "#2492EB" },
        custom: {
            first: {
                100: "#FF914C",
                200: "#2563EB",
            },
            second: {
                100: "#1E293B",
                200: "#111827",
                300: "#404346",
            },
            fifth: {
                white: "#FFFFFF",
                100: "#F6F6F6",
            },
            sixth: {
                black: "#000000",
                100: "#595959",
                200: "#666666",
            },
            seventh: {
                100: "#ef4a23",
            },
            button: {
                100: "#F37021",
                200: "#c2510a",
            },


        },
    },
});

export default theme;
