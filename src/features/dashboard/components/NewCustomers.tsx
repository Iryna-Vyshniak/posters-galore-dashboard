import { UserPlus } from "lucide-react";
import { Avatar } from "../../ui/Avatar";
import { customers } from "../data/dashboard.data";

export function NewCustomers() {
  return (
    <section
      id="customers"
      tabIndex={-1}
      className="panel customers-panel"
      aria-labelledby="customers-title"
    >
      <div className="panel-heading">
        <h2 id="customers-title">New customers</h2>
        <span className="count-badge">8</span>
      </div>
      <p className="section-description">Welcome to the collection.</p>
      <ul className="customer-list">
        {customers.map((name, i) => (
          <li key={name}>
            <Avatar name={name} index={i} />
            <div>
              <p className="item-name">{name}</p>
              <p className="item-detail">Joined this month</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="customer-note">
        <UserPlus size={18} aria-hidden="true" />
        <p>
          A growing community.
          <br />
          <strong>One print at a time.</strong>
        </p>
      </div>
    </section>
  );
}
