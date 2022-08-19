import { FC, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UsernameContext } from "../../contexts/userContext";

export const Poker: FC = () => {
  const navigate = useNavigate();
  const { name } = useContext(UsernameContext);
  const { roomId } = useParams();

  useEffect(() => {
    if (!name) navigate(`/room/${roomId}/name`);
    // refresh room data on first render
  }, [name, roomId, navigate]);

  return (
    <div>
      poker
      <br />
      name: {name}
    </div>
  );
};
