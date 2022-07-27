import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Grid,
} from "@chakra-ui/react";
import { relative } from "path";
import FoodCard from "../components/FoodCard";

export default function Order() {
  return (
    <Stack backgroundColor={"facebook.50"} minH='100vh'>
      <Grid templateColumns="repeat(5, 1fr)">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </Grid>
    </Stack>
  );
}
