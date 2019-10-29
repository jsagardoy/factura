import * as React from 'react';
import { createStyles, WithStyles, Theme, withStyles } from '@material-ui/core';

interface AppHeaderProps extends WithStyles <typeof styles > {}

const styles = (theme: Theme) => createStyles({});

const AppHeaderInner: React.FC < AppHeaderProps > = (props: AppHeaderProps) => {
    const {classes} = props;
    return(
        <div>
            <h1>Cabecera</h1>
        </div>
    );
};
export const AppHeader = withStyles(styles)(AppHeaderInner);
