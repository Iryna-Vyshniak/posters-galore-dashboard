import { useRef, useState } from "react";
import {
  LayoutDashboard,
  DollarSign,
  Images,
  Users,
  MessageSquare,
  Menu,
  X,
  Store,
  ArrowUpRight,
} from "lucide-react"; 
const items = [
  { label: "Dashboard", href: "#dashboard", icon: LayoutDashboard },
  { label: "Sales", href: "#sales", icon: DollarSign },
  { label: "Catalog", href: "#catalog", icon: Images },
  { label: "Customers", href: "#customers", icon: Users },
  { label: "Reviews", href: "#reviews", icon: MessageSquare },
];
export function Navigation() {
  const menuRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#dashboard");
  return (
    <>
      <header className="app-header">
        <button
          ref={menuRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <a className="wordmark" href="#dashboard">
          Posters Galore<span aria-hidden="true">✦</span>
        </a>
        <span className="header-label">THE ART OF EVERYDAY</span>
        <div className="account">
          <span className="account-avatar" aria-hidden="true">
            JD
          </span>
          <span className="account-name">
            Jamie Davis<span>Store administrator</span>
          </span>
        </div>
      </header>
      <aside
        className={`sidebar ${open ? "is-open" : ""}`}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
            menuRef.current?.focus();
          }
        }}
      >
        <p className="eyebrow sidebar-label">WORKSPACE</p>
        <nav id="primary-navigation" aria-label="Primary">
          <ul>
            {items.map(({ label, href, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-current={active === href ? "location" : undefined}
                  onClick={() => {
                    setActive(href);
                    setOpen(false);
                    document
                      .querySelector<HTMLElement>(href)
                      ?.focus({ preventScroll: true });
                  }}
                >
                  <Icon size={19} aria-hidden="true" />
                  <span>{label}</span>
                  {label === "Reviews" && <span className="nav-badge">3</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar-bottom">
          <div className="store-icon">
            <Store size={20} aria-hidden="true" />
          </div>
          <p>
            Your little poster shop<span>Good things are taking shape.</span>
          </p>
          <a
            href="https://marmelab.com/react-admin/"
            target="_blank"
            rel="noreferrer"
          >
            About the inspiration
            <ArrowUpRight size={14} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <span className="demo-label">
            <span aria-hidden="true" />
            Demo workspace
          </span>
        </div>
      </aside>
    </>
  );
}
