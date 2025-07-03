import React from 'react';

import * as S from './styles';

import { ShadowDom } from '@/packages/ui/shadow-dom';

export function Google(): React.ReactElement | null {
  const [parentElement] = React.useState(() => document.querySelector('body'));

  return parentElement ? (
    <ShadowDom parentElement={parentElement}>
      <S.Container>Hello Dev 👋,</S.Container>
    </ShadowDom>
  ) : null;
}
