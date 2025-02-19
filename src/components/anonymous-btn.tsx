import { getAuth, signInAnonymously } from "firebase/auth";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button, Logo } from "./auth-components";

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
