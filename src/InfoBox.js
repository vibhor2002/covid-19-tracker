import React from 'react'
import './InfoBox.css';
import { Card, CardContent, Typography} from "@mui/material"

function InfoBox({title, cases, total}) {
  return (
    <Card className='infoBox'>
        <CardContent>
            {/* Coronavirus Cases - Title */}
            <Typography className='infoBox__title' color="textSecondary">{title}</Typography>

            {/* 120k - Number of Cases */}
            <h2 className='infoBox__cases'>{cases}</h2>

            {/* 1.2M - Totol Cases */}
            <Typography className='infoBox__total' color="textSecondary">{total} Total</Typography>

        </CardContent>
    </Card>
  )
}

export default InfoBox