type barDescriptionType = { description: string; color: string };
export default function CommentChartWrapper({
  title,
  barDescriptions,
  children,
  type
}: {
  title: string;
  barDescriptions: barDescriptionType[];
    children: React.ReactNode;
  type?: string
}) {
  return (
    <div className="card card-group-row__card">
      <div className="card-header d-flex align-items-center">
        <strong>{title}</strong>
      </div>
      <div className="card-body text-muted flex d-flex flex-column align-items-center justify-content-center">
        <div className={type == "pie" ? "chart" : "chart w-100"} style={{ height: "300px" }}>
          <div className="chartjs-size-monitor">
            <div className="chartjs-size-monitor-expand">
              <div className=""></div>
            </div>
            <div className="chartjs-size-monitor-shrink">
              <div className=""></div>
            </div>
          </div>
          {children}
        </div>
        <div
          id="repeatCustomerRateChartLegend"
          className="chart-legend chart-legend--horizontal mt-16pt"
        >
          {barDescriptions.map((data: barDescriptionType) => (
            <span key={data.color} className="chart-legend-item">
              <i
                className="chart-legend-indicator"
                style={{ backgroundColor: data.color }}
              ></i>
              {data.description}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
