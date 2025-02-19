import { addDoc, collection, updateDoc } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.pkivory};
  border: 2px solid ${({ theme }) => theme.colors.pkivory};
  padding: 12px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.pkblue};
  width: 100%;
  resize: none;
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.pkblue};
  }
`;

const AttachFileButton = styled.label`
  padding: 8px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.pkblue};
  border: 2px solid ${({ theme }) => theme.colors.pkblue};
  background-color: ${({ theme }) => theme.colors.pkivory};
  text-align: center;
  cursor: pointer;
`;

const AttachFileInput = styled.input`
  display: none;
`;

const SubmitButton = styled.input`
  padding: 8px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.pkivory};
  border: 2px solid ${({ theme }) => theme.colors.pkblue};
  background-color: ${({ theme }) => theme.colors.pkblue};
  text-align: center;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.9;
  }
`;

export default function PostForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState("");
  const [file, setFile] = useState<string | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value);
  };
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1 && files[0].size < 1 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;
    console.log("USER:", user);
    if (!user || isLoading || post === "" || post.length > 1000) return;
    try {
      setIsLoading(true);
      await addDoc(collection(db, "posts"), {
        post,
        createdAt: Date.now(),
        username: user.displayName || "익명",
        userId: user.uid,
        fileData: file,
      });
      setPost("");
      setFile(null);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Form onSubmit={onSubmit}>
      <TextArea
        rows={5}
        maxLength={1000}
        onChange={onChange}
        value={post}
        placeholder="작성해주세요...!"
        required
      />
      <AttachFileButton htmlFor="file">
        {file ? "*。· 이미지 첨부 완료 ·。*" : "이미지 첨부하기"}
      </AttachFileButton>
      <AttachFileInput
        onChange={onFileChange}
        type="file"
        id="file"
        accept="image/*"
      />
      <SubmitButton
        type="submit"
        value={isLoading ? "Posting..." : "작성하기"}
      />
    </Form>
  );
}
