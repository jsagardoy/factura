import * as React from 'react';
import { withStyles, createStyles, WithStyles, Theme } from '@material-ui/core';
import { AppHeader, AppContent } from './components';

const styles = (theme: Theme) => createStyles({});
interface Props extends WithStyles<typeof styles> {}
const AppLayoutInner: React.FunctionComponent<Props> = (props) => {
    const {classes, children} = props;
    return(
        <div>
            <AppHeader/>
            <AppContent>
                {children}
            </AppContent>
        </div>

    );
};

export const AppLayout = withStyles(styles)(AppLayoutInner);
