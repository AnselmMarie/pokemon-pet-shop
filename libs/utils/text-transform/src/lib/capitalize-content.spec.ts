import { capitalizeContent } from './capitalize-content';

describe('capitalizeContent', () => {
  describe('falsy/invalid input', () => {
    it('returns empty string for empty input', () => {
      expect(capitalizeContent('')).toBe('');
    });

    it('returns empty string for undefined input', () => {
      expect(capitalizeContent(undefined as unknown as string)).toBe('');
    });

    it('returns empty string for null input', () => {
      expect(capitalizeContent(null as unknown as string)).toBe('');
    });
  });

  describe('happy path', () => {
    it('capitalizes first lowercase letter', () => {
      expect(capitalizeContent('hello world')).toBe('Hello world');
    });

    it('capitalizes first lowercase letter even if first word is capitalized', () => {
      expect(capitalizeContent('Hello world')).toBe('Hello World');
    });

    it('leaves all-caps string unchanged', () => {
      expect(capitalizeContent('HELLO')).toBe('HELLO');
    });
  });

  describe('edge cases', () => {
    it('handles single lowercase character', () => {
      expect(capitalizeContent('a')).toBe('A');
    });

    it('handles single uppercase character', () => {
      expect(capitalizeContent('A')).toBe('A');
    });

    it('handles string starting with number', () => {
      expect(capitalizeContent('1hello')).toBe('1hello');
    });

    it('handles string starting with special character', () => {
      expect(capitalizeContent('!hello')).toBe('!Hello');
    });

    it('handles leading whitespace', () => {
      expect(capitalizeContent('  hello')).toBe('  Hello');
    });

    it('only capitalizes the first lowercase occurrence', () => {
      expect(capitalizeContent('hello world test')).toBe('Hello world test');
    });
  });
});
