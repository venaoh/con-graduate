import styled from "styled-components";
import { Box, Profile, Wrapper } from "../components/page-components";

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Text = styled.div`
  background-color: ${({ theme }) => theme.colors.pkivory};
  border-radius: 5px;
  padding: 12px;
  line-height: 24px;
`;

const From = styled.span`
  display: flex;
  justify-content: end;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export default function Mailbox() {
  return (
    <Wrapper>
      <Box>
        <Title>
          <Profile src="/icon-fill-heart.png" />
          To. 방문객
        </Title>
        <Text>
          안녕하시요. 졸업하는 주인장이오.
          <br />
          <br />
          해커톤 하듯이 재미로 간단하게 만들어본 셀프-축하 웹-사이트요.
          방문해주어 고맙소.
          <br />
          <br />
          2020년부터 2025년까지 길었던 대학생활을 마치며 시원하기도 하면서
          앞으로 친구들을 자주 볼 수 없다는 생각에 슬프기도 하오. 그래도
          부경대학교에서 여러분을 만날 수 있어 행복했소.
          <br />
          <br />
          같이 졸업하는 친구들은 앞으로 새로운 것들에 원만히 적응하고 자신을
          펼쳐나가길 응원하오. 학교에 남아있을 친구들은 즐거움을 누리며 좋은
          기회와 행복한 기억을 쌓아나가길 바라오.
          <br />
          <br />
          졸업식에 못오더라도 방명록을 남겨주면 즐겁게 읽겠소. 이만
          사라져보겠소♥
        </Text>
        <From>From. 주인장</From>
      </Box>
    </Wrapper>
  );
}
