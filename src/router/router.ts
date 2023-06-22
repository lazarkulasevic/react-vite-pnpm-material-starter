import { createBrowserRouter } from 'react-router-dom'
import type { Router as RemixRouter } from '@remix-run/router'
import { routes } from './routes'

const router: RemixRouter = createBrowserRouter(routes)

export { router }
