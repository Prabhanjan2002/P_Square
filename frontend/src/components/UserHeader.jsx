import { VStack, Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar, Portal } from "@chakra-ui/react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { useToast } from "@chakra-ui/toast";

const UserHeader = () => {
  const toast = useToast();
  const copyURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {
      toast({
        title: "Profile Link",
        description: "copied",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    });
  };
  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Mark Z....
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>markxgvsq</Text>
            <Text fontSize={"xs"} bg={"gray.dark"} p={1} borderRadius={"full"}>
              threads.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar name="marlk z.." src="/zuck-avatar.png" size={"xl"} />
        </Box>
      </Flex>

      <Text>wknefiefw efwbicder hubcdhbhe</Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>3.2k follower</Text>
          <Box w="1" h="1" bg={"gray-light"} borderRadius={"full"}></Box>
          <Link color={"gray.light"}>instagram.com</Link>
        </Flex>
        <Flex>
          <Box className="icon-container">
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"}>
                  <MenuItem bg={"gray.dark"} onClick={copyURL}>
                    copy link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
