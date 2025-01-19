import Section from "@/components/section/Section";
import { Badge, Button, Link, Stack, Text } from "@chakra-ui/react"

const Transit: React.FC = () => {
    return (
        <Section
            backgroundIsImage
            backgroundColor="gray.200"
            backgroundImage="https://i.imgur.com/axq6C0e.jpeg"
            dividerColor="white"
        >
            <Stack
                alignItems="center"
                backgroundColor="white"
                borderRadius="xl"
                marginLeft="auto"
                maxWidth={640}
                padding={12}
                spacing={6}
                textAlign="center"
            >
<Badge colorScheme="orange" color="#ff6b01" fontSize="lg" variant="subtle">
Junte-se a nós para mudar vidas
</Badge>

<Text fontSize="6xl" fontWeight={800}>
Lar temporário
</Text>
<Text fontSize="2xl">
Se você não pode adotar, mas tem a possibilidade de abrigar um dos nossos resgatados,  
  junte-se como{" "}

<Text as="span" fontWeight={700}>
lar temporário
</Text>
</Text>
<Link
  isExternal
  _hover={{textDecoration: "none"}}
  href=""
  rel="noreferrer"
>
<Button colorScheme="primary" size="lg">
Preencha o formulário
</Button>
</Link>
</Stack>
</Section>
    );
};
export default Transit;