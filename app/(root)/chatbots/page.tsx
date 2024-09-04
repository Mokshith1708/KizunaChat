"use client"
// import '../styles/globals.css';
import { AppProps } from 'next/app';
import Chatbot from '@/components/Chatbot';

function MyApp({pageProps }: AppProps) {
  return (
    <>
      {...pageProps}
    </>
  );
}

export default MyApp;
