
import Sidebar from "./Sidebar";
import React from "react";
import FoodCard from "../FoodCard";
import {Box, Flex, HStack, SimpleGrid, Stack,Button, Heading, Img,Text,Modal,useDisclosure,ModalHeader,ModalOverlay,ModalCloseButton,ModalBody,ModalFooter,ModalContent,FormLabel,FormControl,Input,Image, Grid } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function Dashboard() {
    return (
        <Flex minH={'100vh'} justifyContent={'start'}>
            {/* <SimpleGrid columns={2} h='100vh' w='full'>
                <Box h='full' w='full'><Sidebar/></Box>
                <Box bg='tomato' h='full' w='auto'>alskfm</Box>
            </SimpleGrid> */}
            {/* <Box h='full'><Sidebar/></Box> */}
            <Sidebar/>
            <Stack>
            <AddItem/>
            <SimpleGrid columns={'3'} w='auto'>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
            </SimpleGrid>
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

        <Button rounded={"sm"} onClick={onOpen}><AddIcon/>Add Item</Button>
  
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
                <Box mb={"3"} bg={"whatsapp.200"} >
                     <Image m={'auto'} maxH={'270px'} w={'300px'} src='https://cdn-icons-png.flaticon.com/512/2771/2771401.png'/>
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
{/*   
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder='Last name' />
              </FormControl> */}
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