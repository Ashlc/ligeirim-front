const baseUrl = './assets/fonts/';
const variants = [
  'Black',
  'Bold',
  'ExtraBold',
  'ExtraLight',
  'Light',
  'Medium',
  'Regular',
  'SemiBold',
] as const;

export const fontPaths = variants.flatMap((variant) => [
  `${baseUrl}${variant}.ttf`,
  `${baseUrl}${variant}Italic.ttf`,
]);
