import { Suspense } from 'react'
import type { AsyncComponentProps } from './types'

const AsyncComponent = ({ children }: AsyncComponentProps) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}

export default AsyncComponent
