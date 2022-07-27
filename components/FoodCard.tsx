import {
  Box,
  Center, Text
} from "@chakra-ui/react";

export default function FoodCard() {
  return (
    <Center>
      <Box
        backgroundImage="url('https://i.pinimg.com/originals/a2/bb/d5/a2bbd55e26b31e5157b770d5e5292c0d.jpg')"
        roundedTop="10px"
        rounded="10px"
        backgroundPosition="center"
        backgroundRepeat={"no-repeat"}
        backgroundSize="cover"
        m="10px"
        w="230px"
        h="300px"
        position={'relative'}
        boxShadow={'dark-lg'}
        
      >
        <Box h={'10'} w={'full'} mt="auto" background='linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))' position="absolute" bottom="0">
          <Text>Resturant</Text>F
        </Box>
      </Box>
    </Center>
  )
}
