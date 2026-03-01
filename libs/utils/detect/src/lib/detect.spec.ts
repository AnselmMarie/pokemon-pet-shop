import { isWeb, isNative } from './detect';

describe('detect (web)', () => {
  describe('isWeb', () => {
    it('returns true', () => {
      expect(isWeb()).toBe(true);
    });
  });

  describe('isNative', () => {
    it('returns false', () => {
      expect(isNative()).toBe(false);
    });
  });
});
