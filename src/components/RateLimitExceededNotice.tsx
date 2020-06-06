import { Flex, Heading } from '@chakra-ui/core';
import React from 'react';

import GitHubLoginButton from '~/components/GitHubLoginButton';
import Link from '~/components/Link';

interface Props {
  waitingMinutes?: number;
  isAuth?: boolean;
}

const RateLimitExceededNotice: React.FC<Props> = ({
  waitingMinutes,
  isAuth = false,
}) => (
  <Flex justify="center">
    <Flex
      p={5}
      shadow={{ base: 'none', md: 'md' }}
      borderWidth={{ base: 'none', md: '1px' }}
      width={{ base: 'full', md: 600 }}
      direction="column"
      justify="center"
    >
      <Heading fontSize="md" textAlign="center" mb={4}>
        Octoclairvoyant has exceed the{' '}
        <Link href="https://developer.github.com/v3/#rate-limiting" isExternal>
          GitHub API hourly limit
        </Link>{' '}
        for {isAuth ? 'authenticated' : 'unauthenticated'} requests. You need to
        wait {waitingMinutes || 'some'} minutes or{' '}
        {isAuth
          ? 'renew your existing token'
          : 'create a token for extending this limit'}
        .
      </Heading>
      <Flex justify="center">
        <GitHubLoginButton children="Auth with GitHub" />
      </Flex>
    </Flex>
  </Flex>
);

export default RateLimitExceededNotice;