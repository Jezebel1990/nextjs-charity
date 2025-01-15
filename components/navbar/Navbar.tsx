import { Box, Container, Flex, Image, Stack, Button } from "@chakra-ui/react";
import Link from "next/link";
import NavbarLink, { NavbarLinkProps } from "./NavbarLink";
import { FaBars } from "react-icons/fa";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";

const NAVBAR_LINKS: NavbarLinkProps[] = [
  {
    href: "/",
    label: "Encontre seu pet",
  },
  {
    href: "/about",
    label: "Sobre nós",
  },
  {
    href: "/donation",
    label: "Faça sua doação",
  },
  {
    href: "/contacts",
    label: "Contatos",
  },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      as="nav"
      bg={"#ECA324"}
      color={"white"}
      boxShadow="2xl"
      height={20}
      position={"sticky"}
      top={0}
      width="full"
      zIndex={"modal"}
    >
      <Container height="full" maxW="container.xl">
        <Flex alignItems="center" height="full" justifyContent="space-between">
          {/* Logo */}
          <Link href="/">
            <Image
              height="60px"
              src="https://i.imgur.com/OlnquSo.png"
              alt="Logo"
            />
          </Link>

          {/* Links para telas grandes */}
          <Flex
            display={{ base: "none", lg: "flex" }}
            fontSize="lg"
            fontWeight={700}
            gap={12}
          >
            {NAVBAR_LINKS.map((link, index) => (
              <NavbarLink key={index} href={link.href} label={link.label} />
            ))}
          </Flex>

          {/* Drawer para telas pequenas */}
          <Box display={{ base: "block", lg: "none" }}>
            <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
              {/* Botão de abrir o Drawer */}
              <DrawerTrigger asChild>
                <Button
                 bg={"#ECA324"}
                 border={"#ECA324"}
                  variant="outline"
                  size="xs"
                  aria-label="Abrir menu"
                  onClick={() => setOpen(true)}
                >
                  <FaBars 
                  color="#F7F6F2"
                  />
                </Button>
              </DrawerTrigger>

              {/* Conteúdo do Drawer */}
              <DrawerBackdrop />
              <DrawerContent >
                <DrawerHeader>
                  <DrawerCloseTrigger asChild>
                    <Button size="xs" variant="ghost" onClick={() => setOpen(false)}>
                      Fechar
                    </Button>
                  </DrawerCloseTrigger>
                </DrawerHeader>
                <DrawerBody>
                  <Stack gap={4} color={"#2d2d2e"}>
                    {NAVBAR_LINKS.map((link, index) => (
                      <NavbarLink
                        key={index}
                        href={link.href}
                        label={link.label}
                        onClick={() => setOpen(false)} 
                      />
                    ))}
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </DrawerRoot>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
