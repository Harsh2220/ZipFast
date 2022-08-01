import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function AllOrdersCard() {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      borderColor="blue.300"
      bg="whiteAlpha.100"
      minW="max-content"
      rounded="md"
      h="auto"
      py="5"
      px="4"
      m="6"
    >
      <VStack
        alignItems="flex-start"
        justifyContent="space-between"
        flex="auto"
      >
        <Text fontSize="xl" color="white" fontWeight="semibold">
          User ID:ZFT0000015
        </Text>
        <Text fontSize="xl" color="white" fontWeight="semibold">
          Dish Name:Paneer Masala
        </Text>
        <Text fontSize="2xl" color="white" fontWeight="semibold">
          Time : 8:47 PM
        </Text>
      </VStack>
      <VStack alignItems="flex-start" justifyContent="flex-start" mx="8">
        <Checkbox>
          <Text fontSize="xl" color="white" fontWeight="light">
            Sent For Cooking
          </Text>
        </Checkbox>
        <Checkbox>
          <Text fontSize="xl" color="white" fontWeight="light">
            Order Fullfilled
          </Text>
        </Checkbox>
      </VStack>
    </Flex>
  );
}

export default AllOrdersCard;
