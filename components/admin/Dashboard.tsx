import Sidebar from "./Sidebar";
import React from "react";
import FoodCard from "../FoodCard";
import { Box, Flex, HStack, SimpleGrid, Stack, Button, Heading, Img, Text, Modal, useDisclosure, ModalHeader, ModalOverlay, ModalCloseButton, ModalBody, ModalFooter, ModalContent, FormLabel, FormControl, Input, Image, Grid } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function Dashboard() {
    return (
        <Flex minH={'100vh'} justifyContent={'start'} w='full'>
            <Box pos='sticky' top='0' maxWidth={'xs'}>
                <Sidebar />
            </Box>
            <Stack w='full'>
                <AddItem />
                <Flex direction='row' flexWrap='wrap' justifyContent='center'>
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                </Flex>
            </Stack>
        </Flex>
    )
}

function AddItem() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <>
            <Flex justifyContent='end' m='4'>
                <Button rounded={"md"} onClick={onOpen} w='36' leftIcon={<AddIcon />}>Add Item</Button>
            </Flex>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Dish-item</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box mb={"3"} bg={"whatsapp.200"} rounded='xl'>
                            <Img m={'auto'} maxH={'270px'} w={'300px'} src='https://cdn-icons-png.flaticon.com/512/2771/2771401.png' rounded={'xl'} />
                        </Box>
                        <Button colorScheme='blue' size={"md"} w={"full"}>
                            Choose Image
                        </Button>
                    </ModalBody>
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Dish name</FormLabel>
                            <Input ref={initialRef} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Price</FormLabel>
                            <Input ref={initialRef} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}