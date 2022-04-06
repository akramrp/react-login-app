import { Typography } from '@mui/material'
import React from 'react'
import {useSelector} from 'react-redux'

function Coin() {
    const coin = useSelector((state) => state.counter.count)
    const themetextColor = useSelector((state) => state.theme.color)
    return (
        <Typography variant='h4' style={{color:themetextColor}}>Coin: {coin}</Typography>
    )
}

export default Coin
