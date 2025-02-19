import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.pkivory};
  width: ${({ theme }) => theme.width.m};
  height: 600px;
  padding: 12px 30px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: start;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 900;
  margin-bottom: 8px;
`;

export const Text = styled.span`
  width: 100%;
  display: flex;
  justify-content: start;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 24px;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin-bottom: 20px;
  gap: 12px;
  border: 4px solid ${({ theme }) => theme.colors.pkblue};
  background-color: ${({ theme }) => theme.colors.pkbeige};
`;

export const BoxName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 900;
`;

export const Profile = styled.img`
  height: 30px;
  background-color: white;
  margin-right: 12px;
`;

export const BoxContent = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.pkivory};
  padding: 12px;
`;
