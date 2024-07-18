import BarChart from "./BarChart";
import LineChart from "./LineChart";
type barDescriptionType = { description: string; color: string };
export default function ChartWrapper({
  title,
  barDescriptions,
  options,
  data,
  type,
}: {
  title: string;
  barDescriptions: barDescriptionType[];
  options: any;
  data: any;
  type: string;
}) {
  return (
    <div className="card card-group-row__card">
      <div className="card-header d-flex align-items-center">
        <strong>{title}</strong>
      </div>
      <div className="card-body text-muted flex d-flex flex-column align-items-center justify-content-center">
        <div className="chart w-100" style={{ height: "300px" }}>
          <div className="chartjs-size-monitor">
            <div className="chartjs-size-monitor-expand">
              <div className=""></div>
            </div>
            <div className="chartjs-size-monitor-shrink">
              <div className=""></div>
            </div>
          </div>
          {type == "bar" && <BarChart options={options} data={data} />}
          {type == "line" && <LineChart options={options} data={data} />}
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
