import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppLayout } from '@layout';
import LuxonUtils from '@date-io/luxon';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { customTheme } from '../theme';
import { ReceptoresScene, FacturaScene, EmisoresScene } from '@scenes';

ReactDOM.render(
    <>
        <MuiThemeProvider theme={customTheme}>
            <CssBaseline />
            <AppLayout>
                <EmisoresScene />
                <ReceptoresScene />
                <FacturaScene />
            </AppLayout>
        </MuiThemeProvider>
    </>,
    document.getElementById('root'),
);
