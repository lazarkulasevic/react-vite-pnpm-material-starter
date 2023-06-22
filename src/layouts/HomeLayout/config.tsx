import type { MenuItem } from './types'
import { Home, Lightbulb } from '@mui/icons-material'

const drawerWidth = 240
const menuItems: MenuItem[] = [
  {
    label: 'Home',
    path: '/',
    icon: <Home />
  },
  {
    label: 'Example',
    path: '/example',
    icon: <Lightbulb />
  }
]

export { drawerWidth, menuItems }
