import Section from "@/components/section/Section";
import { Heading, ListItem, Text, UnorderedList, VStack, Image, HStack } from "@chakra-ui/react";
import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <Section backgroundColor="#E5F4FF" hasDivider={false}>
      <VStack alignSelf="center" spacing={10} width="full">
        <Heading color="primary.500">SOBRE NÓS</Heading>
        <Text fontSize="xl" mb={6}>
          CÃO SEM DONO é uma organização sem fins lucrativos que busca combater o abandono e o abuso animal que existe em nosso país com a ajuda de diferentes pessoas que desejam se envolver nessa luta e compartilhar o respeito e o amor pelos animais.
        </Text>

        <HStack align="start" spacing={4} width="full">
          <Image src="https://i.imgur.com/RoMzIcr.png" boxSize="400px"   objectFit="contain" alt="" />
        
          <UnorderedList styleType="'🦴 '" spacing={3} fontSize="lg">
          <Text as="b" fontSize="xl"> NOSSOS OBJETIVOS</Text>
            <ListItem>Lutar contra o abandono, os maus-tratos e o sofrimento animal</ListItem>
            <ListItem>Informar a população sobre a posse responsável de animais de estimação</ListItem>
            <ListItem>Promover a esterilização de fêmeas e machos, assim como destacar a importância da vacinação no prazo adequado.</ListItem>
            <ListItem>Prestar assistência a animais em situação de risco, reabilitá-los e entregá-los para adoção a tutores responsáveis.</ListItem>
            <ListItem>Prestar assessoria jurídica aos cidadãos em casos de maus-tratos a animais.</ListItem>
          </UnorderedList>
        </HStack>
      </VStack>
    </Section>
  );
};

export default About;
