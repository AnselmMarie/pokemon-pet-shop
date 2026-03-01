import { removeHtmlCodeInString } from './remove-html-code-in-string';

describe('removeHtmlCodeInString', () => {
  describe('falsy/invalid input', () => {
    it('returns empty string when called with no arguments', () => {
      expect(removeHtmlCodeInString()).toBe('');
    });

    it('returns empty string for empty input', () => {
      expect(removeHtmlCodeInString('')).toBe('');
    });

    it('returns empty string for undefined input', () => {
      expect(removeHtmlCodeInString(undefined)).toBe('');
    });
  });

  describe('newline replacement', () => {
    it('replaces a single newline with a space', () => {
      expect(removeHtmlCodeInString('hello\nworld')).toBe('hello world');
    });

    it('replaces multiple consecutive newlines with spaces', () => {
      expect(removeHtmlCodeInString('a\n\nb')).toBe('a  b');
    });

    it('replaces newline at the start of string', () => {
      expect(removeHtmlCodeInString('\nhello')).toBe(' hello');
    });

    it('replaces newline at the end of string', () => {
      expect(removeHtmlCodeInString('hello\n')).toBe('hello ');
    });
  });

  describe('form feed replacement', () => {
    it('replaces form feed with a space', () => {
      expect(removeHtmlCodeInString('hello\fworld')).toBe('hello world');
    });

    it('replaces mixed newlines and form feeds', () => {
      expect(removeHtmlCodeInString('a\nb\fc')).toBe('a b c');
    });
  });

  describe('edge cases', () => {
    it('leaves string without special chars unchanged', () => {
      expect(removeHtmlCodeInString('hello world')).toBe('hello world');
    });

    it('does NOT remove HTML tags', () => {
      expect(removeHtmlCodeInString('<div>hello</div>')).toBe('<div>hello</div>');
    });

    it('does NOT replace carriage returns', () => {
      expect(removeHtmlCodeInString('hello\rworld')).toBe('hello\rworld');
    });

    it('does NOT replace tabs', () => {
      expect(removeHtmlCodeInString('hello\tworld')).toBe('hello\tworld');
    });
  });
});
