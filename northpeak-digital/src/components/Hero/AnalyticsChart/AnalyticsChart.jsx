import "./AnalyticsChart.css";

function AnalyticsChart() {
  return (
    <div className="analytics-chart">

      {/* Y Axis */}

      <div className="y-axis">
        <span>120k</span>
        <span>90k</span>
        <span>60k</span>
        <span>30k</span>
        <span>0</span>
      </div>

      {/* Chart */}

      <div className="chart-wrapper">

        <svg
          viewBox="0 0 800 320"
          preserveAspectRatio="none"
          className="chart-svg"
        >

          <defs>

            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3b82f6"/>
              <stop offset="100%" stopColor="#60a5fa"/>
            </linearGradient>

            <linearGradient
              id="areaGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0"/>
            </linearGradient>

          </defs>

          {/* Horizontal Grid */}

          <line x1="0" y1="40" x2="800" y2="40" className="grid-line"/>
          <line x1="0" y1="100" x2="800" y2="100" className="grid-line"/>
          <line x1="0" y1="160" x2="800" y2="160" className="grid-line"/>
          <line x1="0" y1="220" x2="800" y2="220" className="grid-line"/>
          <line x1="0" y1="280" x2="800" y2="280" className="grid-line"/>

          {/* Area */}

          <path
            d="
            M30 260
            C100 240 150 180 220 170
            S340 110 420 120
            S560 80 650 90
            S740 50 780 60
            L780 300
            L30 300
            Z
            "
            fill="url(#areaGradient)"
          />

          {/* Line */}

          <path
            className="main-line"
            d="
            M30 260
            C100 240 150 180 220 170
            S340 110 420 120
            S560 80 650 90
            S740 50 780 60
            "
          />

          {/* Points */}

          <circle cx="30" cy="260" r="6" className="point"/>
          <circle cx="220" cy="170" r="6" className="point"/>
          <circle cx="420" cy="120" r="6" className="point"/>
          <circle cx="650" cy="90" r="6" className="point"/>
          <circle cx="780" cy="60" r="6" className="point"/>

        </svg>

        {/* X Axis */}

        <div className="months">

          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>

        </div>

      </div>

    </div>
  );
}

export default AnalyticsChart;