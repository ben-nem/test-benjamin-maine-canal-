import { chakra, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/ui/layout/Layout';
import ArrowLink from '@/ui/links/ArrowLink';
import Seo from '@/ui/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <chakra.section bg='white'>
          <Stack
            minHeight='100vh'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
          >
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              Back to Home
            </ArrowLink>
          </Stack>
        </chakra.section>
      </main>
    </Layout>
  );
}
