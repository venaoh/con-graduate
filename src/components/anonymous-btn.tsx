import { getAuth, signInAnonymously } from "firebase/auth";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  background-color: white;
  width: 100%;
  padding: 8px 20px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.pkblue};
  font-size: ${({ theme }) => theme.fontSize.l};
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.pklightsky};
  }
`;

const Logo = styled.img`
  height: 30px;
`;
export default function AnonymousButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    const auth = getAuth();
    try {
      const credential = await signInAnonymously(auth);
      console.log("Anonymous user:", credential.user);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src="/icon-heart.png" />
      익명으로 접속하기
    </Button>
  );
}
