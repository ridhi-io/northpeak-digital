import "./Dashboard.css";
import AnalyticsChart from "../AnalyticsChart/AnalyticsChart";
import {
  FaArrowUp,
  FaChartLine,
  FaUsers,
  FaBullseye,
  FaWallet,
} from "react-icons/fa";

const metrics = [
  {
    title: "Revenue",
    value: "£84.2K",
    change: "+18.2%",
    icon: <FaWallet />,
  },
  {
    title: "Visitors",
    value: "124.8K",
    change: "+32.4%",
    icon: <FaUsers />,
  },
  {
    title: "Leads",
    value: "2,461",
    change: "+11.8%",
    icon: <FaBullseye />,
  },
  {
    title: "Growth",
    value: "+182%",
    change: "+42%",
    icon: <FaChartLine />,
  },
];

const campaigns = [
  {
    name: "SEO Optimisation",
    growth: "+24%",
  },
  {
    name: "Shopify Store",
    growth: "+18%",
  },
  {
    name: "Website Redesign",
    growth: "+31%",
  },
];

function Dashboard() {
  return (
    <div className="dashboard">

      {/* HEADER */}

      <div className="dashboard-header">

        <div>

          <span className="dashboard-tag">
            Growth Dashboard
          </span>

          <h2>Business Analytics</h2>

          <p>Performance Overview</p>

        </div>

        <div className="live">

          <span className="dot"></span>

          Live

        </div>

      </div>

      {/* KPI */}

      <div className="metric-grid">

        {metrics.map((item, index) => (

          <div className="metric-card" key={index}>

            <div className="metric-top">

              <span>{item.icon}</span>

              <small>
                <FaArrowUp />
                {item.change}
              </small>

            </div>

            <h3>{item.value}</h3>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

      {/* CHART */}

      <div className="graph-card">

        <div className="graph-header">

          <h3>Traffic Growth</h3>

          <div className="filters">

            <button className="active">1M</button>
            <button>6M</button>
            <button>1Y</button>

          </div>

        </div>

        <AnalyticsChart />

      </div>

      {/* TABLE */}

      <div className="campaigns">

        <div className="campaign-title">

          <h3>Top Campaigns</h3>

          <span>View All</span>

        </div>

        {campaigns.map((item, index) => (

          <div className="campaign" key={index}>

            <div>

              <h4>{item.name}</h4>

              <p>Organic Growth</p>

            </div>

            <strong>{item.growth}</strong>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;