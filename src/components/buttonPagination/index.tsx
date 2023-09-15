import { ContainerButtonPagination } from "./style";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ButtonPagination = () => {
  const [buttonFeat, setButtonFeat] = useState([1, 2, 3, 4, 5]);

  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <>
      <ContainerButtonPagination>
        <button className="buttonSide">
          <AiOutlineLeft />
        </button>
        <ul>
          {buttonFeat.map((elem, index) => (
            <li key={index} className="buttonContainer">
              <button
                onClick={() => handleClick(index)}
                style={{
                  backgroundColor:
                    selectedButton === index ? "#811ac0" : "transparent",
                }}
              >
                {elem}
              </button>
            </li>
          ))}
        </ul>
        <button className="buttonSide">
          <AiOutlineRight />
        </button>
      </ContainerButtonPagination>
    </>
  );
};

export default ButtonPagination;
