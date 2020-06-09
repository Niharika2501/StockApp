import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {columns} from './config';
import {get}from 'lodash';
const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const getHeader=(config)=>{
    return(<StyledTableCell>{config.title}</StyledTableCell>);
   
}
const getContent=(config,obj)=>{
    return(<StyledTableCell >{get(obj,[config.dataIndex],'')}</StyledTableCell>)
}

export const  CustomizedTables= (props)=> {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
              {columns.map(config=>getHeader(config))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.stocks && props.stocks.map((row) => (
            <StyledTableRow key={row.name}>
              {columns.map(config=>getContent(config,row))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
