import styled from "styled-components";
import { Box } from "./page-components";
import { IPlaceCard } from "../routes/gallery";

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.pkivory};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-shadow: 2px 2px 1px ${({ theme }) => theme.colors.pkblue},
    -2px -2px 1px ${({ theme }) => theme.colors.pkblue},
    2px -2px 1px ${({ theme }) => theme.colors.pkblue},
    -2px 2px 1px ${({ theme }) => theme.colors.pkblue};
`;
const Intro = styled.span`
  background-color: ${({ theme }) => theme.colors.pkivory};
  padding: 4px 8px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;
const PhotoList = styled.div``;

export default function PlaceCard({ name, info, imageList }: IPlaceCard) {
  return (
    <Box>
      <Title>{name}</Title>
      <Intro>한줄소개 : {info}</Intro>
      <PhotoList>{imageList}</PhotoList>
    </Box>
  );
}
