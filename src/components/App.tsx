import React from 'react';
import { Flex } from '@chakra-ui/core';
import Header from 'components/Header';
import Container from 'components/Container';
import Footer from 'components/Footer';
import RepositoryReleasesComparator from 'components/RepositoryReleasesComparator';

function App() {
  return (
    <Flex height="100%" direction="column">
      <Header position="fixed" top="0" left="0" right="0" />
      <Container mb={4} mt={{ base: 20, md: 32 }} flex="1 0 auto">
        <RepositoryReleasesComparator githubOauthToken="123" />
      </Container>
      <Footer />
    </Flex>
  );
}

export default App;
