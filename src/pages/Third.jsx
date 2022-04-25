import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import bgimage from '../assets/third.jpg';

export default function Third() {
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage={bgimage}
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}
              >
                ТЕХНОЛОГИИ
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}
              >
                ЭЛЕКТРОНИКА 21 ВЕКА
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                Современная казахстанская научно-производственная компания по
                разработке и производству технических средств в сфере
                безопасности. В составе компании имеется собственная
                опытно-конструкторская лаборатория, автоматизированная
                производственная линия и участок технического обслуживания и
                ремонта. Для осуществления деятельности компания имеет лицензию
                на разработку, производство, ремонт и реализацию СТС для
                проведения оперативно-розыскных мероприятий.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map(stat => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: '10+',
    content: (
      <>
        <StatsText>Программные модули</StatsText> для детального мониторинга и
        аналитики в режиме реального времени
      </>
    ),
  },
  {
    title: '24/7',
    content: (
      <>
        <StatsText>Аналитика</StatsText> включена прямо на вашей панели
        мониторинга без ограничения истории
      </>
    ),
  },
  {
    title: '90%',
    content: (
      <>
        <StatsText>Государственные</StatsText> компании выбрали NTS Design™ в
        качестве своего безопасностного решения.
      </>
    ),
  },
  {
    title: '250K+',
    content: (
      <>
        <StatsText>Плат</StatsText> вышли на рынок с наших производственных
        линий
      </>
    ),
  },
];
