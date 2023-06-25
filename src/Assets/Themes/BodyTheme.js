import { createTheme} from "@mui/material/styles";

const BodyTheme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#ffffff',
        },
    },
    components: {
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: 'desiredColor',
                },
            },
        },
    },
});

export default BodyTheme;