import * as React from 'react';
import { Theme, withStyles, WithStyles, createStyles, TableHead } from '@material-ui/core';

interface TableBodyrops extends WithStyles<typeof styles> {}

const styles = (theme: Theme) => createStyles({});

const TableBodyInner: React.FC<TableBodyrops> = props => {
    const { children } = props;
    return <TableHead>{children}</TableHead>;
};

export const TableBodyComponent = withStyles(styles)(TableBodyInner);
