import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          
          <meta name="theme-color" content="" />
          <link rel="shortcut icon" href="/images/logo.jpg" />
          <meta name="emotion-insertion-point" content="" />
          <meta
            name="description"
            content="I am a over 5 years experienced Frontend Developer specializing in React, NextJS, MUI, Tailwind, Bootstrap, Typescript, GCP"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&family=Ubuntu&family=Varela+Round&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
