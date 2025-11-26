export const pricingFormatUSD = (price: number): string => {
  return `$${String(price).replace(/\d\d$/, (el: string) => {
    return `.${el}`;
  })}`;
};
