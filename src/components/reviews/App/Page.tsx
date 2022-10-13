import { Devices } from '@/vibe-styles';
import { ReviewData } from '.';
import Stars from './Stars';


export default function Page({ data }: { data: ReviewData | null }) {
  if (!data) {
    return null;
  }

  return (
    <S.Component>
      {data.reviews.data.map((r) => (
        <>
          <S.Review key={r.product_review_id}>
            <S.Left>
              <div>
                <S.Author>
                  {r.reviewer.first_name} {r.reviewer.last_name}
                </S.Author>
                {r.reviewer.verified_buyer === 'yes' ? (
                  <S.Verified>Verified buyer</S.Verified>
                ) : null}
              </div>
              <div className="timeago">{r.timeago}</div>
            </S.Left>
            <S.Center>
              <Stars rating={r.rating} />
              {r.title ? <S.Title>{r.title}</S.Title> : null}
              <S.Content>{r.review.trim()}</S.Content>
            </S.Center>
            <S.Right>{r.timeago}</S.Right>
          </S.Review>
          <hr />
        </>
      ))}
    </S.Component>
  );
}

const S = {
  Component: styled.div`
    margin-top: 40px;
    hr {
      height: 1px;
      background: #e0e0e0;
      margin: 40px 0;
      &:last-child {
        background: #111111;
        margin-bottom: 0;
      }
    }
  `,
  Review: styled.div`
    display: flex;
    gap: 32px;
    @media ${Devices.mobile} {
      display: block;
    }
  `,
  Left: styled.div`
    width: 120px;
    .timeago {
      display: none;
    }
    @media ${Devices.desktop} {
      width: 230px;
    }
    @media ${Devices.mobile} {
      width: auto;
      display: flex;
      justify-content: space-between;
      .timeago {
        display: block;
      }
    }
  `,
  Center: styled.div`
    flex: 1;
    @media ${Devices.mobile} {
      padding-top: 24px;
    }
  `,
  Right: styled.div`
    @media ${Devices.mobile} {
      display: none;
    }
  `,
  Author: styled.div`
    font-size: 18px;
    font-weight: bold;
  `,
  Verified: styled.div``,
  Title: styled.div`
    font-size: 20px;
    font-weight: bold;
  `,
  Content: styled.div`
    margin-top: 16px;
    max-width: 708px;
    white-space: pre-wrap;
  `,
};
