import { ExternalLink } from "lucide-react";

export function WelcomeCard() {
  return (
    <article className="panel welcome-card" aria-labelledby="welcome-title">
      <div className="welcome-image">
        <img
          src="/images/welcome-800.webp"
          srcSet="/images/welcome-480.webp 480w, /images/welcome-800.webp 800w, /images/welcome-1100.webp 1100w"
          sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 50vw, (min-width: 640px) 90vw, 100vw"
          alt="Poster shop founder in a tailored suit"
          width="1100"
          height="600"
          fetchPriority="high"
        />
        <span className="image-tag">A SMALL SHOP. A BIG PICTURE.</span>
      </div>
      <div className="welcome-content">
        <p className="eyebrow">MAKE YOURSELF AT HOME</p>
        <h1 id="welcome-title">Welcome to Posters Galore.</h1>
        <p>
          Art for every wall, and a little room to grow. This is your space to
          keep an eye on orders, meet your customers, and see what’s making an
          impression.
        </p>
        <div className="welcome-footer">
          <span className="demo-note">
            <span aria-hidden="true" />
            Sample data · read-only demo
          </span>
          <a
            href="https://marmelab.com/react-admin/"
            target="_blank"
            rel="noreferrer"
          >
            React-admin inspiration
            <ExternalLink size={13} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
