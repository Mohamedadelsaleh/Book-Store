import React, { useState } from 'react';
import {AppBar, Typography, Toolbar, Tabs, Tab} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom'

const Header = () => {
    
    const[bar, setBar] = useState();

    return (
        <div>
            <AppBar sx={{backgroundColor:"#232F3D"}} position='sticky' >
                <Toolbar>
                    <NavLink to='/' style={{color:'white'}}>
                        <Typography>
                            <LibraryBooksIcon />
                        </Typography>
                    </NavLink>
                    <Tabs   sx={{ml:"auto"}}
                            textColor='inherit' 
                            indicatorColor='primary' 
                            value={bar} 
                            onChange={(e, bar)=> setBar(bar)} >
                        <Tab LinkComponent={NavLink} to="/add" label='Add Product' />
                        <Tab LinkComponent={NavLink} to="/books" label='Books' />               
                        <Tab LinkComponent={NavLink} to="/about" label='About US' />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header