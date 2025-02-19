import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
} from "firebase/firestore";
import Post from "./post";

export interface IPost {
  id: string;
  fileData?: string;
  post: string;
  userId: string;
  username: string;
  createdAt: number;
}

const Wrapper = styled.div`
  overflow-x: auto;
`;

export default function Timeline() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchPosts = async () => {
      const postsQuery = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
        limit(30)
      );
      unsubscribe = await onSnapshot(postsQuery, (snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          const { post, createdAt, userId, username, fileData } = doc.data();
          return { post, createdAt, userId, username, fileData, id: doc.id };
        });
        setPosts(posts);
      });
    };
    fetchPosts();
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);
  return (
    <Wrapper>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Wrapper>
  );
}
