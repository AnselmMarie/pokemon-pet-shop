import { capitalizeName } from './capitalize-name';

describe('capitalizeName', () => {
  describe('falsy/invalid input', () => {
    it('returns empty string for empty input', () => {
      expect(capitalizeName('')).toBe('');
    });

    it('returns empty string for undefined input', () => {
      expect(capitalizeName(undefined as unknown as string)).toBe('');
    });

    it('returns empty string for null input', () => {
      expect(capitalizeName(null as unknown as string)).toBe('');
    });
  });

  describe('happy path', () => {
    it('capitalizes first character of lowercase name', () => {
      expect(capitalizeName('john')).toBe('John');
    });

    it('leaves already-capitalized name unchanged', () => {
      expect(capitalizeName('John')).toBe('John');
    });

    it('leaves all-caps name unchanged', () => {
      expect(capitalizeName('JOHN')).toBe('JOHN');
    });
  });

  describe('edge cases', () => {
    it('handles single lowercase character', () => {
      expect(capitalizeName('a')).toBe('A');
    });

    it('handles single uppercase character', () => {
      expect(capitalizeName('A')).toBe('A');
    });

    it('does not change string starting with space', () => {
      expect(capitalizeName(' john')).toBe(' john');
    });

    it('does not uppercase a number at the start', () => {
      expect(capitalizeName('1john')).toBe('1john');
    });

    it('handles hyphenated names', () => {
      expect(capitalizeName('john-doe')).toBe('John-doe');
    });

    it('only capitalizes the first character', () => {
      expect(capitalizeName('john doe')).toBe('John doe');
    });
  });
});
