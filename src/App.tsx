import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/protected-route";
import Layout from "./components/layout";
import LoadingScreen from "./components/loading-screen";
import Home from "./routes/home";
import Prifile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import styled, { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { theme } from "./shared/theme";
import { GlobalStyles } from "./shared/global";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Prifile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    // 인증이 완료될때 실행되는 promise return을 기다림
    // firebase가 쿠키와 토큰을 읽고 백엔드와 소통해서 로그인여부를 확인하는 것을 기다림
    await auth.authStateReady();
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
        {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
