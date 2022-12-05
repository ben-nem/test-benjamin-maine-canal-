import * as React from 'react';

import UnstyledLink, { UnstyledLinkProps } from '@/ui/links/UnstyledLink';

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, ...rest }, ref) => {
    return (
      <UnstyledLink ref={ref} {...rest}>
        {children}
      </UnstyledLink>
    );
  }
);

export default UnderlineLink;
