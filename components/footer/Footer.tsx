import { Stack, Image, Link, Text } from "@chakra-ui/react";
import FooterDivider from "./FooterDivider";
import FooterLink from "./FooterLink";
import { FiFacebook, FiInstagram } from "react-icons/fi";

const Footer: React.FC = () => {
    const year = new Date().getFullYear()
    return (
        <Stack spacing={0}>
        <FooterDivider />
        <Stack
         alignItems="end"
         backgroundColor="#E59813"
         direction="row"
         height="350px"
         justifyContent="space-between"
         padding="20px 50px"
         paddingX={12}
         color={"white"}
        >
            <Text fontSize='sm'>
            <Image
              height="80px"
              src="https://i.imgur.com/OlnquSo.png"
              alt="Logo"
            />
            ⓒ {year}. Todos os direitos reservados.
            </Text>
       <Stack
         alignSelf="start"
         direction="column"
         fontSize="lg"
         fontWeight={700}
         spacing={7}
         textAlign="center"
       >
    
    <FooterLink href="/">Encontre seu pet</FooterLink>
    <FooterLink href="/">Sobre nós</FooterLink>
    <FooterLink href="/">Contato</FooterLink>
    <FooterLink href="/">Faça sua doação</FooterLink>
    </Stack>
<Stack direction="row" gap="10px" justifyContent="end" width="200px">
 <Link isExternal href="">
   <FiFacebook size={24}/>
 </Link>
 <Link isExternal href="">
 <FiInstagram size={24} />
 </Link>
</Stack>
</Stack>
</Stack>
    );
};

export default Footer;