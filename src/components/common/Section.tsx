import React from 'react';
import { FC } from 'react';


export const Section: FC = (props: any) => {
  const { children } = props;

  return (
    <S.Section className={props.className}>
      <S.Container>
        {children}
      </S.Container>
    </S.Section>
  );
};

import { Devices } from '@/vibe-styles';
const S = {
  Section: styled.div`
    
  `,
  Container: styled.div`
    margin: 0 auto;
    @media ${Devices.mobile} {
      max-width: 327px;
    }
    @media ${Devices.desktop} {
      max-width: 972px;
    }
  `
};

