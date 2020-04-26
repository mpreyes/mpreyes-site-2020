import * as React from 'react';
import styled from 'styled-components';


const Dot = styled.div`
  &::before {
      content: "";
      position: absolute;
      top: -4px;
      left: -4px;

      width: 4px;
      height: 4px;
      background: transparent;

      box-shadow:4px 4px 0 transparent,
    8px 4px 0 transparent,
    12px 4px 0 transparent,
    16px 4px 0 transparent,
    20px 4px 0 transparent,
    24px 4px 0 transparent,
    28px 4px 0 transparent,
    32px 4px 0 transparent,
    36px 4px 0 transparent,
    40px 4px 0 transparent,
    44px 4px 0 transparent,
    48px 4px 0 transparent,
    52px 4px 0 transparent,
    56px 4px 0 transparent,
    60px 4px 0 transparent,
    64px 4px 0 transparent,
    4px 8px 0 transparent,
    8px 8px 0 transparent,
    12px 8px 0 transparent,
    16px 8px 0 transparent,
    20px 8px 0 transparent,
    24px 8px 0 transparent,
    28px 8px 0 transparent,
    32px 8px 0 transparent,
    36px 8px 0 transparent,
    40px 8px 0 transparent,
    44px 8px 0 transparent,
    48px 8px 0 transparent,
    52px 8px 0 transparent,
    56px 8px 0 transparent,
    60px 8px 0 transparent,
    64px 8px 0 transparent,
    4px 12px 0 transparent,
    8px 12px 0 transparent,
    12px 12px 0 transparent,
    16px 12px 0 transparent,
    20px 12px 0 transparent,
    24px 12px 0 transparent,
    28px 12px 0 transparent,
    32px 12px 0 transparent,
    36px 12px 0 transparent,
    40px 12px 0 transparent,
    44px 12px 0 transparent,
    48px 12px 0 transparent,
    52px 12px 0 transparent,
    56px 12px 0 transparent,
    60px 12px 0 transparent,
    64px 12px 0 transparent,
    4px 16px 0 transparent,
    8px 16px 0 transparent,
    12px 16px 0 transparent,
    16px 16px 0 transparent,
    20px 16px 0 transparent,
    24px 16px 0 transparent,
    28px 16px 0 transparent,
    32px 16px 0 transparent,
    36px 16px 0 transparent,
    40px 16px 0 transparent,
    44px 16px 0 transparent,
    48px 16px 0 transparent,
    52px 16px 0 transparent,
    56px 16px 0 transparent,
    60px 16px 0 transparent,
    64px 16px 0 transparent,
    4px 20px 0 transparent,
    8px 20px 0 transparent,
    12px 20px 0 transparent,
    16px 20px 0 transparent,
    20px 20px 0 transparent,
    24px 20px 0 transparent,
    28px 20px 0 transparent,
    32px 20px 0 transparent,
    36px 20px 0 transparent,
    40px 20px 0 transparent,
    44px 20px 0 transparent,
    48px 20px 0 transparent,
    52px 20px 0 transparent,
    56px 20px 0 transparent,
    60px 20px 0 transparent,
    64px 20px 0 transparent,
    4px 24px 0 transparent,
    8px 24px 0 transparent,
    12px 24px 0 transparent,
    16px 24px 0 transparent,
    20px 24px 0 transparent,
    24px 24px 0 transparent,
    28px 24px 0 transparent,
    32px 24px 0 transparent,
    36px 24px 0 transparent,
    40px 24px 0 transparent,
    44px 24px 0 transparent,
    48px 24px 0 transparent,
    52px 24px 0 transparent,
    56px 24px 0 transparent,
    60px 24px 0 transparent,
    64px 24px 0 transparent,
    4px 28px 0 transparent,
    8px 28px 0 transparent,
    12px 28px 0 transparent,
    16px 28px 0 rgb(72, 132, 218),
    20px 28px 0 transparent,
    24px 28px 0 transparent,
    28px 28px 0 transparent,
    32px 28px 0 rgb(72, 132, 218),
    36px 28px 0 rgb(223, 136, 227),
    40px 28px 0 rgb(223, 136, 227),
    44px 28px 0 rgb(106, 178, 88),
    48px 28px 0 rgb(106, 178, 88),
    52px 28px 0 rgb(106, 178, 88),
    56px 28px 0 transparent,
    60px 28px 0 transparent,
    64px 28px 0 transparent,
    4px 32px 0 transparent,
    8px 32px 0 transparent,
    12px 32px 0 transparent,
    16px 32px 0 rgb(72, 132, 218),
    20px 32px 0 rgb(72, 132, 218),
    24px 32px 0 transparent,
    28px 32px 0 rgb(72, 132, 218),
    32px 32px 0 rgb(72, 132, 218),
    36px 32px 0 transparent,
    40px 32px 0 rgb(223, 136, 227),
    44px 32px 0 rgb(106, 178, 88),
    48px 32px 0 transparent,
    52px 32px 0 rgb(106, 178, 88),
    56px 32px 0 transparent,
    60px 32px 0 transparent,
    64px 32px 0 transparent,
    4px 36px 0 transparent,
    8px 36px 0 transparent,
    12px 36px 0 transparent,
    16px 36px 0 rgb(72, 132, 218),
    20px 36px 0 transparent,
    24px 36px 0 rgb(72, 132, 218),
    28px 36px 0 transparent,
    32px 36px 0 rgb(97, 123, 213),
    36px 36px 0 rgb(223, 136, 227),
    40px 36px 0 rgb(223, 136, 227),
    44px 36px 0 rgb(106, 178, 88),
    48px 36px 0 rgb(106, 178, 88),
    52px 36px 0 rgb(106, 178, 88),
    56px 36px 0 transparent,
    60px 36px 0 transparent,
    64px 36px 0 transparent,
    4px 40px 0 transparent,
    8px 40px 0 transparent,
    12px 40px 0 transparent,
    16px 40px 0 rgb(72, 132, 218),
    20px 40px 0 transparent,
    24px 40px 0 transparent,
    28px 40px 0 transparent,
    32px 40px 0 rgb(223, 136, 227),
    36px 40px 0 transparent,
    40px 40px 0 transparent,
    44px 40px 0 rgb(106, 178, 88),
    48px 40px 0 rgb(108, 112, 113),
    52px 40px 0 transparent,
    56px 40px 0 transparent,
    60px 40px 0 transparent,
    64px 40px 0 transparent,
    4px 44px 0 transparent,
    8px 44px 0 transparent,
    12px 44px 0 transparent,
    16px 44px 0 rgb(72, 132, 218),
    20px 44px 0 transparent,
    24px 44px 0 transparent,
    28px 44px 0 transparent,
    32px 44px 0 rgb(223, 136, 227),
    36px 44px 0 transparent,
    40px 44px 0 transparent,
    44px 44px 0 rgb(106, 178, 88),
    48px 44px 0 transparent,
    52px 44px 0 rgb(108, 112, 113),
    56px 44px 0 transparent,
    60px 44px 0 transparent,
    64px 44px 0 transparent,
    4px 48px 0 transparent,
    8px 48px 0 transparent,
    12px 48px 0 transparent,
    16px 48px 0 rgb(72, 132, 218),
    20px 48px 0 transparent,
    24px 48px 0 transparent,
    28px 48px 0 transparent,
    32px 48px 0 rgb(223, 136, 227),
    36px 48px 0 transparent,
    40px 48px 0 transparent,
    44px 48px 0 rgb(106, 178, 88),
    48px 48px 0 transparent,
    52px 48px 0 transparent,
    56px 48px 0 rgb(108, 112, 113),
    60px 48px 0 transparent,
    64px 48px 0 transparent,
    4px 52px 0 transparent,
    8px 52px 0 transparent,
    12px 52px 0 transparent,
    16px 52px 0 transparent,
    20px 52px 0 transparent,
    24px 52px 0 transparent,
    28px 52px 0 transparent,
    32px 52px 0 transparent,
    36px 52px 0 transparent,
    40px 52px 0 transparent,
    44px 52px 0 transparent,
    48px 52px 0 transparent,
    52px 52px 0 transparent,
    56px 52px 0 transparent,
    60px 52px 0 transparent,
    64px 52px 0 transparent,
    4px 56px 0 transparent,
    8px 56px 0 transparent,
    12px 56px 0 transparent,
    16px 56px 0 transparent,
    20px 56px 0 transparent,
    24px 56px 0 transparent,
    28px 56px 0 transparent,
    32px 56px 0 transparent,
    36px 56px 0 transparent,
    40px 56px 0 transparent,
    44px 56px 0 transparent,
    48px 56px 0 transparent,
    52px 56px 0 transparent,
    56px 56px 0 transparent,
    60px 56px 0 transparent,
    64px 56px 0 transparent,
    4px 60px 0 transparent,
    8px 60px 0 transparent,
    12px 60px 0 transparent,
    16px 60px 0 transparent,
    20px 60px 0 transparent,
    24px 60px 0 transparent,
    28px 60px 0 transparent,
    32px 60px 0 transparent,
    36px 60px 0 transparent,
    40px 60px 0 transparent,
    44px 60px 0 transparent,
    48px 60px 0 transparent,
    52px 60px 0 transparent,
    56px 60px 0 transparent,
    60px 60px 0 transparent,
    64px 60px 0 transparent,
    4px 64px 0 transparent,
    8px 64px 0 transparent,
    12px 64px 0 transparent,
    16px 64px 0 transparent,
    20px 64px 0 transparent,
    24px 64px 0 transparent,
    28px 64px 0 transparent,
    32px 64px 0 transparent,
    36px 64px 0 transparent,
    40px 64px 0 transparent,
    44px 64px 0 transparent,
    48px 64px 0 transparent,
    52px 64px 0 transparent,
    56px 64px 0 transparent,
    60px 64px 0 transparent,
    64px 64px 0 transparent;
    }

`;

export const Bit8Icon: React.FunctionComponent = () => <Dot/>;
