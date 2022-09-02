import { Dispatch, FC, SetStateAction, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import api from "../../api";
import { ESTIMATE_CARDS } from "../../constants";
import { UsernameContext } from "../../contexts/userContext";

export const EstimateCards: FC = () => {
  const [estimate, setEstimate] = useState<string>("-");

  return (
    <div>
      {ESTIMATE_CARDS.map((card) => (
        <EstimateCard
          key={`card-${card}`}
          card={card}
          disabled={card === estimate}
          setEstimate={setEstimate}
        />
      ))}
      {/* todo: how to show error here if child had error in useMutation */}
      {/* {isError ? <ErrorMessage /> : null} */}
    </div>
  );
};

const EstimateCard: FC<{
  card: string;
  disabled: boolean;
  setEstimate: Dispatch<SetStateAction<string>>;
}> = ({ card, disabled, setEstimate }) => {
  const roomId = useParams().roomId as string;
  const { name } = useContext(UsernameContext);

  const { mutate } = useMutation(
    () => api.userChangeEstimate(roomId, name, card),
    {
      onMutate() {
        setEstimate(card);
      },
    }
  );
  return (
    <button onClick={() => mutate()} disabled={disabled}>
      {card}
    </button>
  );
};
