import ProcessSectionCard from "@/components/cards/ProcessSectionCard";
import Section from "@/components/section/Section";
import { ProcessCardType } from "@/types/processcard.types";
import {Text, Box, Stack, SimpleGrid, GridItem } from "@chakra-ui/react";


const CARDS: ProcessCardType[] = [
  {
    title: 1,
    description: "Encontre seu pet",
    thumbnail: "https://i.imgur.com/g2INlyY.jpeg"
  },
  {
    title: 2,
    description: "Preencha o formulário",
    thumbnail: "https://i.imgur.com/8leU328.jpeg"
  },
  {
    title: 3,
    description: "Conheça seu novo amigo",
    thumbnail: "https://i.imgur.com/tXb1o5V.png"
  },
  {
    title: 4,
    description: "Dê a ele todo o seu amor",
    thumbnail: "https://i.imgur.com/ad3GgR2.png"
  }
]




const Process: React.FC = () => {
  const generateTopOffset = (index: number): string => {
    let offset = "0px";

    if (index % 2 === 0) {
      offset = "-30px";
    } else {
      offset = "30px";
    }

    return offset;
  };

    return (
     <Section backgroundColor="#FFEFB6" hasDivider={false}>
       <Stack direction="column" spacing={10}>
        <Stack
          alignContent={["center", null, null, "space-between"]}
          direction={["column", null, null, "row"]}
          display="flex"
          justifyContent={["center", null, null, "space-between"]}
          px={[2, 4, 4, 4, 10]}
          spacing={10}
        >
          <Stack>
          <Box
           bg="#FF9501"
           borderRadius="30px"
           fontSize={20}
           fontWeight="bold"
           p={2}
           textAlign="center"
           w="200px"
           color={"white"}
          >
            O processo
          </Box>
          <Text
           fontSize={["48px", null, null, "54px"]}
           fontWeight={900}
           lineHeight={1.125}
           pt={6}
          >
          Narizes Frios e
          Corações Felizes
          
          </Text>
          </Stack>
          <Stack alignItems="center" justifyContent="center">
           <Text 
           fontSize="20px" fontWeight="semibold" py={8}
           >
           Ao adotar, você assume uma responsabilidade significativa, exigindo comprometimento e preparo. Por isso, é essencial receber o treinamento adequado. 
           </Text>
          </Stack>
       </Stack>

       <SimpleGrid
       columns={[1, 1, 2, 2, 4]}
       gap={[4, null, 4]}
       justifyItems="center"
       py={10}
       templateRows="auto"
       >
{CARDS.map((card, index) => (
            <GridItem key={index}>
              <ProcessSectionCard
                description={card.description}
                thumbnail={card.thumbnail}
                title={card.title}
                topOffset={generateTopOffset(index)}
              />
            </GridItem>
          ))}
       </SimpleGrid>
       </Stack>
     </Section>
    );
};

export default Process;