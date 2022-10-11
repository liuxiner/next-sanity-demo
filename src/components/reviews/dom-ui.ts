import { Styles } from 'src/vibe-styles';

export function applyReviewStars() {
  document.querySelectorAll('.reviews-rating-stars').forEach((e) => {
    const el = e as HTMLElement;
    const rating = el.dataset.rating;
    if (!rating) {
      return;
    }

    const stars = getStarsElement(rating, Styles.vibeBlue);

    const text = document.createElement('span');
    text.classList.add('is-rating');
    text.innerText = rating;

    el.appendChild(stars);
    el.appendChild(text);
  });
}

function getStarsElement(rating: string, color: string) {
  const stars = document.createElement('span');
  stars.classList.add('is-stars');

  const value = Math.max(0, Math.min(5, parseFloat(rating)));
  const filledCount = Math.trunc(value);
  const partialLevel = Math.trunc((value - filledCount) * 10);

  for (let i = 0; i < 5; i++) {
    if (i < filledCount) {
      stars.appendChild(getStarElement(10, color));
    } else if (i === filledCount) {
      stars.appendChild(getStarElement(partialLevel, color));
    } else {
      stars.appendChild(getStarElement(0, color));
    }
  }

  return stars;
}

// level: 0-10. 0 means empty, 10 mean full.
export function getStarSvg(level: number, color: string) {
  return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_225_23)"><path d="M7.99992 1.3335L10.0599 5.50683L14.6666 6.18016L11.3333 9.42683L12.1199 14.0135L7.99992 11.8468L3.87992 14.0135L4.66659 9.42683L1.33325 6.18016L5.93992 5.50683L7.99992 1.3335Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><mask id="mask0_225_23" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14"><path d="M7.99992 1.3335L10.0599 5.50683L14.6666 6.18016L11.3333 9.42683L12.1199 14.0135L7.99992 11.8468L3.87992 14.0135L4.66659 9.42683L1.33325 6.18016L5.93992 5.50683L7.99992 1.3335Z" fill="black"/></mask><g mask="url(#mask0_225_23)"><rect x="3" y="3" width="${level}" height="10" fill="${color}"/></g></g><defs><clipPath id="clip0_225_23"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>`;
}

function getStarElement(level: number, color: string): SVGElement {
  const template = document.createElement('template');
  template.innerHTML = getStarSvg(level, color);
  return template.content.firstChild as SVGElement;
}
