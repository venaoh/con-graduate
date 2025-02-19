import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";

const Wrapper = styled.div`
  margin: 100px;
  width: ${({ theme }) => theme.width.m};
  background-color: ${({ theme }) => theme.colors.pkivory};
  display: flex;
  flex-direction: column;
`;

const Tab = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pkivory};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TabItem = styled.div`
  width: ${({ theme }) => theme.width.m3};
  padding: 8px 4px;
  border: 2px solid ${({ theme }) => theme.colors.pkbeige};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Logo = styled.img`
  width: 30px;
`;

const InfoBar = styled.div`
  width: 100%;
  display: flex;
  padding: 12px;
  justify-content: end;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.pkblue};
  border: 2px solid ${({ theme }) => theme.colors.pkblue};
  background-color: ${({ theme }) => theme.colors.pkbeige};
`;

const Footer = styled.footer`
  padding: 12px;
  display: flex;
  justify-content: center;
`;

export default function layout() {
  const [activate, setActivate] = useState("방명록");
  const logOut = () => {
    auth.signOut();
  };
  return (
    <Wrapper>
      <Tab>
        <TabItem>
          {activate === "방명록" ? (
            <Logo src="/icon-fill-heart.png" />
          ) : (
            <Logo src="/icon-heart.png" />
          )}
          방명록
        </TabItem>
        <TabItem>
          {activate === "갤러리" ? (
            <Logo src="/icon-fill-heart.png" />
          ) : (
            <Logo src="/icon-heart.png" />
          )}
          갤러리
        </TabItem>
        <TabItem>
          {activate === "편지함" ? (
            <Logo src="/icon-fill-heart.png" />
          ) : (
            <Logo src="/icon-heart.png" />
          )}
          편지함
        </TabItem>
      </Tab>
      <InfoBar>
        <Button onClick={logOut}>로그아웃</Button>
      </InfoBar>
      <Outlet />
      <Footer>Made by Oh, Seojin {"(@Venaoh)"}</Footer>
    </Wrapper>
  );
}
