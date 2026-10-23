import { StatsOverview } from "./components/StatsOverview";
import { WelcomeCard } from "./components/WelcomeCard";
import { PendingOrders } from "./components/PendingOrders";
import { PendingReviews } from "./components/PendingReviews";
import { NewCustomers } from "./components/NewCustomers";
import { CatalogPreview } from "./components/CatalogPreview";
import { Footer } from "../../components/layout/Footer";

export function DashboardPage() {
  return (
    <main id="main-content" className="main-content" tabIndex={-1}>
      <StatsOverview />
      <div className="dashboard-grid">
        <div className="primary-column">
          <WelcomeCard />
          <PendingOrders />
        </div>
        <PendingReviews />
        <NewCustomers />
      </div>
      <CatalogPreview />
      <Footer />
    </main>
  );
}
