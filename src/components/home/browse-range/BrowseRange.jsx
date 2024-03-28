import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import diningImg from "../../../assets/home/Dining img.png";
import livingImg from "../../../assets/home/Living-room img.png";
import bedroomImg from "../../../assets/home/Bedroom img.png";

const BrowseRange = () => {
  function BrowseItems() {
    const property = {
      bgColor: "white",
      color: "fontBlack",
      titleFillColor: "#333333",
      textFillColor: "#666666",
      width: 1183,
      height: 685,
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "Browse The Range",
      diningText: "Dining",
      livingText: "Living",
      bedroomText: "Bedroom",
    };

    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          maxW={property.width}
          height={property.height}
          overflow="hidden"
          backgroundColor={property.bgColor}
          p="6"
          m="6"
        >
          <Box
            fontFamily="heading"
            fontWeight="bold"
            fontSize="32px"
            textShadow="
          -1px -1px 0 #000,  
          1px -1px 0 #000,
          -1px  1px 0 #000,
          1px  1px 0 #000,
          1px 4px 6px rgba(0,0,0,0.5)"
            color={property.titleFillColor}
            textAlign="center"
          >
            {property.title}
          </Box>

          <Text
            fontFamily="body"
            fontSize="16px"
            fontWeight="regular"
            color={property.textFillColor}
            textAlign="center"
            textShadow="
          -1px -1px 0 #000,  
          1px -1px 0 #000,
          -1px  1px 0 #000,
          1px  1px 0 #000,
          1px 4px 6px rgba(0,0,0,0.5)"
          >
            {property.subtitle}
          </Text>

          <SimpleGrid
            columns={[2, null, 3]}
            spacing="5%"
            justifyItems="center"
            mt="4%"
          >
            <Box maxW="381px" maxH="480px">
              <img src={diningImg} alt="dining room" />
              <Text
                fontWeight="semiBold"
                fontSize="24px"
                textAlign="center"
                m="5%"
              >
                {property.diningText}
              </Text>
            </Box>
            <Box maxW="381px" maxH="480px">
              <img src={livingImg} alt="living room" />
              <Text
                fontWeight="semiBold"
                fontSize="24px"
                textAlign="center"
                m="5%"
              >
                {property.livingText}
              </Text>
            </Box>
            <Box maxW="381px" maxH="480px">
              <img src={bedroomImg} alt="bedroom" />
              <Text
                fontWeight="semiBold"
                fontSize="24px"
                textAlign="center"
                m="5%"
              >
                {property.bedroomText}
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    );
  }

  return <div>{BrowseItems()}</div>;
};

export default BrowseRange;
