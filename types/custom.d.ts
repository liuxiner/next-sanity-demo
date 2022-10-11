
declare type ProductVariant = {
  variantId: string;
  title: string;
  snowplowName: string;
  staticPrice: number;
};

declare type Bundle = {
  bundleId: string;
  title: string;
  imgSrc: string;
  variantIds: string[];
  compare?: {
    price: number;
    style: string;
    save?: number; // save value
  };
  amazonUrl?: string;
};

declare type Metadata = {
  variants: ProductVariant[];
  bundles: Bundle[];
};
