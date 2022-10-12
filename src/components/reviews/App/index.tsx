// @ts-nocheck
import IconLoading from './assets/loading.svg';
import IconPrev from './assets/chevron-left.svg';
import IconNext from './assets/chevron-right.svg';
import { Styles } from '@/vibe-styles';
import ReactDOM from 'react-dom';
import { styled } from 'types';
import Page from './Page';
import Stars from './Stars';

import { useCallback, useEffect, useRef, useState } from 'react';

export type ReviewData = {
  stats: {
    average: string;
    count: number;
  };
  reviews: {
    data: [
      {
        product_review_id: number;
        images: [
          {
            image: string;
          }
        ];
        rating: number;
        review: string;
        reviewer: {
          address: string;
          first_name: string;
          last_name: string;
          verified_buyer: string;
        };
        date_created: string;
        timeago: string;
        title: string | null;
        votes: number;
      }
    ];
    current_page: number;
    last_page: number;
    from: number;
    to: number;
    total: number;
  };
};

function App({ sku }: { sku: string }) {
  const [loading, setLoading] = useState(false);
  const [pageData, setPageData] = useState<ReviewData | null>(null);
  const anchor = useRef<HTMLElement>();

  const onLoadPage = useCallback(
    async (page: number) => {
      setLoading(true);
      try {
        const resp = await fetch(
          `https://api.reviews.io/product/review?store=vibe-us&sku=${sku}&page=${page}`
        );
        if (resp.ok) {
          const data = await resp.json();
          if (data.stats) {
            setPageData(data);
          }
        }
      } finally {
        setLoading(false);
      }
    },
    [sku]
  );

  const onPageClick = useCallback(
    (page: number) => {
      onLoadPage(page);
    },
    [onLoadPage]
  );

  useEffect(() => {
    onLoadPage(1);
  }, [onLoadPage]);

  return (
    <S.Component>
      <S.Anchor ref={anchor}></S.Anchor>
      <S.Title className="has-bold-heading-font">
        <span>Customer reviews</span>
        {loading ? (
          <span dangerouslySetInnerHTML={{ __html: IconLoading }} />
        ) : null}
      </S.Title>
      <Overall data={pageData} />
      <Page data={pageData} />
      <PageNavigator data={pageData} onPageClick={onPageClick} />
    </S.Component>
  );
}

function Overall({ data }: { data: ReviewData | null }) {
  if (!data || !data.stats) {
    return <S.Overall>Failed to load reviews.</S.Overall>;
  }

  return (
    <S.Overall>
      <S.AverageRating className="has-bold-heading-font">
        {data.stats.average ? parseFloat(data.stats.average).toFixed(1) : '-'}
      </S.AverageRating>
      <S.AverageStars>
        <Stars rating={parseFloat(data.stats.average)} />
        <div>Based on {data.stats.count} reviews</div>
      </S.AverageStars>
    </S.Overall>
  );
}

function PageNavigator({
  data,
  onPageClick,
}: {
  data: ReviewData | null;
  onPageClick: (page: number) => void;
}) {
  const onPrevClick = useCallback(() => {
    if (!data) {
      return;
    }

    if (data.reviews.current_page > 1) {
      onPageClick(data.reviews.current_page - 1);
    }
  }, [data, onPageClick]);

  const onNextClick = useCallback(() => {
    if (!data) {
      return;
    }

    if (data.reviews.current_page < data.reviews.last_page) {
      onPageClick(data.reviews.current_page + 1);
    }
  }, [data, onPageClick]);

  if (!data || data.reviews.last_page === 1) {
    return null;
  }

  const pages = [] as any;
  for (let page = 1; page <= data.reviews.last_page; page++) {
    const p = (
      <span
        className={`page-item ${
          page === data.reviews.current_page ? 'is-active' : ''
        }`}
        onClick={() => onPageClick(page)}
      >
        {page}
      </span>
    );
    pages.push(p);
  }

  return (
    <S.PageNavigator>
      <span
        className={`page-item ${
          data.reviews.current_page === 1 ? 'is-disabled' : ''
        }`}
        onClick={onPrevClick}
        dangerouslySetInnerHTML={{ __html: IconPrev }}
      />
      {pages}
      <span
        className={`page-item ${
          data.reviews.current_page === data.reviews.last_page
            ? 'is-disabled'
            : ''
        }`}
        onClick={onNextClick}
        dangerouslySetInnerHTML={{ __html: IconNext }}
      />
    </S.PageNavigator>
  );
}

const S = {
  Component: styled.div`
    position: relative;
    font-size: 16px;
  `,
  Anchor: styled.div`
    position: absolute;
    top: -160px;
  `,
  Title: styled.div`
    font-size: 24px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  `,
  Overall: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #111111;
  `,
  AverageRating: styled.div`
    font-size: 48px;
  `,
  AverageStars: styled.div`
    .review-stars {
      display: flex;
      gap: 2px;
    }
  `,
  PageNavigator: styled.div`
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-top: 20px;
    .page-item {
      cursor: pointer;
      padding: 8px 16px;
      &:hover {
        color: ${Styles.vibePurple};
      }
      &.is-active {
        font-weight: bold;
      }
      &.is-disabled {
        svg {
          fill: #e0e0e0;
        }
      }
    }
  `,
};

export function renderApp({ sku }: { sku: string }) {
  const root = document.getElementById('reviews-app');
  if (!root) {
    return Promise.reject('Cannot find root element.');
  }

  ReactDOM.render(<App sku={sku} />, root);
}
