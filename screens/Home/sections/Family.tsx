import Section from "@/components/section/Section";
import { Box, Grid, GridItem, Text, useBreakpointValue } from "@chakra-ui/react";

const Family: React.FC = () => {
    const display = useBreakpointValue({base: "none", md: "block"});
    const colspan = useBreakpointValue({base: 1, md: 2});
    
return (
<Section backgroundColor="white" dividerColor="#E5F4FF">
    <Grid
      gap={3}
      overflow="hidden"
      position="relative"
      py={[5, 10]}
      templateColumns={{base: "0 repeat(4, 1fr) 0", md: "repeat(6, 1fr)"}}
      templateRows="repeat(3, 1fr)"
    >
<GridItem
  backgroundImage="url(https://i.imgur.com/Mervs5g.png)"
  backgroundPosition="center center"
  backgroundSize="cover"
  borderRadius="2xl"
  display={display}
  minHeight={40}
/>

<GridItem
backgroundImage="url(https://i.imgur.com/4KKW9Ps.png)"
backgroundPosition="center center"
backgroundSize="cover"
borderRadius="2xl"
colStart={2}
/>

<GridItem 
  backgroundImage="url(https://i.imgur.com/FXF2bsJ.jpeg)"
  backgroundPosition="center center"
  backgroundSize="cover"
  borderRadius="2xl"
  colSpan={2}
  colStart={3}
  rowSpan={3}
>

<Box
  alignItems="flex-end"
  bgGradient={"linear-gradient(0deg, gray.900 0%, transparent 30%)"}
  borderRadius="2xl"
  display="flex"
  h="100%"
  justifyContent="center"
  minHeight={80}
  padding={[2, 5, 10]}
>
    <Text align="center" color="white" fontSize={["2xl", null, "4xl"]} fontWeight={700}>
    Abrace a Família
    </Text>
</Box>
</GridItem>

<GridItem 
 backgroundImage="url(https://i.imgur.com/e9WXhTU.jpeg)"
 backgroundPosition="center center"
 backgroundSize="cover"
 borderRadius="2xl"
 colStart={5}
 rowSpan={2}
/>

<GridItem
 backgroundImage="url(https://i.imgur.com/40JTgGu.jpeg)"
 backgroundPosition="center center"
 backgroundSize="cover"
 borderRadius="2xl"
 display={display}
/>

<GridItem 
  backgroundImage="url(https://i.imgur.com/zjPnFyk.png)"
  backgroundPosition="center center"
  backgroundSize="cover"
  borderRadius="2xl"
  colEnd={3}
  colSpan={colspan}
/>

<GridItem
 backgroundImage="url(https://i.imgur.com/eegqEf9.jpeg)"
 backgroundPosition="center center"
 backgroundSize="cover"
 borderRadius="2xl"
 display={display}
/>

<GridItem
 backgroundImage="url(https://i.imgur.com/SeGkSPR.jpeg)"
 backgroundPosition="center center"
 backgroundSize="cover"
 borderRadius="2xl"
 display={display}
/>
<GridItem
 backgroundImage="url(https://i.imgur.com/34zjrO9.jpeg)"
 backgroundPosition="center center"
 backgroundSize="cover"
 borderRadius="2xl"
 colStart={2}
/>

<GridItem
  backgroundImage="url(https://i.imgur.com/B1AIfyY.jpeg)"
  backgroundPosition="center center"
  backgroundSize="cover"
  borderRadius="2xl"
  colSpan={colspan}
  colStart={5}
/>
</Grid>
</Section>
);
};
export default Family;