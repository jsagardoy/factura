import * as React from 'react';
import { Theme, withStyles, WithStyles, createStyles, TableHead } from '@material-ui/core';

interface TableHeaderProps extends WithStyles<typeof styles> {}

const styles = (theme: Theme) => createStyles({});

const TableHeaderInner: React.FC<TableHeaderProps> = props => {
    const { children } = props;
    return <TableHead>{children}</TableHead>;
};

export const TableHeaderComponent = withStyles(styles)(TableHeaderInner);
