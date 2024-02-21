import AdminNavbar from "./AdminNavbar";
import Cards from "./Cards";
import { BarChart } from "@mui/x-charts/BarChart";
import { Carousel } from "flowbite-react";
import gif from "../media/bg-tube.json";
import Lottie from "lottie-react";
import AdminTable from "./AdminTable";
import UsersBanner from "./UsersBanner";

const AdminContent = () => {
  return (
    <div className="w-[80%]">
      <AdminNavbar />
      <section>
        <article className="w-[100%] flex gap-2 px-12 pt-10">
          <aside className="w-[50%] bg-gray-200 p-2 rounded-lg shadow-lg shadow-emerald-800 pt-10">
            <BarChart
              series={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
              ]}
              height={290}
              xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
            <h1 className="text-center font-bold tracking-widest">
              {" "}
              Project Quaterly Progress{" "}
            </h1>
          </aside>
          <aside className="blinker w-[50%] rounded-lg shadow-lg shadow-emerald-800 ">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel leftControl="" rightControl="">
                <div>
                  <div className="h-[100%] w-[100%] opacity-75 -z-10 relative top-24 scale-75">
                    <Lottie animationData={gif} />
                  </div>
                  <svg
                    width="200"
                    height="200"
                    className="relative left-[180px] bottom-60"
                  >
                    <g transform="rotate(-90 100 100)">
                      <circle
                        r="70"
                        cx="100"
                        cy="100"
                        fill="transparent"
                        stroke="lavender"
                        stroke-width="1rem"
                        stroke-dasharray="439.8"
                        stroke-dashoffset="0"
                      ></circle>
                      <circle
                        r="70"
                        cx="100"
                        cy="100"
                        fill="transparent"
                        stroke="red"
                        stroke-width="1.5rem"
                        stroke-dasharray="439.8"
                        stroke-dashoffset="66"
                      ></circle>
                    </g>
                    <text
                      x="50%"
                      y="50%"
                      dominant-baseline="central"
                      text-anchor="middle"
                    >
                      86%
                    </text>
                  </svg>
                  <h1 className="relative bottom-56 text-center font-mono text-[30px] tracking-[3px] text-gray-800 font-bold underline-offset-8 underline">
                    {" "}
                    Frontend Team{" "}
                  </h1>
                </div>
                <div>
                  <div className="h-[100%] w-[100%] opacity-75 -z-10 relative top-24 scale-75">
                    <Lottie animationData={gif} />
                  </div>
                  <svg
                    width="200"
                    height="200"
                    className="relative left-[180px] bottom-60"
                  >
                    <g transform="rotate(-90 100 100)">
                      <circle
                        r="70"
                        cx="100"
                        cy="100"
                        fill="transparent"
                        stroke="lavender"
                        stroke-width="1rem"
                        stroke-dasharray="439.8"
                        stroke-dashoffset="0"
                      ></circle>
                      <circle
                        r="70"
                        cx="100"
                        cy="100"
                        fill="transparent"
                        stroke="blue"
                        stroke-width="1.5rem"
                        stroke-dasharray="439.8"
                        stroke-dashoffset="150"
                      ></circle>
                    </g>
                    <text
                      x="50%"
                      y="50%"
                      dominant-baseline="central"
                      text-anchor="middle"
                    >
                      66%
                    </text>
                  </svg>
                  <h1 className="relative bottom-56 text-center font-mono text-[30px] tracking-[3px] text-gray-800 font-bold underline-offset-8 underline">
                    {" "}
                    Backend Team{" "}
                  </h1>
                </div>
                <div>
                  <div className="h-[100%] w-[100%] opacity-75 -z-10 relative top-24 scale-75">
                    <Lottie animationData={gif} />
                  </div>
                  <svg
                    width="200"
                    height="200"
                    className="relative left-[180px] bottom-60"
                  >
                    <g transform="rotate(-90 100 100)">
                      <circle
                        r="70"
                        cx="100"
                        cy="100"
                        fill="transparent"
                        stroke="lavender"
                        stroke-width="1rem"
                        stroke-dasharray="439.8"
                        stroke-dashoffset="0"
                      ></circle>
                      <circle
                        r="70"
                        cx="100"
                        cy="100"
                        fill="transparent"
                        stroke="green"
                        stroke-width="1.5rem"
                        stroke-dasharray="439.8"
                        stroke-dashoffset="270"
                      ></circle>
                    </g>
                    <text
                      x="50%"
                      y="50%"
                      dominant-baseline="central"
                      text-anchor="middle"
                    >
                      40%
                    </text>
                  </svg>
                  <h1 className="relative bottom-56 text-center font-mono text-[30px] tracking-[3px] text-gray-800 font-bold underline-offset-8 underline">
                    {" "}
                    FullStack Team{" "}
                  </h1>
                </div>
                <div>
                  <div className="h-[100%] w-[100%] opacity-75 -z-10 relative top-24 scale-75">
                    <Lottie animationData={gif} />
                  </div>
                  <svg
                    width="200"
                    height="200"
                    className="relative left-[180px] bottom-60"
                  >
                    <g transform="rotate(-90 100 100)">
                      <circle
                        r="70"
                        cx="100"
                        cy="100"
                        fill="transparent"
                        stroke="lavender"
                        stroke-width="1rem"
                        stroke-dasharray="439.8"
                        stroke-dashoffset="0"
                      ></circle>
                      <circle
                        r="70"
                        cx="100"
                        cy="100"
                        fill="transparent"
                        stroke="orange"
                        stroke-width="1.5rem"
                        stroke-dasharray="439.8"
                        stroke-dashoffset="90"
                      ></circle>
                    </g>
                    <text
                      x="50%"
                      y="50%"
                      dominant-baseline="central"
                      text-anchor="middle"
                    >
                      78%
                    </text>
                  </svg>
                  <h1 className="relative bottom-56 text-center font-mono text-[30px] tracking-[3px] text-gray-800 font-bold underline-offset-8 underline">
                    {" "}
                    Tester{" "}
                  </h1>
                </div>
              </Carousel>
            </div>
          </aside>
        </article>

        <article className="w-[100%] flex gap-2 px-12 pt-10">

          <aside className="w-[30%]">
            <UsersBanner />
          </aside>
          <aside className="w-[70%]">
          <AdminTable />
          </aside>
        </article>
       

        <Cards />
      </section>
    </div>
  );
};

export default AdminContent;
