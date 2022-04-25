import React from 'react';
import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Divider,
  Link,
  Flex,
} from '@chakra-ui/react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaTelegram,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <Box>
        <Container maxWidth="100%">
          <Grid
            templateColumns={{
              sm: 'repeat(1, 1fr)',
              md: 'repeat(1, 1fr)',
              lg: 'repeat(1, 1fr)',
              xl: 'repeat(2, 1fr)',
              base: 'repeat(1, 1fr)',
            }}
            width="100%"
            height="auto"
          >
            <Box width="100%" p="0" m="0">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1250.8078308306103!2d71.43371265819783!3d51.170874676640935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d51.170873!2d71.43480699999999!5e0!3m2!1sen!2skz!4v1650778038937!5m2!1sen!2skz"
                  width="800px"
                  height="800px"
                  allowfullscreen=""
                  title="Google Map"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </AspectRatio>
            </Box>
            <Box w="100%" p="40px">
              <Heading py="10px" display="flex" pos="inline">
                <FaPhoneAlt />
                <Text ml="2">Телефон</Text>
              </Heading>
              <Box>
                <Link href="tel:+7(7172) 200 937 " fontSize="20px">
                  +7(7172) 200 937
                </Link>
              </Box>
              <Box>
                <Link to="tel:+7(7172) 280 771" fontSize="20px">
                  +7(7172) 280 771
                </Link>
              </Box>
              <Box>
                <Link to="tel:+7(700) 770 04 67" fontSize="20px">
                  +7(700) 770 04 67
                </Link>
              </Box>
              <Heading py="10px" display="flex" pos="inline">
                <FaEnvelope mr="4" />
                <Text ml="2">Почта</Text>
              </Heading>
              <Link href="email:info@nts.kz" fontSize="20px">
                info@nts.kz
              </Link>
              <Heading py="10px" display="flex" pos="inline">
                <FaMapMarkerAlt />
                <Text ml="2">Адрес</Text>
              </Heading>
              <Text fontSize="20px">
                Республика Казахстан, Нур-Султан, район Байконыр, улица Жакып
                Омаров, дом 100, ВП-2.
              </Text>
              <Flex mt="5" display="flex" pos="inline">
                <Link mr="4">
                  <FaWhatsapp fontSize="35px" />
                </Link>
                <Link mr="4">
                  <FaTelegram fontSize="35px" />
                </Link>
                <Link mr="4">
                  <FaInstagram fontSize="35px" />
                </Link>
                <Link>
                  <FaYoutube fontSize="35px" />
                </Link>
              </Flex>
            </Box>
          </Grid>
          <Divider my="10" />
          <Text my="8" textAlign="center" fontSize="20px">
            © 2022 NTS Design. Все права защищены
          </Text>
        </Container>
      </Box>
    </>
  );
}
