import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { WorksPage } from './pages/WorksPage'
import { WorkPage } from './pages/WorkPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="works" element={<WorksPage />} />
        <Route path="works/:slug" element={<WorkPage />} />
        <Route path=":locale">
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="works" element={<WorksPage />} />
          <Route path="works/:slug" element={<WorkPage />} />
        </Route>
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  )
}
