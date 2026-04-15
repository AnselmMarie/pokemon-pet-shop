import { isWebUtil, isNativeUtil } from './detect.native';

describe('detect (native)', () => {
  describe('isWebUtil', () => {
    it('returns false', () => {
      expect(isWebUtil()).toBe(false);
    });
  });

  describe('isNativeUtil', () => {
    it('returns true', () => {
      expect(isNativeUtil()).toBe(true);
    });
  });
});
