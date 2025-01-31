import Section from "@/components/section/Section";
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  HStack,
  VStack,
  Text,
  Textarea,
  Container,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useToast,
  Image,
  Flex,
} from "@chakra-ui/react";
import { NextPage } from "next";

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };

const Contact: NextPage = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const { values, isLoading, error } = state;

  const onBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState((prev) => ({ ...prev, isLoading: true, error: "" }));

    try {
      // Enviar o formulário usando EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",  // ID do serviço
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", // ID do template
        {
          from_name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "" // ID do usuário (substitua com a sua chave pública do EmailJS)
      );

      console.log(result.text);
      setTouched({});
      setState(initState);
      toast({
        title: "Mensagem enviada com sucesso!",
        status: "success",
        duration: 2000,
        position: "bottom",
      });
    } catch (error: any) {
      console.error("Erro ao enviar o formulário:", error);
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message || "Erro ao enviar a mensagem.",
      }));
    }
  };

  return (
    <Section backgroundColor="white" hasDivider={false}>
      <HStack spacing={2} align="start">
        {/* Primeira coluna */}
        <Container>
          <VStack align="center">
            <Text fontSize="4xl" fontWeight={800} textAlign="center" color="primary.500">
              Mande sua
            </Text>
            <Text fontSize="4xl" fontWeight={800} textAlign="center" color="primary.500">
              mensagem e
            </Text>
            <Text fontSize="4xl" fontWeight={800} textAlign="center" color="primary.500">
              entraremos
            </Text>
            <Text fontSize="4xl" fontWeight={800} textAlign="center" color="primary.500">
              em contato.
            </Text>
            <Image src="https://i.imgur.com/5U6knfi.png" height="300px" alt="adorable dog" />
          </VStack>
        </Container>

        {/* Segunda coluna */}
        <Container maxW="550px">
          <form onSubmit={onSubmit}>
            <FormControl isRequired isInvalid={touched.name && !values.name} mb={3}>
              <FormLabel>Nome</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder="Fulano da Silva"
                backgroundColor="#f5f5f5"
                errorBorderColor="red.300"
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Obrigatório</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.email && !values.email} mb={3}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="fulano@gmail.com"
                backgroundColor="#f5f5f5"
                errorBorderColor="red.300"
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Obrigatório</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.subject && !values.subject} mb={3}>
              <FormLabel>Assunto</FormLabel>
              <Input
                type="text"
                name="subject"
                placeholder="Ex: Dúvida sobre serviços"
                backgroundColor="#f5f5f5"
                errorBorderColor="red.300"
                value={values.subject}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Obrigatório</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.message && !values.message} mb={3}>
              <FormLabel>Mensagem</FormLabel>
              <Textarea
                name="message"
                placeholder="Escreva sua mensagem aqui..."
                backgroundColor="#f5f5f5"
                rows={4}
                errorBorderColor="red.300"
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Obrigatório</FormErrorMessage>
            </FormControl>

            {error && (
              <Text color="red.500" mt={2}>
                {error}
              </Text>
            )}

            <Flex justify="flex-end" width="100%">
              <Button
                paddingX={12}
                colorScheme="primary"
                _hover={{ bg: "orange.500" }}
                isLoading={isLoading}
                isDisabled={!values.name || !values.email || !values.subject || !values.message}
                type="submit"
              >
                Enviar
              </Button>
            </Flex>
          </form>
        </Container>
      </HStack>
    </Section>
  );
};

export default Contact;
