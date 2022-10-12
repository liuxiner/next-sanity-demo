import { Styles } from '@/vibe-styles';
import { getStarSvg } from '../dom-ui';
import { useMemo } from 'react';

export default function Stars({ rating }: { rating: number }) {
  const stars = useMemo(() => {
    const result = [] as any;

    const value = Math.max(0, Math.min(5, rating));
    const filledCount = Math.trunc(value);
    const partialLevel = Math.trunc((value - filledCount) * 10);

    for (let i = 0; i < 5; i++) {
      if (i < filledCount) {
        result.push(
          <span
            dangerouslySetInnerHTML={{
              __html: getStarSvg(10, Styles.vibeYellow),
            }}
          />
        );
      } else if (i === filledCount) {
        result.push(
          <span
            dangerouslySetInnerHTML={{
              __html: getStarSvg(partialLevel, Styles.vibeYellow),
            }}
          />
        );
      } else {
        result.push(
          <span
            dangerouslySetInnerHTML={{
              __html: getStarSvg(0, Styles.vibeYellow),
            }}
          />
        );
      }
    }

    return result;
  }, [rating]);

  return <S.Component>{stars}</S.Component>;
}

const S = {
  Component: styled.span`
    display: flex;
    gap: 2px;
  `,
};
