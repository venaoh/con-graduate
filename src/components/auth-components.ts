import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.pkivory};
  width: ${({ theme }) => theme.width.m};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 36px;
  margin: 60px;

  @media (${({ theme }) => theme.mediaSize.xs}) {
    width: 100%;
    height: 100vh;
    margin: 0;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 900;
  margin-bottom: 32px;
`;

export const Form = styled.form`
  margin: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.pkblue};
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.pkblue};
  color: ${({ theme }) => theme.colors.pkblue};
  width: 100%;
  &[type="submit"] {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.pkblue};
    color: white;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
    &:active {
      border-color: ${({ theme }) => theme.colors.pkblue};
      background-color: ${({ theme }) => theme.colors.pkpoint};
    }
  }
  &::placeholder {
    color: #aaaaaa;
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.pkpoint};
  }
`;

export const Error = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.pkpoint};
`;

export const Switcher = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 32px;
  a {
    color: ${({ theme }) => theme.colors.pkpoint};
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.pksky};
    }
  }
`;

export const Button = styled.span`
  background-color: white;
  width: 100%;
  margin: 8px 0;
  padding: 10px 20px;
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

export const Logo = styled.img`
  height: 30px;
`;
