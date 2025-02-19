import styled from "styled-components";
import { Box, Text, Wrapper } from "../components/page-components";
import { useEffect, useState } from "react";
import PlaceCard from "../components/place-card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export interface IPlaceCard {
  id: string;
  name: string;
  info: string;
  imageList: string[];
}

const Map = styled.div`
  width: 100%;
  height: 320px;
  padding: 12px;
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.pkivory};
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  border: 4px solid ${({ theme }) => theme.colors.pkblue};
  background-color: ${({ theme }) => theme.colors.pkbeige};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 12px;
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  margin-bottom: 8px;
`;

const Comment = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-bottom: 4px;
  text-align: center;
`;

const PKNU = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.pkblue};
  color: ${({ theme }) => theme.colors.pkivory};
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState<IPlaceCard[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  useEffect(() => {
    const fetchGallery = async () => {
      const galleryQuery = collection(db, "gallery");
      console.log(galleryQuery.type);
      const querySnapshot = await getDocs(galleryQuery);
      console.log(querySnapshot.size);

      const cards = querySnapshot.docs.map((doc) => {
        const { name, info, imageList } = doc.data();
        return { name, info, imageList, id: doc.id };
      });
      setGalleryItems(cards);
    };

    fetchGallery();
  }, []);
  return (
    <Wrapper>
      <Text>▷ 사진을 구경하고 싶으면 구역을 눌러주세요!</Text>
      <Box>
        <Map>
          <Div onClick={() => setSelected(1)}>
            <Title>A구역</Title>
            <Comment>- 컴공생 출몰구역</Comment>
          </Div>
          <Div onClick={() => setSelected(2)}>
            <Title>B구역</Title>
            <Comment>- 청운관</Comment>
            <Comment>- 동방</Comment>
          </Div>
          <Div onClick={() => setSelected(3)}>
            <Title>C구역</Title>
            <Comment>- 공대생 구역</Comment>
            <Comment>- 중도</Comment>
          </Div>
          <Div onClick={() => setSelected(4)}>
            <Title>D구역</Title>
            <Comment>- 창의관</Comment>
            <Comment>- 수상레저관</Comment>
          </Div>
          <PKNU>
            PK
            <br />
            NU
          </PKNU>
        </Map>
      </Box>
      {selected &&
        galleryItems.map((card) => <PlaceCard key={card.id} {...card} />)}
    </Wrapper>
  );
}
