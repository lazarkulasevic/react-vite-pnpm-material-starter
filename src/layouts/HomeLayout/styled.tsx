import { styled, Toolbar } from '@mui/material'
import type { CustomPropOpen } from './types'
import type { Theme } from '@mui/material/styles'

const RouterView = styled('main')<CustomPropOpen>(({ theme, open }: { theme: Theme; open: boolean }) => ({
  flexGrow: 1,
  padding: '20px',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}))

const Spacer = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}))

const StyledToolbar = styled(Toolbar)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.primary[theme.palette.mode === 'light' ? 'main' : 'dark']
})) as typeof Toolbar

export { RouterView, Spacer, StyledToolbar }
