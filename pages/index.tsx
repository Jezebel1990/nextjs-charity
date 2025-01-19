import Layout from "@/components/layout/Layout";
import Hero from "@/screens/Home/sections/Hero";
import MeetYourBuddy from "@/screens/Home/sections/MeetYourBuddy";
import Process from "@/screens/Home/sections/Process";
import Transit from "@/screens/Home/sections/Transit";
import type {NextPage} from "next";

const Home: NextPage = () => {
  return (
    <Layout
      headProps={{
        title: "Home | Cão Sem Dono",
        description:
          "Cão Sem Dono é uma plataforma de adoção que permite encontrar seu novo companheiro de vida.",
        
      }}
    >
    <Hero />
    <MeetYourBuddy />
    <Process />
    <Transit />
    </Layout>
  );
};

export default Home;