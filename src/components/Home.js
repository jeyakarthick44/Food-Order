import React from "react";
import {
  Box,
  Badge,
  Image,
  Heading,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "../feature/ProductSlice";
import item from "../get_products.json";
import { getProducts } from "../feature/ProductSlice";
import { addToCart, decreaseCart } from "../feature/CartSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
const Home = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const data = item.GTS;
  dispatch(productsFetch(data));

  const food = useSelector(getProducts);
  console.log(food);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("./cart");
  };

  return (
    <>
      <Heading
        as="h2"
        size="xl"
        isTruncated
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        Swiggy
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {food.map((product) => (
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
              style={{ height: "260px", width: "100%" }}
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

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {product.shop_name}
              </Box>
              <Box>
                <Box as="span" color="gray.600" fontSize="sm">
                  Price : ₹
                  {product.product_price.map((price) => price.product_price)}
                </Box>
              </Box>
              <Box>
                <Heading
                  mt="1"
                  fontWeight="semibold"
                  as="xs"
                  size="xs"
                  lineHeight="tight"
                  isTruncated
                >
                  {product.product_message}
                </Heading>
                <span
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                ></span>
              </Box>
            </Box>
            <Button
              style={{
                marginBottom: "20px",
                color: "blueviolet",
              }}
              onClick={() => {
                handleAddToCart(product);
              }}
            >
              Add to Cart
            </Button>
          </Box>
        ))}
      </SimpleGrid>
      <Link to={"/cart"}>
        <Button style={{ marginBottom: "30px" }}>
          Cart
          <ArrowForwardIcon style={{ marginLeft: "10px" }} />
        </Button>
      </Link>
    </>
  );
};

export default Home;
