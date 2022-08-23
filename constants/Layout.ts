import { Dimensions, StatusBar } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const scaling = Dimensions.get('window').scale;
const fontScaling = Dimensions.get('window').fontScale;
const defaultMargin = 25;
const defaultCardHeight = 80;
const appPaddingTop = StatusBar.currentHeight || 0;

const layout = {

  window: {
    width,
    height,
    widthInPx: `${width}px`,
    heightInPx: `${height}px`,
  },
  appPaddingTopInPx: `${appPaddingTop}px`,
  heightInPx: `${height}px`,
  headerHeight: "50px",
  tinyPadding: "15px",
  extraSmallPadding: "10px",
  smallPadding: "30px",
  largePadding: "50px",
  smallBorderRadius: "10px",
  largeBorderRadius: "40px",
  fullBorderRadius: "3000px",

  inputPadding: "15px",
  inputWidth: "100%",
  collapsedWidth: "40%",
  inputHeight: "50px",
  inputRadius: "100px",

  cardWidth: "80%",
  cardHeight: "100px",
  cardRadius: "20px",
  cardMargin: "10px",
  bigFont: "20px",
  mediumFont: "15px",
  smallFont: "12px",
  cardWidthWideInPx: `${width - defaultMargin}px`,
  cardHeightWideInPx: `${defaultCardHeight}px`,

  thinBorderRadius: "2px",

  isSmallDevice: width < 375,
};

export default layout;
