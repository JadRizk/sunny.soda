export type Colors = {
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
  yellow9: string;
  yellow10: string;
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
  header: string;
  transparent: string;
  white: string;
};

const yellowColors = {
  yellow1: '#fef5d7',
  yellow2: '#feebaf',
  yellow3: '#fde288',
  yellow4: '#fdd860',
  yellow5: '#fcce38',
  yellow6: '#caa52d',
  yellow7: '#977c22',
  yellow8: '#655216',
  yellow9: '#32290b',
  yellow10: '#191506',
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
  shade1: '#d5e0ed',
  shade2: '#b9c8db',
  shade3: '#9eb3c8',
  shade4: '#879eb5',
  shade5: '#7089a2',
  shade6: '#5e7891',
  shade7: '#4e6781',
  shade8: '#3e5770',
  shade9: '#314961',
  shade10: '#263e54',
};

export const colors: Colors = {
  ...yellowColors,
  ...redColors,
  ...orangeColors,
  ...shadeColors,
  transparent: 'transparent',
  white: '#fff',
  base: '#223348',
  baseContrast: '#263E54',
  body: '#EBF4FF',
  header: '#F5F9FF',
};
