import { useState, useEffect } from "react";
import Section from "@/components/section/Section";
import { Paws } from "@/components/icons/Paws";
import {
  VStack,
  HStack,
  Text,
  Button,
  Input,
  Box,
  Image,
  InputGroup,
  InputRightElement,
  useClipboard,
  Container,
  IconButton,
} from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";
import { NextPage } from "next";
import axios from "axios";

const Donation: NextPage = () => {
  const [amount, setAmount] = useState<number>(5);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [pixCode, setPixCode] = useState<string | null>(null);
  const { onCopy } = useClipboard(pixCode || "");
  const [copied, setCopied] = useState(false);
  const [showImage, setShowImage] = useState(true);

  const fixedAmounts = [2, 5, 10];

  const generatePix = async () => {
    try {
      const response = await axios.post("/api/pix", { amount });

      setQrCode(response.data.qrCode);
      setPixCode(response.data.qrCode);
      setShowImage(false); 
    } catch (error) {
      console.error("Erro ao gerar Pix:", error);
    }
  };

  useEffect(() => {
    if (pixCode) {
    }
  }, [pixCode]);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <Section backgroundColor="white" hasDivider={false}>
         <Box position="absolute" right={"-100px"} top={"-400px"}>
             <Paws />
            </Box>
      <Text fontSize="4xl" fontWeight="bold" color="primary.500" align="center" >
        Faça uma Doação ❤️
      </Text>
  
      <HStack spacing={2} justify="center" align="start" flexWrap="wrap">
        <Container maxW="400px">
          <VStack spacing={4} p={6}>
            {fixedAmounts.map((value) => (
              <Button key={value} colorScheme="primary" width="180px" onClick={() => setAmount(value)}>
                {formatCurrency(value)}
              </Button>
            ))}

            <Text fontSize="xl" fontWeight="bold" >Deseja outro valor?</Text>
            <HStack width="180px">
              <Input
                placeholder="R$ 00,00"
                type="text"
                variant='filled'
                textAlign="center"
                value={amount ? formatCurrency(amount) : ""}
                onChange={(e) => {
                  const newValue = parseFloat(e.target.value.replace(/[^\d,]/g, "").replace(",", "."));
                  setAmount(isNaN(newValue) || newValue < 0 ? 0 : newValue);
                }}
              />
            </HStack>

            <Button colorScheme="green" width="180px" onClick={generatePix}>
              Gerar QR Code
            </Button>
          </VStack>
        </Container>

        <Container maxW="400px">
          <VStack spacing={4} p={6}>
            {showImage ? (
              <Image src="https://i.imgur.com/vyoUfE0.png" loading="lazy" alt="Dois cachorros famintos" height="380px"/>
            ) : (
              <>
                {qrCode && (
                  <Box>
                    <Text fontSize="lg" fontWeight="bold">Escaneie e doe via Pix:</Text>
                    <Image src={qrCode} alt="QR Code do Pix" boxSize="200px" />
                  </Box>
                )}

                {pixCode && (
                  <Box width="100%" position="relative">
                    {copied && (
                      <Text
                        fontSize="xs"
                        color="green.500"
                        position="absolute"
                        left="90%"
                        transform="translateX(-50%)"
                        fontWeight="bold"
                      >
                        Copiado!
                      </Text>
                    )}

                    <Text fontSize="sm" color="primary.500" fontWeight="semibold" mb={2}>
                      Código Pix:
                    </Text>

                    <InputGroup>
                      <Input size="lg" value={pixCode} isReadOnly  variant='filled' />
                      <InputRightElement width="4.5rem">
                        <IconButton
                          aria-label="Copiar Código Pix"
                          icon={<FaCopy color="white"/>}
                          onClick={handleCopy}
                          colorScheme="primary"
                          top="1"
                          marginEnd="-6"
                        />
                      </InputRightElement>
                    </InputGroup>
                  </Box>
                )}
              </>
            )}
          </VStack>
        </Container>
        <Box bottom={"-250px"} left={0} position="absolute">
      <Paws />
     </Box>
      </HStack>
    </Section>
  );
};

export default Donation;
