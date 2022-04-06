import React from 'react'
import { Box, Divider } from "@mui/material";

// import from reducre
import Counter from "../features/counter/Counter"
import Coin from "../features/coin/Coin"
import Theme from "../features/theme/Theme"
import { useGetAllPostQuery } from "../services/post"

//import from mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }
// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const ReduxCounter = () => {
    // const [count, setCount] = React.useState(0);
    const postResponse = useGetAllPostQuery();
    // const {data, isError, isLoading, isSuccess, endpointName } = useGetAllPostQuery();     // destructure obj. data
    // console.log('postResponse==>', postResponse)
    if (postResponse.isError) return <div>Ooops!  Error:: {postResponse.error.error}</div>;
    if (postResponse.isLoading) return <div>Please Wait, Loading....</div>;
    return (
        <Box sx={{ textAlign: 'center', marginTop: 5 }}>
            <Divider orientation='vertical'>
                =================================
                React Redux Counter Section start
                =================================
            </Divider>
            <Divider orientation='vertical'>Component:1,  Counter Section</Divider>
            <Counter />

            <br /><br />
            <Divider orientation='vertical'>Component:2,  Coin Section</Divider>
            <Coin />

            <br /><br />
            <Divider orientation='vertical'>Component:3, Theme Section</Divider>
            <Theme />

            <br />
            <Divider orientation='vertical'>
                ==================================
                React Redux Counter Section end
                =================================
            </Divider>


            <br /><br />
            <Divider orientation='vertical'>
                =============================
                Redax Toolkit - RTK Query (Get All Data) :: Start
                =============================
            </Divider>


            <TableContainer textAlign="center" component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>UserID</TableCell>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Body</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {postResponse.data.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.userId}
                                </TableCell>
                                <TableCell align="left">{row.id}</TableCell>
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell align="left">{row.body}</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            <br />
            <Divider orientation='vertical'>
                =============================
                Redax Toolkit - RTK Query (Get All Data) :: End
                =============================
            </Divider>

        </Box>
    )
}

export default ReduxCounter