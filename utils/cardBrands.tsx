import { Image } from 'react-native';
import {
  Itau,
  Jcb,
  Maestro,
  Mastercard,
  Pagseguro,
  Paypal,
  Rede,
  Sage,
  Santander,
  Shopify,
  Skrill,
  SkrillMoneybookers,
  Solo,
  Stone,
  Visa,
  VisaElectron,
  Wallet,
  Western,
  Worldpay,
} from '../components/brands';

export const cardBrands = {
  mastercard: Mastercard,
  itau: Itau,
  jcb: Jcb,
  maestro: Maestro,
  pagseguro: Pagseguro,
  paypal: Paypal,
  rede: Rede,
  sage: Sage,
  santander: Santander,
  shopify: Shopify,
  skrill: Skrill,
  skrillMoneybookers: SkrillMoneybookers,
  solo: Solo,
  stone: Stone,
  visa: Visa,
  visaElectron: VisaElectron,
  wallet: Wallet,
  western: Western,
  worldpay: Worldpay,
};

export const getCardBrand = (brand: string) => {
  return (
    <Image source={cardBrands[brand as keyof typeof cardBrands]} alt={brand} className="w-8" />
  );
};
