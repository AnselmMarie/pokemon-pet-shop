import { storageKey } from './storage';

describe('storageKey', () => {
  it('prefixes key with namespace', () => {
    expect(storageKey('cart')).toBe('pokemon-pet-shop:cart');
  });

  it('handles empty string key', () => {
    expect(storageKey('')).toBe('pokemon-pet-shop:');
  });

  it('handles key with special characters', () => {
    expect(storageKey('user:settings:theme')).toBe('pokemon-pet-shop:user:settings:theme');
  });

  it('handles key with spaces', () => {
    expect(storageKey('my key')).toBe('pokemon-pet-shop:my key');
  });
});
