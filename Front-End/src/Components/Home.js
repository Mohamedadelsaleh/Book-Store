import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Box display='flex' flexDirection='column' alignItems='center'>
                <Button LinkComponent={Link} 
                        to='/books' 
                        sx={{marginTop:15, background:'orangered'}} 
                        variant='contained'>
                    <Typography sx={{fontFamily:'monospace'}} variant='h3'>View All Books</Typography>
                </Button>    
            </Box>
        </div>
    )
}

export default Home