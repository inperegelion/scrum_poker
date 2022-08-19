import { FC, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import { ESTIMATE_CARDS } from "../../constants";
import { UsernameContext } from "../../contexts/userContext";

export const EstimateCards: FC = () => {
  const [estimate, setEstimate] = useState<string>("-");
  const { name } = useContext(UsernameContext);
  const roomId = useParams().roomId as string;

  const selectEstimate = (estimate: string) => {
    setEstimate(estimate);
    api.userChangeEstimate(roomId, name, estimate);
  };

  return (
    <div>
      {ESTIMATE_CARDS.map((card) => (
        <button
          key={`card-${card}`}
          onClick={() => selectEstimate(card)}
          disabled={estimate === card}
        >
          {card}
        </button>
      ))}
    </div>
  );
};
