import Layout from "@/components/layout/Layout";
import Hero from "@/screens/Home/sections/Hero";
import MeetYourBuddy from "@/screens/Home/sections/MeetYourBuddy";
import { Stack } from "@chakra-ui/react";
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
   <Stack>
    <Hero />
    <MeetYourBuddy />
   </Stack>
    </Layout>

  );
};

export default Home;