export const Styles = {
  vibeBlue: '#463ff4',
  vibePink: '#ff6666',
  vibePurple: '#6666cc',
  vibeYellow: '#ffcc00',
};

// Keep same breakpoints as website settings.
export const Devices = {
  mobile: '(max-width: 700px)',
  touch: '(max-width: 1023px)',
  tablet: '(min-width: 701px)',
  desktop: '(min-width: 1024px)',
  fullhd: '(min-width: 1440px)',
  untilFullhd: '(max-width: 1439px)',
  from: (width: number) => `(min-width: ${width}px)`,
  until: (width: number) => `(max-width: ${width}px)`,
};
