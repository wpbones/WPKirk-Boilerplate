/**
 * Demo TypeScript module used by the base boilerplate to show that `.ts`
 * files in `resources/assets/js/` are auto-discovered and compiled by webpack.
 *
 * It is imported by `apps/app.tsx`, and also exercised by the Jest test under
 * `__tests__/greet.test.ts` to prove `yarn test` works out of the box.
 */

export function formatGreeting(name: string): string {
  if (!name.trim()) {
    throw new Error('name must not be empty');
  }
  return `Hello, ${name}!`;
}
