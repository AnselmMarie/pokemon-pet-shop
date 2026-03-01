import { pricingFormatUSD } from './pricing-format-country';

describe('pricingFormatUSD', () => {
  it('formats a standard price in cents', () => {
    expect(pricingFormatUSD(1234)).toBe('$12.34');
  });

  it('formats a two-digit price', () => {
    expect(pricingFormatUSD(99)).toBe('$.99');
  });

  it('formats a single-digit price', () => {
    // Single digit: "5" → regex /\d\d$/ won't match (only 1 digit)
    // So it returns "$5" with no decimal
    expect(pricingFormatUSD(5)).toBe('$5');
  });

  it('formats exactly 100 as $1.00', () => {
    expect(pricingFormatUSD(100)).toBe('$1.00');
  });

  it('formats a large price', () => {
    expect(pricingFormatUSD(100000)).toBe('$1000.00');
  });

  it('formats zero', () => {
    // "0" → regex /\d\d$/ won't match (only 1 digit)
    expect(pricingFormatUSD(0)).toBe('$0');
  });

  it('formats a price with exact two digits', () => {
    expect(pricingFormatUSD(50)).toBe('$.50');
  });
});
