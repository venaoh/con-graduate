import {
  Box,
  UserName,
  Text,
  Title,
  Wrapper,
  Profile,
  Contents,
} from "../components/page-components";
import PostForm from "../components/post-form";
import Timeline from "../components/timeline";

export default function Home() {
  return (
    <Wrapper>
      <Title>방명록</Title>
      <Text>▷ 졸업 축하 메시지를 남겨주세요!</Text>
      <Contents>
        <Box>
          <UserName>
            <Profile src="/icon-heart.png" />
            NAME
          </UserName>
          <PostForm />
        </Box>
        <Timeline />
      </Contents>
    </Wrapper>
  );
}
