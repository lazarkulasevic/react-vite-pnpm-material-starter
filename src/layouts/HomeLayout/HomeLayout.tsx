import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {
  Box,
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  CssBaseline,
  ButtonBase,
  AppBar
} from '@mui/material'
import { Menu as IconMenu, MenuOpen as IconMenuOpen } from '@mui/icons-material'
import { drawerWidth, menuItems } from './config'
import { RouterView, Spacer, StyledToolbar } from './styled'
import type { MenuItem } from './types'

const foundMenuItem: MenuItem = menuItems.find((item) => window.location.pathname === item.path) || menuItems[0]
const initialSelectedIndexState = menuItems.indexOf(foundMenuItem)

const HomeLayout = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndexState)

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen)
  }

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <StyledToolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={toggleDrawer} edge="start" sx={{ mr: 1 }}>
            {isDrawerOpen ? <IconMenuOpen /> : <IconMenu />}
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <ButtonBase component={NavLink} to="/">
              Home
            </ButtonBase>
          </Box>
        </StyledToolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          zIndex: 1,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <Spacer />
        <List sx={{ p: 0 }}>
          {menuItems.map((item, index) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <RouterView open={isDrawerOpen}>
        <Spacer />
        <Outlet />
      </RouterView>
    </Box>
  )
}

export default HomeLayout
