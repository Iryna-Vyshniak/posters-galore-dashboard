import { products } from "../data/dashboard.data";
import { formatCurrency } from "../../../shared/lib/formatters";

export function CatalogPreview() {
  return (
    <section
      id="catalog"
      tabIndex={-1}
      className="catalog-section"
      aria-labelledby="catalog-title"
    >
      <div className="catalog-heading">
        <div>
          <p className="eyebrow">FROM THE COLLECTION</p>
          <h2 id="catalog-title">A few shop favorites</h2>
        </div>
        <span className="catalog-caption">
          Thoughtfully picked. Beautifully printed.
        </span>
      </div>
      <ul className="catalog-grid">
        {products.map((product) => (
          <li className="product-card" key={product.name}>
            <div
              className={`poster-art ${product.className}`}
              role="img"
              aria-label={`${product.name}, an abstract decorative poster preview`}
            >
              <span className="poster-shape" />
            </div>
            <div className="product-info">
              <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>
              <span>{formatCurrency(product.price)}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
