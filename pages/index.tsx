import { Button } from "@op-ent/unstyled-ui";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <img src="/img/logo.svg" className="w-24" alt="Logo d'op-ent" />
      <h1 className="text-xl text-primary-12 font-bold">op-ent</h1>
      <Button
        as={Link}
        href="https://github.com/op-ent"
        target="_blank"
        color="primary"
        size="lg"
      >
        GitHub
      </Button>
    </div>
  );
};

export default Home;
