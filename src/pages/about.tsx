import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
} from '@chakra-ui/core'
import styled from '@emotion/styled'
import NextLink from 'next/link'

import Container from '~/components/Container'
import Layout from '~/components/Layout'
import LazyImage from '~/components/LazyImage'
import Link from '~/components/Link'
import customTheme from '~/customTheme'
import { APP_MOTTO } from '~/global'
import useIsClientSide from '~/hooks/useIsClientSide'
import useWindowWidth from '~/hooks/useWindowWidth'

const DESKTOP_BREAKPOINT = 992

const FeaturesHeading = styled(Heading)`
  scroll-margin-top: 6rem;
`

const MainSection = () => {
  const windowWidth = useWindowWidth()
  const isDesktop = windowWidth >= DESKTOP_BREAKPOINT

  return (
    <Flex alignItems="center" direction={isDesktop ? 'row' : 'column-reverse'}>
      <Stack
        alignItems={{ base: 'center', lg: 'start' }}
        spacing={{ base: 4, lg: 8 }}
        flexGrow={1}
        flexBasis={0}
        shouldWrapChildren
      >
        <Heading
          as="h1"
          color={isDesktop ? 'gray.50' : 'gray.700'}
          fontSize="4xl"
          textAlign={{ base: 'center', lg: 'left' }}
        >
          {APP_MOTTO}
        </Heading>
        <Flex justify="center" align="center">
          <NextLink href="/">
            <Button bg="gray.700" color="white" _hover={{ bg: 'gray.900' }}>
              Check it out!
            </Button>
          </NextLink>
          <Link href="#features" ml={4} color="gray.700">
            Read more
          </Link>
        </Flex>
      </Stack>
      <LazyImage
        src="/mascot-logo.png"
        loadingSrc="data:image/png;base64,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"
        alt="Octoclairvoyant reading a crystal ball"
        width={600}
        height={600}
        quality={100}
      />
    </Flex>
  )
}

const IndexPage = () => {
  const isClientSide = useIsClientSide()

  return (
    <Layout isHeaderFixed>
      <Box
        mt={-8}
        py={{ base: 8, lg: 16 }}
        minHeight="100vh"
        bgImage={`linear-gradient(180deg, ${customTheme.colors.primary[700]} 0%, ${customTheme.colors.white} 100%)`}
      >
        <Container>{isClientSide && <MainSection />}</Container>
      </Box>

      <Box>
        <Container
          transition="opacity 500ms linear"
          opacity={isClientSide ? 1 : 0}
        >
          <Stack
            spacing={8}
            alignItems="center"
            py={{ base: 8, lg: 16 }}
            direction="column"
          >
            <Box>
              <FeaturesHeading
                as="h2"
                fontSize="3xl"
                mb={{ base: 4, lg: 8 }}
                color="primary.500"
                id="features"
              >
                Main Features
              </FeaturesHeading>
              <List spacing={{ base: 4, lg: 8 }}>
                <ListItem>
                  <ListIcon icon="check-circle" color="secondary.500" />
                  Filter by range of versions
                </ListItem>
                <ListItem>
                  <ListIcon icon="check-circle" color="secondary.500" />
                  Group changes by normalized categories (e.g. put "bug fixes"
                  and "minor" under the same group)
                </ListItem>
                <ListItem>
                  <ListIcon icon="check-circle" color="secondary.500" />
                  Sort and prioritize by different level of changes for{' '}
                  <Link href="https://semver.org/">Semantic Versioning</Link>
                </ListItem>
                <ListItem>
                  <ListIcon icon="check-circle" color="secondary.500" />
                  Highlight code blocks syntax and GitHub references
                </ListItem>
                <ListItem>
                  <ListIcon icon="check-circle" color="secondary.500" />
                  Spot original version where specific changes were introduced
                </ListItem>
              </List>
            </Box>
            <Box px={{ base: 0, lg: 16 }}>
              <Box shadow="lg">
                <video autoPlay loop muted playsInline>
                  <source
                    src="/octoclairvoyant-preview.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://i.imgur.com/kVBlLCL.mp4"
                    type="video/mp4"
                  />
                </video>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Layout>
  )
}

export default IndexPage
