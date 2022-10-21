import {
  Box, Button, chakra, Divider, Stack, Text
} from '@chakra-ui/react'
import { AdBanner } from 'components/chakra-pro/ad-banner'
import Container from 'components/container'
import { Footer } from 'components/footer'
import Header from 'components/header'
import SEO from 'components/seo'
import NextLink from 'next/link'
import * as React from 'react'
import { DiGithubBadge } from 'react-icons/di'
import { FaArrowRight } from 'react-icons/fa'
import { t } from 'utils/i18n'

const HomePage = () => {
  return (
    <>
      <SEO
        title={t('homepage.seo.title')}
        description={t('homepage.seo.description')}
      />
      <AdBanner />
      <Header />
      <Box mb={10}>
        <Box as='section' pt='6rem' pb={{ base: '0' }}>
          <Container>
            <Box textAlign='center'>
              <chakra.h1
                maxW='16ch'
                mx='auto'
                fontSize={{ base: '2.25rem', sm: '3rem', lg: '4rem' }}
                fontFamily='heading'
                letterSpacing='tighter'
                fontWeight='extrabold'
                mb='16px'
                lineHeight='1.2'
              >
                {t('homepage.title.main')}
                <Box as='span' color='teal.500' _dark={{ color: 'teal.300' }}>
                  {' '}
                  {t('homepage.title.highlighted')}
                </Box>
              </chakra.h1>

              <Text
                maxW='560px'
                mx='auto'
                color='gray.500'
                _dark={{ color: 'gray.400' }}
                fontSize={{ base: 'lg', lg: 'xl' }}
                mt='6'
              >
                {t('homepage.message')}
              </Text>

              <Stack
                mt='10'
                spacing='4'
                justify='center'
                direction={{ base: 'column', sm: 'row' }}
              >
                <NextLink href='/getting-started' passHref>
                  <Button
                    h='4rem'
                    px='40px'
                    fontSize='1.2rem'
                    as='a'
                    size='lg'
                    colorScheme='teal'
                    rightIcon={<FaArrowRight fontSize='0.8em' />}
                  >
                    {t('homepage.get-started')}
                  </Button>
                </NextLink>
                <Button
                  as='a'
                  size='lg'
                  h='4rem'
                  px='40px'
                  fontSize='1.2rem'
                  href='https://github.com/siirtotyolaiset/stlt-cdk/'
                  target='__blank'
                  leftIcon={<DiGithubBadge size='1.5em' />}
                >
                  GitHub
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>

        <Divider />

        <Footer />
      </Box>
    </>
  )
}

export default HomePage
