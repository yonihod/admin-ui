import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  return <div>
    <h1>{hello.data?.greeting}</h1>
  </div>
}


export default Home;
