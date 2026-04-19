import { formatGreeting } from '../../js/greet';

describe('formatGreeting', () => {
  it('wraps the name in a greeting', () => {
    expect(formatGreeting('WP Bones')).toBe('Hello, WP Bones!');
  });

  it('throws on empty or whitespace-only input', () => {
    expect(() => formatGreeting('')).toThrow('name must not be empty');
    expect(() => formatGreeting('   ')).toThrow('name must not be empty');
  });
});
