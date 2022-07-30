import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  console.log(hello)
  return <div>
    <h1>{hello.data?.greeting}</h1>
  </div>
}


export default Home;
