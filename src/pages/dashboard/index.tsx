import { ContainerDashBoard } from "./style";
import Search from "../../components/search";

const Dashboard = () => {
  return (
    <>
      <ContainerDashBoard>
        <p className="title">List Users</p>
        <div className="containerSearch">
          <Search />
        </div>
      </ContainerDashBoard>
    </>
  );
};

export default Dashboard;
