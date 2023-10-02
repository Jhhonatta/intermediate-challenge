import api from "../../services/api";
import { ContainerListUser } from "./style";
import { useState, useEffect } from "react";

interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  dob: {
    date: string;
    age: number;
  };
  id: {
    name: string;
    value: string | null;
  };
}

const ListUsers = () => {
  const [list, setList] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get(
          `?page=1&results=10&seed=abc&inc=gender,name,dob,id`
        );
        setList(result.data.results);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

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

        {list.map((elem, index) => (
          <ul className="columnData" key={index}>
            <li>{elem.id.value || "Null"}</li>
            <li>{elem.name.first}</li>
            <li>{elem.name.last}</li>
            <li>{elem.name.title}</li>
            <li>{elem.dob.date.split("T")[0]}</li>
            <li>{elem.dob.age}</li>
            <li>View Profile</li>
          </ul>
        ))}
      </ContainerListUser>
    </>
  );
};

export default ListUsers;
