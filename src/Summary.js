import data from './data.js';
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Summary = () => {

  const StyledTable = styled(Table)({
    width: '70%',
    top: '100px',
    marginLeft: '220px',
    position: 'absolute',
    background: 'white',

    '@media (max-width: 768px)': {
      width: '100%',
      marginLeft: '0',
      top: '0',
      position: 'static',
    },
  });

  const Thead = styled(TableRow)`
    background: #75CCEC;
    & > th {
      color: black;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
    }
  `;

  const Tbody = styled(TableRow)`
    & > td {
      text-align: center;
      font-size: 18px;
    }
  `;

  const TransparentButton = styled(Button)`
    background-color: paleblue;
    color: white;
    &:hover {
      background-color: transparent;
    }
  `;

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <h1 style={{ textAlign: 'center' }}>QUADB-Project</h1>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Preview</TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <Tbody key={item.show.id}>
              <TableCell>{item.show.id}</TableCell>
              <TableCell>{item.show.name}</TableCell>
              <TableCell>
                <img src={item.show.image.medium} alt="Show" style={{ width: '100px', height: 'auto' }} />
              </TableCell>
              <TableCell>
                <TransparentButton variant="contained" component={Link} to={`/blogs/${item.show.id}`}>
                  Know it!
                </TransparentButton>
              </TableCell>
            </Tbody>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default Summary;
