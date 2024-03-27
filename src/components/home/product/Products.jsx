import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const Products = () => {
  const CircleTag = ({ label, colorScheme }) => {
    return (
      <Box
        position="absolute"
        w="48px"
        h="48px"
        borderRadius="50%"
        top="5"
        right="5"
        bg={colorScheme}
        color="white"
        pt="3"
        pl="2"
        fontSize="16px"
        fontWeight="regular"
        flexWrap={"none"}
      >
        {label}
      </Box>
    );
  };
  const products = [
    {
      id: 1,
      name: "Syltherine",
      subtitle: "Stylish cafe table",
      price: "Rp 2.500.000",
      salePrice: "Rp 3.500.000",
      image: "/src/assets/home/Product1.png",
      tag: "30%",
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
      subtitle: "Luxury large sofa",
      price: "Rp 7.000.000",
      salePrice: "Rp 3.500.000",
      image: "/src/assets/home/Product3.png",
      tag: "50%",
    },
    {
      id: 4,
      name: "Respira",
      subtitle: "Outdoor bar table and stool",
      price: "Rp 500.000",
      salePrice: "Rp 3.500.000",
      image: "/src/assets/home/Product4.png",
      tag: "New",
    },
    {
      id: 5,
      name: "Grifo",
      subtitle: "Night lamp",
      price: "Rp 1.500.000",
      salePrice: "Rp 1.500.000",
      image: "/src/assets/home/Product5.png",
    },
    {
      id: 6,
      name: "Muggo",
      subtitle: "Small mug",
      price: "Rp 150.000",
      salePrice: "Rp 150.000",
      image: "/src/assets/home/Product6.png",
      tag: "New",
    },
    {
      id: 7,
      name: "Pingky",
      subtitle: "Cute bed set ",
      price: "Rp 7.000.000",
      salePrice: "Rp 3.500.000",
      image: "/src/assets/home/Product7.png",
      tag: "50%",
    },
    {
      id: 8,
      name: "Potty",
      subtitle: "Minimalist flower pot",
      price: "Rp 500.000",
      salePrice: "Rp 3.500.000",
      image: "/src/assets/home/Product8.png",
      tag: "New",
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
                {product.tag && (
                  <CircleTag
                    label={product.tag}
                    colorScheme={product.tag === "New" ? "teal.500" : "red.500"}
                  />
                )}
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
        </Grid>
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="5"
          margin="3"
        >
          <Button
            width="20%"
            borderRadius="none"
            bg="none"
            color="brand.primaryColor"
            outline={property.buttonOutline}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Show more
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Products;
