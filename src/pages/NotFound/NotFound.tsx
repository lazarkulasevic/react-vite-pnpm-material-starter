import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100svh'
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h5" sx={{ textAlign: 'center', p: 2, mb: 1 }}>
        Oops! Page not found.
      </Typography>
      <Button variant="contained" onClick={() => navigate('/')}>
        Go Home
      </Button>
    </Box>
  )
}

export default NotFound
