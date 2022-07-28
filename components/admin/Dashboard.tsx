import { Box, HStack, SimpleGrid, Stack } from "@chakra-ui/react";

export default function Dashboard() {
    return (
        <HStack minH={'100vh'}>
            <SimpleGrid columns={2} h='100vh' w='full' bg='cyan'>
                <Box bg='tomato' h='full' w='200px'>ksn</Box>
                <Box bg='tomato' h='full' w='auto'>alskfm</Box>
            </SimpleGrid>
        </HStack>
    )
}
