import useKijiStore from "../store/KijiStore";
import { useEffect } from "react";

import {
  Box,
  Wrap,
  WrapItem,
  Image,
  Stack,
  Text,
  HStack,
  Tag,
  TagLabel,
  useColorModeValue,
} from "@chakra-ui/react";

const NewsList = () => {
  const kijis = useKijiStore((state) => state.kijis);
  const getAllData = useKijiStore((state) => state.getAllData);

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  return (
    <Wrap pb={6} spacing={"30px"} bg={useColorModeValue("white")}>
      {console.log("News List", kijis)}
      {kijis.map((kiji) => (
        <WrapItem>
          <Box
            maxW={"400px"}
            w={"full"}
            boxShadow={"xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"210px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={12}
              pos={"relative"}
            >
              <Image src={kiji.picture} layout={"fill"} />
            </Box>
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"md"}
                letterSpacing={1.1}
              >
                {kiji.title}
              </Text>
              <Text color={"gray.500"}>{`${kiji.content.slice(
                0,
                200,
              )}...`}</Text>
              <HStack spacing={4} align={"center"}>
                <Tag size={"md"} colorScheme="red" borderRadius="full">
                  <TagLabel>{kiji.category}</TagLabel>
                </Tag>
              </HStack>
            </Stack>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default NewsList;
