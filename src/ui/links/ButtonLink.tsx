import * as React from 'react';

import UnstyledLink, { UnstyledLinkProps } from '@/ui/links/UnstyledLink';

enum ButtonVariant {
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
}

type ButtonLinkProps = {
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ children, ...rest }, ref) => {
    return (
      <UnstyledLink ref={ref} {...rest}>
        {children}
      </UnstyledLink>
    );
  }
);

export default ButtonLink;
