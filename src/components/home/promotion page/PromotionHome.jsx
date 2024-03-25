import { Container, Box, Button, Text, GridItem, Grid } from "@chakra-ui/react";
import ProductHomeImg from "../../../assets/home/home page bg.png";

const PromotionHome = () => {
  function PromoInfo() {
    const property = {
      bgColor: "#FFF3E3",
      width: 643,
      height: 443,
      subtitle: "New Arrival",
      title: "Discover Our New Collection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
      buttonInfo: "BUY NOW",
    };

    return (
      <Box
        maxW={property.width}
        height={property.height}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        backgroundColor={property.bgColor}
      >
        <Box p="6" m="6">
          <Box display="flex" alignItems="baseline" width="100%">
            <Text
              fontFamily="body"
              fontSize="16px"
              fontWeight="semiBold"
              color="fontBlack"
            >
              {property.subtitle}
            </Text>
          </Box>

          <Box
            fontFamily="heading"
            fontWeight="bold"
            fontSize="52px"
            color="brand.primaryColor"
            width="80%"
          >
            {property.title}
          </Box>

          <Box>
            <Box
              as="span"
              color="fontBlack"
              fontWeight="medium"
              fontSize="18px"
            >
              {property.description}
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            <Button
              bgColor="brand.primaryColor"
              fontFamily="brand.body"
              fontWeight="bold"
              fontSize="16px"
              color="white"
              borderRadius="none"
              mt="8"
              padding="8"
              width="40%"
            >
              {property.buttonInfo}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
  return (
    <div>
      <Container maxW="1440px">
        <Box
          height="716.83px"
          width="100%"
          backgroundImage={ProductHomeImg}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Grid h="100%" templateColumns="repeat(5, 1fr)" gap={4}>
            <GridItem pr="10" area={"main"}>
              {PromoInfo()}
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default PromotionHome;
