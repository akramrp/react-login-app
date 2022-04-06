import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './counterSlice'

import { Button, Fab, Typography } from "@mui/material";
import { Add, Remove } from '@mui/icons-material';


function Counter() {
  const count = useSelector((state) => state.counter.count)
  const themetextColor = useSelector((state) => state.theme.color)
  const dispatch = useDispatch()

  return (
    <>
      <Fab color="primary" aria-label="add" size="small" onClick={() => { dispatch(increment()) }}> <Add /> </Fab>
      <Typography variant='h4' style={{color:themetextColor}}> Count: {count}</Typography>
      <Fab color="secondary" aria-label="Remove" size="small" onClick={() => { dispatch(decrement()) }}> <Remove /> </Fab>

      {/* <Fab color="secondary" aria-label="Remove" size="small" > <Add /> 10 incrementByAmount </Fab> */}
      <br />
      <Button variant="contained" color='primary' size="small" onClick={() => { dispatch(incrementByAmount(10)) }} startIcon={<Add />}>10 incrementByAmount</Button>
    </>
  )
}

export default Counter