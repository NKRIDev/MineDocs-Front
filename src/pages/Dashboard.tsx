import DashboardHeader from "@/pages/dashboard/DashboardHeader.tsx";
import DashboardContainer from "@/pages/dashboard/DashboardContainer.tsx";

const Dashboard = () => {

  return (
    <div className="min-h-screen bg-background">

      {/*Header*/}
      <DashboardHeader/>

      {/*Main container*/}
      <DashboardContainer/>
    </div>
  );
};

export default Dashboard;