import { ContainerDashBoard } from "./style";
import Search from "../../components/search";
import ListUsers from "../../components/listUsers";

const Dashboard = () => {
  return (
    <>
      <ContainerDashBoard>
        <p className="title">List Users</p>
        <div className="containerSearch">
          <Search />
        </div>
        <ListUsers />
      </ContainerDashBoard>
    </>
  );
};

export default Dashboard;
