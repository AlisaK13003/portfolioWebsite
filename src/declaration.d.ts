declare module 'react-router-hash-link' {
    import { LinkProps } from 'react-router-dom';
    import React from 'react';
  
    export const HashLink: React.FC<LinkProps & { smooth?: boolean }>;
    export default HashLink;
  }
  