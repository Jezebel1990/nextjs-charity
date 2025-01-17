
import { MeetColumn } from "@/components/meet/MeetColumn";
import Section from "@/components/section/Section";
import { Heading, Stack, Box, Grid, Button } from "@chakra-ui/react";

const MeetYourBuddy:React.FC = () => {
    return (
       <Section hasDivider backgroundColor="white" dividerColor="#FFEDAA">
        <Stack position="relative" textAlign="center">
         <Heading fontSize="5xl" fontWeight={700}  lineHeight={1.3}>
          <Box>Conheça o seu próximo</Box>
          <Box color="#FF9501">amigo</Box>
         </Heading>
         <Box position="relative" top="-32">
        <Grid
         gridTemplateColumns={["repeat(3,1fr)", "repeat(6,1fr)"]}
         maxH={["500px", "inherit"]}
         overflowY={["hidden"]}
         pt="32"
         gap={4}
        >
       <MeetColumn end={3} position={["0", "-60px"]} start={0}/>
       <MeetColumn end={6} position={["100px", "0"]} start={3} />
       <MeetColumn end={9} position={["0", "100px"]} start={6} />
       <MeetColumn end={12} position="150px" start={9} />
       <MeetColumn end={15} position={["100px", "0"]} start={12} />
       <MeetColumn end={18} position={["0", "-60px"]} start={15} />
        </Grid>
 <Stack align="center" bg="white">
  <Box
    boxShadow={[
        "0px 0px 50px 60px  rgba(255,255,255,1)",
        "0px -30px 100px 130px  rgba(255,255,255,1)",
    ]}
    h="0px"
    mb="4"
    position="relative"
    w="full"
  />

<Button size="lg" colorScheme='orange'>Encontre seu novo amigo</Button>
 </Stack>
         </Box>
        </Stack>
       </Section>
    );
}

export default MeetYourBuddy;