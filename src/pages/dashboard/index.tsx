import { ContainerDashBoard } from "./style";
import Search from "../../components/search";
import ListUsers from "../../components/listUsers";
import ButtonPagination from "../../components/buttonPagination";

const Dashboard = () => {
  return (
    <>
      <ContainerDashBoard>
        <p className="title">List Users</p>
        <div className="containerSearch">
          <Search />
        </div>
        <ListUsers />
        <ButtonPagination />
      </ContainerDashBoard>
    </>
  );
};

export default Dashboard;
