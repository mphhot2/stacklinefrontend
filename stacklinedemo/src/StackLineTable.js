import data from './stackline_frontend_assessment_data_2021.json'
import React, {
    useState,
} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './StackLineTable.css';
import moment from 'moment';
function StackLineTable() {
    const [ dataDetails ] = useState(data);
    return (
        <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">WEEK ENDING</TableCell>
              <TableCell align="right">RETAIL SALES</TableCell>
              <TableCell align="right">WHOLESALE SALES</TableCell>
              <TableCell align="right">UNITS SOLD</TableCell>
              <TableCell align="right">RETAILER MARGIN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataDetails[0].sales.map((row) => (
              <TableRow
                key={"id" + Math.random().toString(16).slice(2)}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{moment(row.weekEnding, 'YYYY-MM-DD').format('MM-DD-YY')}</TableCell>
                <TableCell align="right">{'$' + row.retailSales.toLocaleString()}</TableCell>
                <TableCell align="right">{'$' + row.wholesaleSales.toLocaleString()}</TableCell>
                <TableCell align="right">{row.unitsSold}</TableCell>
                <TableCell align="right">{'$' + row.retailerMargin.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default StackLineTable;
