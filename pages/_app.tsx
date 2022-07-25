import "../styles/globals.css";
import type { AppProps } from "next/app";
import Login from "./login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
// import Loading from '../components/Loading'
import { useEffect } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

function MyApp({ Component, pageProps }: AppProps) {
  const [loggedInUser, loading, _error] = useAuthState(auth);
  if (loading) return <h1>Loading........</h1>;
  if (!loggedInUser) return <Login />;
  return <Component {...pageProps} />;
}

export default MyApp;
