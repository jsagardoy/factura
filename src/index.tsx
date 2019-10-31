import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppLayout } from '@layout';
import LuxonUtils from '@date-io/luxon';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { customTheme } from '../theme';
import { MainContainer } from '@scenes';

ReactDOM.render(
    <>
        <MuiThemeProvider theme={customTheme}>
            <CssBaseline />
            <MainContainer />
        </MuiThemeProvider>
    </>,
    document.getElementById('root'),
);
