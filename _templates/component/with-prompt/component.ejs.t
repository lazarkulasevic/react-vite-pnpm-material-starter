---
to: src/components/<%= name %>/<%= name %>.tsx
---
import type { <%= name %>Props } from './types'

const <%= name %> = ({ children }: <%= name %>Props) => {
  return (
    <>
      <div>Template for <%= name %> component.</div>
      <div>{children}</div>
    </>
  )
}

export default <%= name %>
