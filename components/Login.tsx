import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    HStack,
    Divider,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {

    const [OTP, setOTP] = useState(false);

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email or mobile number</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password" display={OTP ? 'block' : 'none'}>
                            <FormLabel>Enter OTP</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                        <HStack justifyContent='space-between' py='4'>
                            <Divider />
                            <Text w='xs' textAlign='center'>or login with</Text>
                            <Divider />
                        </HStack>
                        <Button variant='ghost' justifyContent='center' alignItems='center' border='1px' borderColor='gray.600' rounded='md'>
                            <FcGoogle fontSize='24px' />
                            <Text ml='4' fontSize='md' fontWeight='medium'>Sign Up with Google</Text>
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}