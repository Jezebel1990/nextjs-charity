import { ArrowDownLeft } from "@/components/icons/ArrowDownLeft";
import { ArrowDownRight } from "@/components/icons/ArrowDownRight";
import { HumanAndDogPulling } from "@/components/icons/HumanAndDogPulling";
import { Paws } from "@/components/icons/Paws";
import Section from "@/components/section/Section";
import { Badge, Box, Button, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";

const History: React.FC = () => {
    return (
        <Section backgroundColor="white" hasDivider={false}>
         <VStack py={4} spacing={10} width="full">
         <Badge
           backgroundColor={"gray.300"}
           colorScheme="gray"
           fontSize="md"
           fontWeight={800}
         >
Contribua com a sua ajuda
         </Badge>
         <Text fontSize="5xl" fontWeight={900}>
         Nossa história
         </Text>
    <Text fontSize="xl" maxWidth="750">
    Existem muitas formas de fazer parte dessa mudança, de algum lugar você pode contribuir. As doações financeiras nos ajudam a pagar exames, consultas veterinárias, transportes e a comprar alimento.
    </Text>
    </VStack>
    <Box position="absolute" right={"-200px"} top={"-400px"}>
     <Paws />
    </Box>

    <Grid gap={2} templateColumns={"repeat(3, 1fr)"} width="full">
     <GridItem>
        <VStack h={"full"} justify={"center"} position="relative">
          <Text
            fontSize={{base: "sm", sm: "md"}}
            fontWeight={800}
            textAlign="center"
            width={"full"}
          >
Fundação da organização  <br />
2017
</Text>
<Box bottom={"-30px"} position="absolute">
<ArrowDownLeft />
</Box>
</VStack>
 </GridItem>
<GridItem>
 <Text
  fontSize={{base: "xl", sm: "3xl", md: "7xl"}}
  fontWeight={800}
  lineHeight={"normal"}
  position={"relative"}
  textAlign={"center"}
 >
+3500
 </Text>
 <Text
 fontSize={{base: "md", sm: "lg", md: "xl"}}
 fontWeight={800}
 textAlign={"center"}
 >
    Cachorros <br />
    resgatados
 </Text>
 </GridItem>

 <GridItem>
   <VStack h={"full"} justify={"center"} position="relative">
    <Text
       fontSize={{base: "sm", sm: "md"}}
       fontWeight={800}
       textAlign="center"
    >
Animais <br /> sem lar
    </Text>
    <Box  bottom={"-30px"} position="absolute">
   <ArrowDownRight />
    </Box>
</VStack> 
 </GridItem>

 <GridItem colSpan={3}>
<VStack>
    <Box
      backgroundColor="rgba(253, 177, 69, 0.4)"
      borderRadius="xl"
      height="88px"
      minWidth={""}
      padding="15px"
      width="80%"
    >
<HStack alignItems="flex-start" justifyContent="flex-start" spacing={0}>
<Box backgroundColor="white" borderLeftRadius="xl" height="60px" width="50%" />
<Box
 _before={{
    content: "''",
    display: "block",
    position: "relative",
    width: "8px",
    left: "-5px",
    height: "60px",
    background: "primary.500",
  }}
/>
</HStack>
</Box>

<Box left={"50%"} position="absolute">
 <HumanAndDogPulling />
</Box>
</VStack>
 </GridItem>
</Grid>

<Box bottom={"-200px"} left={0} position="absolute">
 <Paws />
</Box>

<VStack paddingTop={50} spacing={6} width="full">
 <Button paddingX={12} size="lg" colorScheme='primary'  _hover={{ bg: "orange.500" }}>
   Doação via Pix
 </Button>
 <Text fontSize="md" fontWeight={800} textColor="primary.500">
 Doe diretamente para a nossa conta institucional
 </Text>
</VStack>
 </Section>
    )
};

export default History;