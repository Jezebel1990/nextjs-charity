import Link from "next/link";
import { Text } from "@chakra-ui/react";

export interface NavbarLinkProps {
  href: string;
  label: string;
  onClick?: () => void; 
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, label, onClick }) => {
  return (
    <Link href={href} passHref>
      <Text
        as="a"
        cursor="pointer"
        fontWeight={600}
        onClick={onClick} // Usar a função onClick aqui
        _hover={{ textDecoration: "underline", color: "gray.600" }}
        transition="color 0.2s ease-in-out"
      >
        {label}
      </Text>
    </Link>
  );
};

export default NavbarLink;
