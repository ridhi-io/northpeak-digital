import "./MetricCard.css";

function MetricCard({
  title,
  value,
  change,
  positive = true,
}) {
  return (
    <div className="metric-card">

      <span className="metric-title">
        {title}
      </span>

      <h3>{value}</h3>

      <p className={positive ? "positive" : "negative"}>
        {change}
      </p>

    </div>
  );
}

export default MetricCard;