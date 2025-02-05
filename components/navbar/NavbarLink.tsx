import Link from "next/link";
import { Text } from "@chakra-ui/react";

export interface NavbarLinkProps {
  href: string;
  label: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = (props) => {
  const {href, label} = props;

  return (
    <Link href={href} passHref>
      <Text
        as="span"
        cursor="pointer"
        fontWeight={600}
        _hover={{ textDecoration: "initial", 
          color: { base: "orange.400", md: "yellow.200" } 
        }}
        transition="color 0.2s ease-in-out"
      >
        {label}
      </Text>
    </Link>
  );
};

export default NavbarLink;
