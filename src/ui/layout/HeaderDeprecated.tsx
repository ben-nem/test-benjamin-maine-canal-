import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import logo from '/favicon/safari-pinned-tab.svg';

interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const HeaderDeprecated = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <div className='wrapper'>
      <div className='flex flex-row gap-2'>
        <Image alt='Picture of the author' src={logo} width={32} height={32} />
        {user ? (
          <Button onClick={onLogout} variant='secondary'>
            Log out
          </Button>
        ) : (
          <div className='flex gap-2'>
            <Button onClick={onLogin}>Log in</Button>
            <Button onClick={onCreateAccount}>Sign up</Button>
          </div>
        )}
      </div>
    </div>
  </header>
);
