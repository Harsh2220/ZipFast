import {
  Checkbox,
  Divider,
  Flex,
  Heading,
  HStack,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function AllOrdersCard() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      borderColor="blue.300"
      bg="whiteAlpha.100"
      w='64'
      rounded="md"
      py="6"
      px="4"
      m="5"
    >
      <VStack
        alignItems="flex-start"
        justifyContent="space-between"
        flex="auto"
      >
        <Heading fontSize="lg" fontWeight="semibold">
          #ZFT0000015
        </Heading>
        <Text fontSize="lg" fontWeight="semibold">
          John Doe
        </Text>
        <Text fontSize="lg" fontWeight="semibold">
          8:00AM - 9:00AM
        </Text>
      </VStack>
      <Divider my='2'/>
      <VStack alignItems="flex-start" justifyContent="flex-start">
        <Flex alignItems='center' justifyContent='space-between' w='full'>
          <Text fontSize="lg">
            Sent For Cooking
          </Text>
          <Switch size='md'/>
        </Flex>
        <Flex alignItems='center' justifyContent='space-between' w='full'>
          <Text fontSize="lg">
            Order Fullfilled
          </Text>
          <Switch size='md'/>
        </Flex>
      </VStack>
    </Flex>
  );
}

export default AllOrdersCard;
