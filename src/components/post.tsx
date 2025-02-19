import styled from "styled-components";
import { IPost } from "./timeline";
import { Box, UserName } from "./page-components";

const Column = styled.div``;

const Photo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 15px;
  cursor: pointer;
`;

const Payload = styled.p`
  background-color: ${({ theme }) => theme.colors.pkivory};
  padding: 12px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.pkblue};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default function Post({ username, fileData, post }: IPost) {
  return (
    <Box>
      <UserName>{username}</UserName>
      <Payload>
        <Column>{post} </Column>
        {fileData ? (
          <Column>
            <Photo src={fileData} />
          </Column>
        ) : null}
      </Payload>
    </Box>
  );
}
