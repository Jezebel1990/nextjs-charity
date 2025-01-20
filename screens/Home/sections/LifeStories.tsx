import Section from "@/components/section/Section";
import { Badge, Flex, Image, Stack, Text, VStack, Button, Link } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaInstagram } from "react-icons/fa";

const sliderImages = [
  { image: "https://i.imgur.com/axvVVmB.jpeg" },
  { title: "@caosemdono", text: "Parte da nossa campanha de resgate é compartilhar histórias de vida, porque muitas vezes os pets não são escolhidos, eles simplesmente nos encontram." },
  { image: "https://i.imgur.com/5r5GHR4.jpeg" },
  { title: "@adote", text: "Milhares de animais esperam por um lar. Ao adotar, você dá uma segunda chance para um pet que só precisa de amor e carinho." },
  { image: "https://i.imgur.com/aHGKXV6.jpeg" },
  { image: "https://i.imgur.com/21HgoYN.jpeg" },
  { title: "@resgate", text: "Cada resgate é um recomeço. A sua ajuda pode transformar a vida de um animal abandonado, oferecendo abrigo, cuidado e um futuro melhor." },
  { image: "https://i.imgur.com/EjDMIwf.jpeg" },
  { image: "https://i.imgur.com/bgQXa3f.png" },
  { title: "@voluntariado", text: "Com a sua ajuda, podemos salvar mais vidas. Seja voluntário, faça uma doação ou compartilhe a causa. Todo gesto faz a diferença!" },
  { image: "https://i.imgur.com/pOcPMkg.jpeg" },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1 },
};

export const LifeStories: React.FC = () => {
  return (
    <Section backgroundColor="#E5F4FF" hasDivider={false}>
      <VStack py={4} spacing={4} width="full">
        <Badge colorScheme="green" fontSize="lg" fontWeight={600}>
          Ajude a fazer a diferença
        </Badge>
        <Text fontSize="5xl" fontWeight={800} textAlign="center">
          Histórias de vida
        </Text>
        <Text maxWidth="640" textAlign="center" fontSize="xl">
          Nossa campanha de resgate também busca compartilhar histórias de vida,
          porque, muitas vezes, não escolhemos o pet — é ele que nos encontra.
        </Text>

        <Stack
          paddingTop={{ base: 10, md: 50 }}
          width={{
            base: "full",
            md: "container.md",
            lg: "container.lg",
            xl: "container.xl",
          }}
        >
          <Carousel
            responsive={responsive}
            infinite
            autoPlay={false}
            showDots
            keyBoardControl
            containerClass="carousel-container"
            dotListClass="custom-dots"
          >
            {sliderImages.map((slide, idx) => (
              <div key={idx} style={{ padding: "20px"}}>
                {slide.image ? (
                  <Image
                    alt="Slide Photo"
                    borderRadius={25}
                    height="auto"
                    src={slide.image}
                    width="100%"
                  />
                ) : (
                  <Flex alignItems="center" height="100%" justify="center">
                    <Stack direction="column" >
                      <Text fontSize="4xl"
                      fontWeight={800}
                      marginBottom={2}
                      textAlign="center"
                      color="primary.500"
                      >
                        {slide.title}
                      </Text>
                      <Text>{slide.text}</Text>
                    </Stack>
                  </Flex>
                )}
              </div>
            ))}
          </Carousel>
        </Stack>

        <Stack direction="row" paddingTop={{ base: 10, md: 50 }}>
          <Link
            isExternal
            _hover={{ textDecoration: "none" }}
            href=""
            rel="noreferrer"
          >
            <Button gap={3} size="lg" colorScheme='primary'  _hover={{ bg: "orange.500" }}>
              <FaInstagram size={20} />
              Siga-nos no Instagram
            </Button>
          </Link>
        </Stack>
      </VStack>
    </Section>
  );
};

export default LifeStories;
