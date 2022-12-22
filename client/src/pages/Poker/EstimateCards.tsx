import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";

import api from "../../api";
import { ErrorMessage } from "../../components/ErrorMessage";
import { ESTIMATE_CARDS } from "../../constants";
import { AppContext } from "../../contexts/userContext";

import "../../styles/EstimateCard.scss";

export const EstimateCards = (): JSX.Element => {
  const [userEstimate, setUserEstimate] = useState(ESTIMATE_CARDS[0]);
  const { roomId, userId } = useContext(AppContext);

  const { mutate, isLoading, isError } = useMutation(
    (params: { estimate: string }) =>
      api.userChangeEstimate(roomId, userId, params.estimate),
    {
      onMutate: ({ estimate }) => {
        setUserEstimate(estimate);
      },
    }
  );

  return (
    <>
      <ErrorMessage isError={isError} />
      <div className="EstimateCardsContainer">
        {ESTIMATE_CARDS.map((estimate) => (
          <button
            className="EstimateCard"
            key={`card-${estimate}`}
            onClick={() => mutate({ estimate })}
            disabled={estimate === userEstimate || isLoading}
          >
            {estimate}
          </button>
        ))}
      </div>
    </>
  );
};
