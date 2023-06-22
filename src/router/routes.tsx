import { createRoutesFromElements, Route } from 'react-router-dom'
import { lazy } from 'react'
import { HomeLayout } from '@/layouts'
import { AsyncComponent } from '@/components'
import { HomePage, ExamplePage } from '@/pages'

const NotFound = lazy(() => import('../pages/NotFound/NotFound'))

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/example" element={<ExamplePage />} />
    </Route>
    <Route
      path="*"
      element={
        <AsyncComponent>
          <NotFound />
        </AsyncComponent>
      }
    />
  </>
)

export { routes }
