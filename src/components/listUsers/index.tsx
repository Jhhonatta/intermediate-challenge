import api from "../../services/api";
import { ContainerListUser } from "./style";

const listUser = async () => {
  const result = await api.get(
    `?page=1&results=10&seed=abc&inc=gender,name,dob,id`
  );
  const list = result.data.results;

  return list;
};

const ListUsers = () => {
  listUser();

  return (
    <>
      <ContainerListUser>
        <ul className="columnTables">
          <li className="columnLi">ID</li>
          <li className="columnLi">First Name</li>
          <li className="columnLi">Last Name</li>
          <li className="columnLi">Title</li>
          <li className="columnLi">Date</li>
          <li className="columnLi">Age</li>
          <li className="columnLi">Actions</li>
        </ul>

        <ul className="columnTables">
          <li>1561516546151651</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Title</li>
          <li>Date</li>
          <li>Age</li>
          <li>View Profile</li>
        </ul>
        <ul className="columnTables">
          <li>1561516546151651</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Title</li>
          <li>Date</li>
          <li>Age</li>
          <li>View Profile</li>
        </ul>
        <ul className="columnTables">
          <li>1561516546151651</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Title</li>
          <li>Date</li>
          <li>Age</li>
          <li>View Profile</li>
        </ul>
        <ul className="columnTables">
          <li>1561516546151651</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Title</li>
          <li>Date</li>
          <li>Age</li>
          <li>View Profile</li>
        </ul>
        <ul className="columnTables">
          <li>1561516546151651</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Title</li>
          <li>Date</li>
          <li>Age</li>
          <li>View Profile</li>
        </ul>
        <ul className="columnTables">
          <li>1561516546151651</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Title</li>
          <li>Date</li>
          <li>Age</li>
          <li>View Profile</li>
        </ul>
        <ul className="columnTables">
          <li>1561516546151651</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Title</li>
          <li>Date</li>
          <li>Age</li>
          <li>View Profile</li>
        </ul>
        <ul className="columnTables">
          <li>1561516546151651</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Title</li>
          <li>Date</li>
          <li>Age</li>
          <li>View Profile</li>
        </ul>
        <ul className="columnTables">
          <li>1561516546151651</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Title</li>
          <li>Date</li>
          <li>Age</li>
          <li>View Profile</li>
        </ul>
      </ContainerListUser>
    </>
  );
};

export default ListUsers;
