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
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/router';
import useStore from 'zustand';

export default function VerifyOtp() {

    const projectUrl = process.env.NEXT_PUBLIC_PROJECT_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
    const supabase = createClient(projectUrl, supabaseKey);

    const router = useRouter();
    const toast = useToast();
    const state = useStore();
    const mobile = state.mobile;
    const otp = state.otp;
    const setotp = state.setotp;

    const verifyOTP = async () => {
        let { session, error } = await supabase.auth.verifyOTP({
            phone: mobile,
            token: otp
        })
        if (error) {
            toast({
                title: 'Some Error Occured!',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        } else {
            toast({
                title: 'Success !!!',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }
    }

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
                        <FormControl id="password">
                            <FormLabel>Enter OTP</FormLabel>
                            <Input type="password" onChange={(e) => { setotp(e.target.value) }} />
                        </FormControl>
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