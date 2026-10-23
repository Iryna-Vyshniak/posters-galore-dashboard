import {
  DollarSign,
  ShoppingCart,
  MessageSquareText,
  UserPlus,
} from "lucide-react";
import { StatCard } from "./StatCard";

export function StatsOverview() {
  return (
    <section id="dashboard" tabIndex={-1} aria-labelledby="dashboard-title">
      <div className="page-heading">
        <div>
          <p className="eyebrow">YOUR STORE AT A GLANCE</p>
          <h1 id="dashboard-title">
            Dashboard<span className="heading-dot">.</span>
          </h1>
          <p className="page-description">
            A little overview of everything happening in your shop.
          </p>
        </div>
        <div className="date-label">
          <span aria-hidden="true" className="status-dot" />
          October 2026<span className="date-caption">Monthly overview</span>
        </div>
      </div>
      <div className="stats-grid">
        <StatCard
          label="Monthly revenue"
          value="$1,385"
          detail="USD · this month"
          icon={DollarSign}
          tone="revenue"
        />
        <StatCard
          label="New orders"
          value="12"
          detail="Waiting to be fulfilled"
          icon={ShoppingCart}
          tone="orders"
        />
        <StatCard
          label="Pending reviews"
          value="3"
          detail="A few words from your fans"
          icon={MessageSquareText}
          tone="reviews"
        />
        <StatCard
          label="New customers"
          value="8"
          detail="New faces, great taste"
          icon={UserPlus}
          tone="customers"
        />
      </div>
    </section>
  );
}
