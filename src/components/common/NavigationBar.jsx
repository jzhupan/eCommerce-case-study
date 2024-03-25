import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  Stack,
  Link,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
} from "@chakra-ui/react";
import Logo from "../../assets/home/Logo.png";
import { FaRegUser, FaSearch, FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavigationBar = () => {
  const MenuItemLink = ({ icon, label, href }) => (
    <MenuItem icon={icon} as={Link} href={href}>
      {label}
    </MenuItem>
  );

  return (
    <Box px={4} bg={useColorModeValue("white", "gray.900")} boxShadow={"sm"}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* Logo always visible */}
        <Flex alignItems="center">
          <img
            src={Logo}
            alt="logo"
            style={{ height: "32px", marginRight: "8px" }}
          />
          <Text
            as="span"
            fontFamily="Poppins, sans-serif"
            fontWeight="bold"
            fontSize="24px"
            color="#1a202c"
          >
            Furniro
          </Text>
        </Flex>

        {/* Mobile View: Burger Menu */}
        <Box display={{ base: "block", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
            />
            <MenuList>
              <MenuItem as={Link} href="#">
                Home
              </MenuItem>
              <MenuItem as={Link} href="#">
                Shop
              </MenuItem>
              <MenuItem as={Link} href="#">
                About
              </MenuItem>
              <MenuItem as={Link} href="#">
                Contact
              </MenuItem>
              <VStack>
                <MenuItemLink icon={<FaRegUser />} label="Account" href="#" />
                <MenuItemLink icon={<FaSearch />} label="Search" href="#" />
                <MenuItemLink
                  icon={<FaRegHeart />}
                  label="Favorites"
                  href="#"
                />
                <MenuItemLink icon={<BsCart3 />} label="Cart" href="#" />
              </VStack>
            </MenuList>
          </Menu>
        </Box>

        {/* Desktop View: Navigation Links */}
        <Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
          <HStack spacing={4} as={"nav"}>
            <Link href="#" fontWeight="medium">
              Home
            </Link>
            <Link href="#" fontWeight="medium">
              Shop
            </Link>
            <Link href="#" fontWeight="medium">
              About
            </Link>
            <Link href="#" fontWeight="medium">
              Contact
            </Link>
          </HStack>
          <HStack spacing={7} marginLeft="20px">
            <IconButton
              icon={<FaRegUser />}
              size={"sm"}
              aria-label={"Account"}
            />
            <IconButton icon={<FaSearch />} size={"sm"} aria-label={"Search"} />
            <IconButton
              icon={<FaRegHeart />}
              size={"sm"}
              aria-label={"Favorites"}
            />
            <IconButton icon={<BsCart3 />} size={"sm"} aria-label={"Cart"} />
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavigationBar;
