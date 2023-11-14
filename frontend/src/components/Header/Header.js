import React from 'react'
import { Button, Grid, AppBar, Toolbar, Typography } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import HelpDialog from './HelpDialog'

const Header = () => {
  return (
    <AppBar className='header-strip' data-testid='Header'>
      <Toolbar className='tool-bar'>
        <Grid edge='start' className='logo-container'>
          <Typography className='logo'>Yair Mor</Typography>
        </Grid>
        <Grid container className='right-section' edge='end'>
          <Button className='help-btn'>
            <HelpOutlineIcon />
          </Button>
        </Grid>
      </Toolbar>
      {false && <HelpDialog />}
    </AppBar>
  )
}

export default Header
