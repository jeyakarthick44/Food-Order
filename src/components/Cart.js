import React from "react";
import { useSelector } from "react-redux";
import { Box, Badge, Heading, SimpleGrid } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { getProducts } from "../feature/ProductSlice";

const Home = () => {
  const recipe = useSelector(getProducts);

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
      <SimpleGrid columns={[1, 2, 3]} spacing={0}>
        {recipe.GTS.map((item) => (
          <Box
            style={{
              marginLeft: "15%",
              marginTop: "40px",
              marginBottom: "40px",
              marginRight: "10%",
              width: "70%",
            }}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            key={item.product_id}
          >
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
              <DeleteIcon />
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Home;
