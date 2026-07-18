import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const WorksPage = lazy(() => import("./pages/WorksPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const pageRoutes = (
  <>
    <Route index element={<HomePage />} />
    <Route path="services" element={<ServicesPage />} />
    <Route path="works" element={<WorksPage />} />
    <Route path="works/:slug" element={<WorkPage />} />
  </>
);

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="route-loader" role="status" aria-label="Loading" />
      }
    >
      <Routes>
        <Route element={<SiteLayout />}>
          {pageRoutes}
          <Route path=":locale">{pageRoutes}</Route>
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
