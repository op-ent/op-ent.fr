import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="" lang="fr">
      <Head>
        <title>op-ent. L{"'"}ENT open-source.</title>
        <link rel="icon" type="image/svg+xml" href="/img/logo.svg" />
      </Head>
      <body className="flex min-h-screen flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
