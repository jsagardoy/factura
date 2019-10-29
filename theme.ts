import { createMuiTheme, Theme } from '@material-ui/core/styles';

export const customTheme: Theme = createMuiTheme({
    typography: {
    },
    palette: {
        primary: {
            main: '#1B334B',
            500: '#6585AE',
            700: '#2C4B6A',
        },
        secondary: {
            main: '#6785AD',
        },
        error: {
            main: '#bf360c',
        },
    },
});
