import {
  Grid,
  GridItem,
  Box,
  Text,
  Link,
  Input,
  Button,
  Flex,
  Divider,
  Center,
} from "@chakra-ui/react";

const Footer = () => {
  function FooterProps() {
    const property = {
      fontGrey: "#9F9F9F",
      fontBlack: "#000000",
      fontMd: "16px",
      fontLg: "24px",
    };

    return (
      <Box color="black" p={10}>
        <Center w="100%">
          <Divider orientation="horizontal" />
        </Center>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "2fr repeat(2, 1fr) 2fr",
          }}
          gap={6}
          width="90%"
          p="5"
          m="5"
        >
          <GridItem width="70%">
            <Text fontWeight="bold" fontSize={property.fontLg} mb={10}>
              Funiro.
            </Text>
            <Text mb={2} color={property.fontGrey} fontSize={property.fontMd}>
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </Text>
          </GridItem>

          <GridItem colStart={{ md: 2 }} colEnd={{ md: 3 }}>
            <Text
              fontSize={property.fontMd}
              fontWeight="medium"
              color={property.fontGrey}
              mb={10}
            >
              Links
            </Text>
            <Link
              display="block"
              mb={10}
              fontSize={property.fontMd}
              fontWeight="medium"
            >
              Home
            </Link>
            <Link
              display="block"
              mb={10}
              fontSize={property.fontMd}
              fontWeight="medium"
            >
              Shop
            </Link>
            <Link
              display="block"
              mb={10}
              fontSize={property.fontMd}
              fontWeight="medium"
            >
              About
            </Link>
            <Link
              display="block"
              fontSize={property.fontMd}
              fontWeight="medium"
            >
              Contact
            </Link>
          </GridItem>

          <GridItem colStart={{ md: 3 }} colEnd={{ md: 4 }}>
            <Text
              fontSize={property.fontMd}
              fontWeight="medium"
              color={property.fontGrey}
              mb={10}
            >
              Help
            </Text>
            <Link
              display="block"
              mb={10}
              fontSize={property.fontMd}
              fontWeight="medium"
            >
              Payment Options
            </Link>
            <Link
              display="block"
              mb={10}
              fontSize={property.fontMd}
              fontWeight="medium"
            >
              Returns
            </Link>
            <Link
              display="block"
              mb={10}
              fontSize={property.fontMd}
              fontWeight="medium"
            >
              Privacy Policies
            </Link>
          </GridItem>

          <GridItem>
            <Text
              fontSize={property.fontMd}
              fontWeight="medium"
              color={property.fontGrey}
              mb={10}
            >
              Newsletter
            </Text>
            <Flex>
              <Input
                placeholder="Enter Your Email Address"
                mb={2}
                border="none"
                borderBottom="1px solid black"
                borderRadius="none"
                outline="none"
                p={0}
              />
              <Button
                marginLeft="5"
                width="medium"
                background="none"
                border="none"
                borderBottom="1px solid black"
                borderRadius="none"
                outline="none"
              >
                SUBSCRIBE
              </Button>
            </Flex>
          </GridItem>
        </Grid>
        <Center>
          <Divider orientation="horizontal" width="90%" />
        </Center>
        <Box p="2" mt="10" w="70%">
          <Text pl="10">2023 furino. All rights reverved</Text>
        </Box>
      </Box>
    );
  }
  return <div>{FooterProps()}</div>;
};

export default Footer;
