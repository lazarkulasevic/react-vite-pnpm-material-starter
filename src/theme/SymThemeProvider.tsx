import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { SymThemeProviderProps } from './types'

const SymThemeProvider = ({ children }: SymThemeProviderProps) => {
  const theme = createTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default SymThemeProvider
