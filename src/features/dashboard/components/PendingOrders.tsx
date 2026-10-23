import { Clock3, Package } from "lucide-react";
import { Avatar } from "../../ui/Avatar";
import { orders } from "../data/dashboard.data";
import { formatCurrency } from "../../../shared/lib/formatters";

export function PendingOrders() {
  return (
    <section
      id="sales"
      tabIndex={-1}
      className="panel"
      aria-labelledby="orders-title"
    >
      <div className="panel-heading">
        <div className="flex items-center gap-2">
          <h2 id="orders-title">Pending orders</h2>
          <span className="count-badge">12</span>
        </div>
        <span className="panel-caption">4 most recent</span>
      </div>
      <ul className="order-list">
        {orders.map((order, i) => (
          <li key={order.id}>
            <Avatar name={order.customer} initials={order.initials} index={i} />
            <div className="min-w-0 flex-1">
              <p className="item-name">{order.customer}</p>
              <p className="item-detail">
                <time dateTime={order.date}>
                  {order.date.slice(5, 10).replace("-", "/")}
                </time>
                <span aria-hidden="true"> · </span>
                {order.items} {order.items === 1 ? "item" : "items"}
                <span aria-hidden="true"> · </span>
                {order.id}
              </p>
            </div>
            <div className="order-amount">
              <span>{formatCurrency(order.total)}</span>
              <span className="order-status">
                <Clock3 size={10} aria-hidden="true" />
                Pending
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="panel-footer">
        <Package size={15} aria-hidden="true" />
        <span>Every order is the start of a new gallery wall.</span>
      </div>
    </section>
  );
}
