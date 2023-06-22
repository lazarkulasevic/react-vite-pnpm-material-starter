---
to: src/components/<%= name %>/styled.tsx
---
import { styled } from '@mui/material/styles'
import { InputBase } from '@mui/material'

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%'
})) as typeof InputBase

export { StyledInputBase }
