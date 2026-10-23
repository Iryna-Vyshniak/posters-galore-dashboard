import { Navigation } from "../components/layout/Navigation";
import { DashboardPage } from "../features/dashboard/DashboardPage";

export function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <DashboardPage />
    </>
  );
}
