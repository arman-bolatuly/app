import React from 'react';
import {
  Box,
  Image,
  Container,
  Heading,
  Grid,
  Divider,
} from '@chakra-ui/react';
import newicon1 from '../assets/new-icon1.png';
import newicon2 from '../assets/design2.png';
import newicon3 from '../assets/new-icon2.png';

export default function Second() {
  return (
    <>
      <Box mt="10" mb="10">
        <Container maxWidth="container.xl">
          <Heading
            as="h3"
            size="lg"
            textAlign="center"
            my="14"
            _hover={{ transition: '1s', color: 'green' }}
          >
            НАШИ ВОЗМОЖНОСТИ
          </Heading>

          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <Box
              p="15px"
              width="100%"
              align="center"
              _hover={{ transition: '1s', color: 'green' }}
            >
              <Box d="flex" alignItems="center">
                <Image
                  position="relative"
                  w="100px"
                  src={newicon1}
                  alt="brand"
                  mr="15px"
                />
                <Heading
                  alignItems="center"
                  as="h6"
                  fontWeight="black"
                  size="md"
                >
                  Собственный инженерный штат и опытно-конструкторская
                  лаборатория
                </Heading>
              </Box>
              <Divider my="3" mb="2" />
            </Box>

            <Box
              p="15px"
              width="100%"
              align="center"
              _hover={{ transition: '1s', color: 'green' }}
            >
              <Box d="flex" alignItems="center">
                <Image
                  position="relative"
                  w="250px"
                  src={newicon2}
                  alt="brand"
                  mr="15px"
                />
                <Heading
                  alignItems="center"
                  as="h6"
                  fontWeight="black"
                  size="md"
                >
                  Разработка технических решений под индивидуальные потребности
                  заказчика
                </Heading>
              </Box>
              <Divider my="3" mb="2" />
            </Box>

            <Box
              p="15px"
              width="100%"
              align="center"
              _hover={{ transition: '1s', color: 'green' }}
            >
              <Box d="flex" alignItems="center">
                <Image
                  position="relative"
                  w="125px"
                  src={newicon3}
                  alt="brand"
                  mr="15px"
                />
                <Heading
                  alignItems="center"
                  as="h6"
                  fontWeight="black"
                  size="md"
                  pb="6"
                >
                  Локализация производства на территории РК
                </Heading>
              </Box>
              <Divider my="3" mb="2" />
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
