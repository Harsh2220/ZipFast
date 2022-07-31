import React from "react";
import { Box, Button, Heading, Img, Stack, Text,Modal,useDisclosure,ModalHeader,ModalOverlay,ModalCloseButton,ModalBody,ModalFooter,ModalContent,FormLabel,FormControl,Input } from "@chakra-ui/react";

export default function FoodCard() {
    return (
        <Stack rounded="lg" bg="white" flexWrap="wrap" h='auto' maxW='72' m='5'>
            <Box shadow={9}>
                <Img
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    w="full"
                    h="48"
                    rounded={'lg'}
                    objectFit='cover'
                />
            </Box>
            <Stack px="3">
                <Heading mt="2" fontSize={["md", "lg", "xl"]} color='black' fontWeight='medium'>
                    Cheese Pizza
                </Heading>
                <Text fontSize="md" color="gray.500" fontWeight='semibold'>
                    ₹180
                </Text>
                <Box py='4' w='full'>
                    <Button colorScheme='blue' w='full' fontWeight='semibold'>Buy now</Button>
                </Box>
            </Stack>
        </Stack>
    );
}






