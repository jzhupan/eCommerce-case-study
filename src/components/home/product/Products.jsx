import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      salePrice: "Rp 3.500.000",
      image: "/src/assets/home/Product1.png",
    },
    {
      id: 2,
      name: "Leviosa",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      salePrice: "Rp 3.500.000",
      image: "/src/assets/home/Product2.png",
    },
    {
      id: 3,
      name: "Lolito",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      salePrice: "Rp 3.500.000",
      image: "/src/assets/home/Product3.png",
    },
    {
      id: 4,
      name: "Respira",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      salePrice: "Rp 3.500.000",
      image: "/src/assets/home/Product4.png",
    },
    {
      id: 5,
      name: "Grifo",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      salePrice: "Rp 3.500.000",
      image: "/src/assets/home/Product5.png",
    },
    {
      id: 6,
      name: "Muggo",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      salePrice: "Rp 3.500.000",
      image: "/src/assets/home/Product6.png",
    },
    {
      id: 7,
      name: "Pingky",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      salePrice: "Rp 3.500.000",
      image: "/src/assets/home/Product7.png",
    },
    {
      id: 8,
      name: "Potty",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      salePrice: "Rp 3.500.000",
      image: "/src/assets/home/Product8.png",
    },
  ];

  const property = {
    lgSize: "24px",
    subColor: "#898989",
    smSize: "16px",
    mdSize: "20px",
    fontWLg: "semiBold",
    fontWSm: "medium",
    buttonOutline: "2px solid #B88E2F",
  };

  return (
    <>
      <Box justifyContent="center" padding="5%">
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {products.map((product) => (
            <GridItem
              key={product.id}
              w="285px"
              h="446px"
              bg="gray.50"
              //   boxShadow="md"
            >
              <Box maxW="285px" h="301px" position="relative" mb={4}>
                <Image
                  src={product.image}
                  alt={product.name}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>
              <Box pl={3}>
                <Text
                  pb={3}
                  fontWeight={property.fontWLg}
                  fontSize={property.lgSize}
                >
                  {product.name}
                </Text>
                <Text
                  pb={3}
                  fontWeight={property.fontWSm}
                  fontSize={property.smSize}
                  color={property.subColor}
                >
                  {product.subtitle}
                </Text>
                <Text
                  pb={3}
                  fontWeight={property.fontWLg}
                  fontSize={property.mdSize}
                >
                  {product.price}
                </Text>
              </Box>
            </GridItem>
          ))}
          <Button
            borderRadius="none"
            bg="none"
            color="brand.primaryColor"
            outline={property.buttonOutline}
          >
            Show more
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default Products;
