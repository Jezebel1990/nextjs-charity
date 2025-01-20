import Link from "next/link";
import {Text} from "@chakra-ui/react";

interface FooterLinkProps {
  /** Href to navigate when interected. Required */
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = (props) => {
  const {href, children} = props;

  return (
    <Link href={href}>
      <Text 
      as="span" 
      cursor="pointer" 
      fontWeight={700} 
       _hover={{ textDecoration: "initial", color: "yellow.200" }}
        transition="color 0.2s ease-in-out"
      >
        {children}
      </Text>
    </Link>
  );
};

export default FooterLink;