import { Button, HStack } from "@chakra-ui/react"

const ButtonNew = () => {
    return (
<HStack wrap="wrap" gap="6">
  <Button
  borderWidth="1px"
  colorPalette="orange"
  bg="colorPalette.500"
  paddingX={12}
  size="xl"
  _hover={{
    bg: "colorPalette.600",
  }}
  >
    Encontre seu novo amigo
  </Button>
  </HStack>
    )
}
export default ButtonNew;
