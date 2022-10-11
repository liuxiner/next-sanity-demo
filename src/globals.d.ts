import styled from 'styled-components';

type NavCart = {
  setActive: (visible: boolean) => void;
  addBundleToCart: (bundleId: string, quantity: number) => Promise<void>;
};

declare global {
  const styled: styled;
  const affirm: any;
  const Extend: any;
  const ExtendShopify: any;
  const dataLayer: any[] | undefined;
  const HubSpotConversations: any;
  const Glide: any;
  const Swiper: any;

  const navCart: Promise<NavCart>;
}
