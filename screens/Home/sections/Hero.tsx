import ButtonNew from "@/components/button/ButtonNew";
import Section from "@/components/section/Section";
import { Box, Stack, Text} from "@chakra-ui/react";


interface Props {}

const Hero:React.FC<Props> = () => {
    return (
        <Section backgroundIsImage backgroundColor="white" dividerColor="white" >
        <Stack align={"flex-start"} marginLeft={[10, 20, 30]}  maxWidth={489} py={100} gap={2}>
        <Text
          color={"white"}
          fontSize={{base: "xl", md: "lg"}}
          fontWeight={700}
          lineHeight={1}
          textShadow={"0px 0px 5px rgba(0, 0, 0, 0.5)"}
        >
          Adote seu pet
        </Text>
        <Stack direction={"row"} left="-20px" position="relative" gap={2}>
        <Box 
        _before={{
            content: "''",
            display: "block",
            width: "10px",
            height: "full",
            background: "primary.400",
        }}
        />
       <Text
        color={"white"}
        fontSize={{base: "5xl", md: "6xl"}}
        fontWeight={900}
        lineHeight={1.1}
        textShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}
       >
        Uma mão estendida por quatro patas
       </Text>
     </Stack>
     <Text
      color={"white"}
      fontSize={{base: "lg", md: "xl"}}
      fontWeight={600}
      lineHeight={1.5}
      textShadow={"0px 0px 5px rgba(0, 0, 0, 0.5)"}
     >
    Buscamos  combater o abandono e os maus-tratos aos animais, promovendo o respeito e o amor.
     </Text>
   </Stack>
<ButtonNew />
</Section>
    );
};

export default Hero;