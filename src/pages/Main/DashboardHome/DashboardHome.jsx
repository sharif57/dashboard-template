import DashboardHomeTable from "../../../Components/DashboardHomeTable";

const DashboardHome = () => {
  return (
    <div className="space-y-[24px]">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-x-10 lg:gap-x-10  gap-y-10 ">
        <div className=" flex items-center justify-center gap-6 rounded-lg bg-white  ">
          <div className="bg-[#FAE9E6] p-6 rounded-2xl">
          <img src="/users.png" alt="" />

          </div>
          <div className="text-center">
            <h3 className="text-[20px]">{"Total users"}</h3>
            <h3 className=" text-[#494747] font-medium text-[48px]">400</h3>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 px-[24px]  py-[20px] rounded-lg space-y-3 bg-white w-96 md:w-full">
        <div className="bg-[#FAE9E6] p-6 rounded-2xl">
          <img src="/users.png" alt="" />

          </div>
          <div className="text-center">
            <h3 className="text-[20px]">{"Total Earnings"}</h3>
            <h3 className=" text-[#494747] font-medium text-[48px]">$89,000</h3>
          </div>
        </div>

         
      </div>
      {/* <BarChartComponent /> */}
      <DashboardHomeTable />
    </div>
  );
};

export default DashboardHome;
