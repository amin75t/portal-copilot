/* eslint-disable @typescript-eslint/no-explicit-any */
import { TabsWrapper } from "@/components";
import { useSelector } from "react-redux";
import { Link, Outlet , useNavigate } from "react-router-dom";
import { TabsInfo } from "./tabsInfo";

const Information = () => {
  const theme = useSelector((state: any) => state.theme.value.name);
  const navigate = useNavigate();
  const handleTabClick = (path: string) => {
    navigate(path);
  };
  return (
    <div className=" bg-black-background w-full  overflow--hidden h-[100vh] flex flex-col justify-start items-center">
      <div className="flex fixed  px-4    z-10 justify-center bg-black-background w-full">
        <div className="flex gap-5 mt-6  ">
          <Link to={"/"}>
            <div className={`${theme}-tab-icon-container`}>
              <img className={`${theme}-icons-arrow-left`} />
            </div>
          </Link>
          <TabsWrapper TabsInfo={TabsInfo} handleTabClick={handleTabClick}/>
        </div>

      </div>
      <div className=" container pt-[70px] lg:pt-[85px]  xl:pt-[90px] 2xl:pt-[100px] w-full  ">
        <Outlet />

      </div>
    </div>
  );
};

export default Information;
