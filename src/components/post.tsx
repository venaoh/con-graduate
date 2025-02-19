import styled from "styled-components";
import { IPost } from "./timeline";
import { Box, UserName } from "./page-components";
import { auth, db } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";

const Column = styled.div`
  display: flex;
  flex-direction: row;
  &.title {
    justify-content: space-between;
  }
`;

export const Profile = styled.img`
  height: 30px;
  background-color: white;
  margin-right: 12px;
  border: 2px solid ${({ theme }) => theme.colors.pkblue};
`;

const Photo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 15px;
  cursor: pointer;
`;

const Payload = styled.div`
  background-color: ${({ theme }) => theme.colors.pkivory};
  padding: 12px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.pkblue};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

// const EditButton = styled.button`
//   background-color: ${({ theme }) => theme.colors.pklightsky};
//   color: ${({ theme }) => theme.colors.pkblue};
//   border: 2px solid ${({ theme }) => theme.colors.pkblue};
//   border-radius: 5px;
//   cursor: pointer;
//   font-weight: 600;
//   text-align: center;
//   margin-right: 12px;
// `;

const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.pkpoint};
  color: ${({ theme }) => theme.colors.pkivory};
  border: 2px solid ${({ theme }) => theme.colors.pkblue};
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
`;

export default function Post({ username, fileData, post, userId, id }: IPost) {
  const user = auth.currentUser;
  const onDelete = async () => {
    const ok = confirm("이 글을 정말 지우시겠습니까?");
    if (!ok || user?.uid !== userId) return;
    try {
      await deleteDoc(doc(db, "posts", id));
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  return (
    <Box>
      <Column className="title">
        <UserName>
          {user?.uid === userId ? (
            <Profile src="/icon-fill-heart.png" />
          ) : (
            <Profile src="/icon-heart.png" />
          )}
          {username}
        </UserName>
        {user?.uid === userId ? (
          <Column>
            {/* <EditButton>수정하기</EditButton> */}
            <DeleteButton onClick={onDelete}>X</DeleteButton>
          </Column>
        ) : null}
      </Column>
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
