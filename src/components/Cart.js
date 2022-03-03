import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import {
  Badge,
  Image,
  Heading,
  Button,
  SimpleGrid,
  Box,
  Text,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  removeFromCart,
  addToCart,
  decreaseCart,
  getTotal,
} from "../feature/CartSlice";

const Home = () => {
  const { cartTotalAmount } = useSelector((state) => state.cart);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecrease = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleIncrease = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  return (
    <>
      <Heading
        as="h2"
        size="xl"
        isTruncated
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        Orders
      </Heading>
      <Link to={"/"}>
        <Button>
          <ArrowBackIcon style={{ marginRight: "10px" }} />
          Back
        </Button>
      </Link>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {cart.cartItems?.map((product) => (
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
            key={product.product_id}
          >
            <Image
              src={product.product_image}
              style={{ height: "210px", width: "100%" }}
              alt="home"
            />
            <Box p="6">
              <Box>
                <Badge borderRadius="full">
                  <Heading px="4" p="2" color="teel" as="h5" size="sm">
                    {product.product_name}
                  </Heading>
                </Badge>
              </Box>

              <Box style={{ paddingTop: "10px" }}>
                <Box as="span" color="gray.600" fontSize="sm">
                  Price : ₹
                  {product.product_price.map((price) => price.product_price)}
                </Box>
              </Box>
              <Box>
                <Box as="span" color="gray.600" fontSize="sm"></Box>
              </Box>
              <Box>
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                ></Box>
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
              p={2}
              color="black"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginLeft: "25%",
                marginBottom: "10px",
              }}
            >
              <MinusIcon onClick={() => handleDecrease(product)} />
              <Text fontSize="xl">{product.cartQuantity}</Text>
              <AddIcon onClick={() => handleIncrease(product)} />
            </Box>
            <Button
              style={{
                marginBottom: "10px",
                color: "blueviolet",
              }}
              onClick={() => handleRemove(product)}
            >
              <DeleteIcon />
            </Button>
          </Box>
        ))}
      </SimpleGrid>
      <Heading>{cartTotalAmount}</Heading>
    </>
  );
};

export default Home;
