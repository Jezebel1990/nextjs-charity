import { Box, Container, VStack } from "@chakra-ui/react";
import SectionDivider from "./SectionDivider";

interface SectionProps {
 children: React.ReactNode;
  backgroundIsImage?: boolean;
  backgroundImage?: string;
  backgroundColor?: string;
  hasDivider?: boolean;
  dividerColor?: string;
  hasGradientEffect?: boolean;
}


const Section:React.FC<SectionProps> = (props) => {
   const {
    backgroundColor = "white",
    dividerColor = "black",
    hasDivider = true,
    backgroundIsImage = false,
    backgroundImage = "https://i.imgur.com/KV2Ms9a.png",
    hasGradientEffect = false,
    children,
   } = props;


    return (
<VStack height="auto" overflow="hidden" position="relative">
 <Box
     backgroundColor={backgroundColor}
     backgroundImage={backgroundIsImage ? `url(${backgroundImage})` : "none"}
     backgroundPosition={"center center"}
     backgroundSize={"cover"}
     height="100%"
     width="100%"
    
 >
<Box
   bgGradient={hasGradientEffect ? "linear(to-r, blackAlpha.600, transparent)" : "none"}
   paddingX={{base: 4, md: 8}}
   paddingY={[20, 30, 40, 60, 150]}
   
>
<Container  maxWidth="container.xl">
     {children}
     {hasDivider && <SectionDivider backgroundColor={dividerColor}/>}
    </Container>
</Box>
 </Box>
</VStack>
    );
};

export default Section;