import React from "react";
import {
  Box,
  Badge,
  Image,
  Heading,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "../feature/ProductSlice";
import item from "../get_products.json";
import { getProducts } from "../feature/ProductSlice";

const Home = () => {
  const dispatch = useDispatch();
  const data = item.GTS;
  dispatch(productsFetch(data));

  const food = useSelector(getProducts);
  console.log(food);
  return (
    <>
      <Heading
        as="h2"
        size="xl"
        isTruncated
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        Foods
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {food.map((item) => (
          <Box
            style={{
              marginLeft: "10%",
              marginTop: "40px",
              marginBottom: "40px",
              marginRight: "40%",
              width: "80%",
            }}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            key={item.product_id}
          >
            <Image
              src={item.product_image}
              style={{ height: "260px", width: "100%" }}
              alt="home"
            />
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {item.service.service_name}
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {item.shop_name}
                  baths
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {item.shop_name}
              </Box>
              <Box>
                <Box as="span" color="gray.600" fontSize="sm">
                  {item.price}/week
                </Box>
              </Box>
              <Box>
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {item.shop_name}
                </Box>
                <span
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                ></span>
              </Box>
            </Box>
            <Box
              bg="whiteSmoke"
              w="50%"
              p={1}
              color="black"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginLeft: "25%",
                marginBottom: "20px",
              }}
            >
              <MinusIcon />
              <Text fontSize="xl">0</Text>
              <AddIcon />
            </Box>
            <Button
              style={{
                marginBottom: "20px",
                color: "blueviolet",
              }}
              // onClick={() => {
              //   dispatch(addItemToCart("hi"));
              // }}
            >
              Add to Cart
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Home;
