import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Post from "./post";

export interface IPost {
  id: string;
  fileData?: string;
  post: string;
  userId: string;
  username: string;
  createAt: number;
}

const Wrapper = styled.div`
  overflow-x: auto;
`;

export default function Timeline() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const fetchPosts = async () => {
    const postsQuery = query(collection(db, "posts"), orderBy("createdAt"));
    const snapshot = await getDocs(postsQuery);
    const postlist = snapshot.docs.map((doc) => {
      const { post, createdAt, userId, username, fileData } = doc.data();
      return { post, createdAt, userId, username, fileData, id: doc.id };
    });
    setPosts(postlist);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <Wrapper>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Wrapper>
  );
}
