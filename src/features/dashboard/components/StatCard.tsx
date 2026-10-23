import type { LucideIcon } from "lucide-react";
import type { StatTone } from "../types/dashboard.types";
export function StatCard({
  label,
  value,
  detail,
  icon: Icon,
  tone,
}: {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
  tone: StatTone;
}) {
  return (
    <article className="stat-card">
      <div className={`stat-icon ${tone}`}>
        <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
      </div>
      <div className="stat-content">
        <h2>{label}</h2>
        <p className="stat-value">{value}</p>
        <p className="stat-detail">{detail}</p>
      </div>
    </article>
  );
}
