import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";

const Wrapper = styled.div`
  margin: 60px;
  width: ${({ theme }) => theme.width.m};
  background-color: ${({ theme }) => theme.colors.pkivory};
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.pkpoint};
  }
`;

const Menu = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pkivory};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-decoration: none;
`;

const MenuItem = styled.div`
  width: 100%;
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
  const navigate = useNavigate();
  const [activate, setActivate] = useState("home");
  const logOut = async () => {
    const ok = confirm("로그아웃 하시겠습니까?");
    if (ok) {
      auth.signOut();
      navigate("/login");
    }
  };
  const onHome = async () => {
    setActivate("home");
  };
  const onGallery = async () => {
    setActivate("gallery");
  };
  const onMailbox = async () => {
    setActivate("mailbox");
  };
  return (
    <Wrapper>
      <Menu>
        <StyledLink to="/" onClick={onHome}>
          <MenuItem>
            {activate === "home" ? (
              <Logo src="/icon-fill-heart.png" />
            ) : (
              <Logo src="/icon-heart.png" />
            )}
            방명록
          </MenuItem>
        </StyledLink>
        <StyledLink to="/gallery" onClick={onGallery}>
          <MenuItem>
            {activate === "gallery" ? (
              <Logo src="/icon-fill-heart.png" />
            ) : (
              <Logo src="/icon-heart.png" />
            )}
            갤러리
          </MenuItem>
        </StyledLink>
        <StyledLink to="/mailbox" onClick={onMailbox}>
          <MenuItem>
            {activate === "mailbox" ? (
              <Logo src="/icon-fill-heart.png" />
            ) : (
              <Logo src="/icon-heart.png" />
            )}
            편지함
          </MenuItem>
        </StyledLink>
      </Menu>
      <InfoBar>
        <Button onClick={logOut}>로그아웃</Button>
      </InfoBar>
      <Outlet />
      <Footer>- Made by Oh, Seojin {"(@Venaoh)"} -</Footer>
    </Wrapper>
  );
}
