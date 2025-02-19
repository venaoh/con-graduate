import {
  Box,
  BoxName,
  Text,
  Title,
  Wrapper,
  Profile,
  BoxContent,
} from "../components/page-components";

export default function Home() {
  return (
    <Wrapper>
      <Title>Home</Title>
      <Text>▷ 졸업 축하 메시지를 남겨주세요!</Text>
      <Box>
        <BoxName>
          <Profile src="/icon-heart.png" />
          NAME
        </BoxName>
        <BoxContent>예시 내용입니다.</BoxContent>
      </Box>
      <Box>
        <BoxName>
          <Profile src="/icon-heart.png" />
          NAME
        </BoxName>
        <BoxContent>예시 내용입니다.</BoxContent>
      </Box>
      <Box>
        <BoxName>
          <Profile src="/icon-heart.png" />
          NAME
        </BoxName>
        <BoxContent>예시 내용입니다.</BoxContent>
      </Box>
    </Wrapper>
  );
}
