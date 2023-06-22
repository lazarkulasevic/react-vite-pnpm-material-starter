import type { ReactElement } from 'react'

interface MenuItem {
  readonly label: string
  readonly path: string
  readonly icon: ReactElement
}

interface CustomPropOpen {
  open: boolean
}

export type { MenuItem, CustomPropOpen }
