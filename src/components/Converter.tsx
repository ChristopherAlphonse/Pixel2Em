const converter = (css: string): string => {
  const pixelValueRegex = /(\d*\.?\d+)px/g;
  const baseFontSize = 16;

  return css.replace(pixelValueRegex, (match: string, pixels: string) => {
    const remValue = parseFloat(pixels) / baseFontSize;
    return `${remValue}rem`;
  });
};

export default converter;
