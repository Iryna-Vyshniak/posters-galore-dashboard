import { Star, MessageSquareText } from "lucide-react";
import { Avatar } from "../../ui/Avatar";
import { reviews } from "../data/dashboard.data";

export function PendingReviews() {
  return (
    <section
      id="reviews"
      tabIndex={-1}
      className="panel reviews-panel"
      aria-labelledby="reviews-title"
    >
      <div className="panel-heading">
        <h2 id="reviews-title">Pending reviews</h2>
        <span className="count-badge">3</span>
      </div>
      <p className="section-description">
        Fresh impressions from your customers.
      </p>
      <ul className="review-list">
        {reviews.map((review, i) => (
          <li key={review.id}>
            <div className="flex items-center gap-3">
              <Avatar
                name={review.name}
                initials={review.initials}
                index={i + 1}
              />
              <div>
                <p className="item-name">{review.name}</p>
                <p className="item-detail">{review.date}</p>
              </div>
            </div>
            <div
              className="stars"
              aria-label={`${review.rating} out of 5 stars`}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={13}
                  className={star <= review.rating ? "filled" : ""}
                  aria-hidden="true"
                />
              ))}
            </div>
            <h3>{review.title}</h3>
            <p className="review-text">{review.text}</p>
            <p className="review-product">{review.product}</p>
          </li>
        ))}
      </ul>
      <div className="panel-footer">
        <MessageSquareText size={14} aria-hidden="true" />
        <span>Awaiting moderation</span>
      </div>
    </section>
  );
}
