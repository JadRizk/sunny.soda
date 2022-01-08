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
  sand1: string;
  sand2: string;
  sand3: string;
  sand4: string;
  sand5: string;
  sand6: string;
  sand7: string;
  sand8: string;
  sand9: string;
  sand10: string;
  white: string;
  transparent: string;
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

const sandColors = {
  sand1: '#EEEEEC',
  sand2: '#DDDCD9',
  sand3: '#CCCBC5',
  sand4: '#BBB9B2',
  sand5: '#AAA89F',
  sand6: '#969385',
  sand7: '#858274',
  sand8: '#737061',
  sand9: '#504D42',
  sand10: '#121212',
};

export const colors: Colors = {
  ...yellowColors,
  ...redColors,
  ...orangeColors,
  ...sandColors,
  transparent: 'transparent',
  white: '#fff',
};
