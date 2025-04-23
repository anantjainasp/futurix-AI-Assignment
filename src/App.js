import Layout from './components/Layout';
import Header from './components/Header';
import TopSummary from './components/TopSummary';
import StatsCards from './components/StatsCards';
import BotsStrategies from './components/BotsStrategies';
import PerformanceCards from './components/PerformanceCards';
import DashboardChart from './components/DashboardChart';
import PieChartWidget from './components/PieChartWidget';
// import BarChartWidget from './components/BarChartWidget';
// import LineChart from './components/LineChart';
import DoughnutChartWidget from './components/DoughnutChartWidget';
// import StackedProfitRevenueUsers from './components/StackedProfitRevenueUsers';
// import RadarChartWidget from './components/RadarChartWidget';
import ActivityTable from './components/ActivityTable';
import InfoPanels from './components/InfoPanels';
import MiniKPIWidgets from './components/MiniKPIWidgets';
import NewsSection from './components/NewsSection';
import Sidebar from './components/Sidebar';
import CandlestickChart from './components/CandlestickChart';
import FinancialValuationSection from './components/FinancialValuationSection';
import RatiosSection from './components/RatiosSection';
import ShareholdingPieChart from "./components/ShareholdingPieChart";
import AboutCompanySection from "./components/AboutCompanySection";
import PeerComparisonSection from "./components/PeerComparisonSection";
import CorporateActionSection from './components/CorporateActionSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#232526] to-[#23272e] text-white flex flex-col">
      <Layout>
        <div className="flex flex-1">
          {/* Sidebar on the left side */}
          <div className="hidden md:block md:w-64 flex-shrink-0">
            <Sidebar />
          </div>
          <div className="max-w-7xl mx-auto px-3 md:px-8 py-8 flex-1 flex flex-col">
            <Header />
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Dashboard</h1>
            <TopSummary />
            <StatsCards />
            <MiniKPIWidgets />
            <BotsStrategies />
            <PerformanceCards />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 flex-1">
              <div className="flex flex-col gap-4 md:gap-8 justify-stretch">
                <PieChartWidget />
                <DoughnutChartWidget />
              </div>
              <div className="flex flex-col gap-4 md:gap-8 justify-stretch">
                <DashboardChart />
                {/* <LineChart /> */}
                {/* <StackedProfitRevenueUsers /> */}
                <CandlestickChart />
                <NewsSection />
                {/* <RadarChartWidget /> */}
                {/* <BarChartWidget /> */}
              </div>
            </div>
            <AboutCompanySection />
            <PeerComparisonSection />
            <div className="flex flex-col md:flex-row gap-8 mt-4 flex-1">
              <div className="md:w-1/2 w-full flex flex-col gap-8 justify-stretch">
                <ShareholdingPieChart />
                <FinancialValuationSection />
              </div>
              <div className="md:w-1/2 w-full flex flex-col gap-8 justify-stretch">
                <RatiosSection />
                <div className="flex-1 flex flex-col">
                  <CorporateActionSection />
                </div>
              </div>
            </div>
            <div className="mt-10 grid md:grid-cols-2 gap-8 flex-shrink-0">
              <ActivityTable />
              <InfoPanels />
            </div>
            {/* Placeholder for dashboard sections */}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
