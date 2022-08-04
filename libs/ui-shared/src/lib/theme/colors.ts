export type Colors = {
  purple1: string;
  purple2: string;
  purple3: string;
  purple4: string;
  purple5: string;
  purple6: string;
  purple7: string;
  purple8: string;
  purple9: string;
  purple10: string;
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;
  green10: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
  red9: string;
  red10: string;
  orange1: string;
  orange2: string;
  orange3: string;
  orange4: string;
  orange5: string;
  orange6: string;
  orange7: string;
  orange8: string;
  orange9: string;
  orange10: string;
  shade1: string;
  shade2: string;
  shade3: string;
  shade4: string;
  shade5: string;
  shade6: string;
  shade7: string;
  shade8: string;
  shade9: string;
  shade10: string;
  base: string;
  baseContrast: string;
  body: string;
  transparent: string;
  white: string;
};

const purpleColors = {
  purple1: '#e2ddea',
  purple2: '#c5bbd4',
  purple3: '#a898bf',
  purple4: '#8b76a9',
  purple5: '#6e5494',
  purple6: '#584376',
  purple7: '#423259',
  purple8: '#2c223b',
  purple9: '#16111e',
  purple10: '#0b080f',
};

const greenColors = {
  green1: '#e2f4da',
  green2: '#c4e8b4',
  green3: '#a7dd8f',
  green4: '#89d169',
  green5: '#6cc644',
  green6: '#569e36',
  green7: '#417729',
  green8: '#2b4f1b',
  green9: '#16280e',
  green10: '#0b1407',
};

const redColors = {
  red1: '#FFF1F0',
  red2: '#FFCCC7',
  red3: '#FFA39E',
  red4: '#FF7875',
  red5: '#E2624C',
  red6: '#F5222D',
  red7: '#CF1322',
  red8: '#A8071A',
  red9: '#820014',
  red10: '#5C0011',
};

const orangeColors = {
  orange1: '#FFF7E6',
  orange2: '#FFE7BA',
  orange3: '#FFD591',
  orange4: '#FFC069',
  orange5: '#FFA940',
  orange6: '#FA8C16',
  orange7: '#D46B08',
  orange8: '#AD4E00',
  orange9: '#873800',
  orange10: '#612500',
};

const shadeColors = {
  shade1: '#e9e9e9',
  shade2: '#d3d3d3',
  shade3: '#bebdbd',
  shade4: '#a8a7a7',
  shade5: '#929291',
  shade6: '#7c7c7a',
  shade7: '#666664',
  shade8: '#51504e',
  shade9: '#3b3a38',
  shade10: '#252422',
};

export const colors: Colors = {
  ...purpleColors,
  ...greenColors,
  ...redColors,
  ...orangeColors,
  ...shadeColors,
  transparent: 'transparent',
  white: '#fff',
  base: '#252422',
  baseContrast: '#252422',
  body: '#252422',
};
