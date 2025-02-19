import {
  Box,
  UserName,
  Text,
  Wrapper,
  Profile,
  Contents,
} from "../components/page-components";
import PostForm from "../components/post-form";
import Timeline from "../components/timeline";
import { auth } from "../firebase";

export default function Home() {
  return (
    <Wrapper>
      <Text>▷ 졸업 축하 메시지를 남겨주세요!</Text>
      <Contents>
        <Box>
          <UserName>
            <Profile src="/icon-fill-heart.png" />
            {auth.currentUser?.isAnonymous
              ? "익명"
              : auth.currentUser?.displayName}
          </UserName>
          <PostForm />
        </Box>
        <Timeline />
      </Contents>
    </Wrapper>
  );
}
