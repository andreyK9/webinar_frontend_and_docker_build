import { mergeClasses } from './mergeClasses';

describe('mergeClasses', () => {
  test.each([
    [undefined, undefined, ''],
    ['first', undefined, 'first'],
    [undefined, 'second', 'second'],
    ['first', 'second', 'first second'],
  ])(
    'when first classes is %s, second class is %s, should return %s',
    (first, second, result) => {
      expect(mergeClasses(first, second)).toBe(result);
    },
  );
});
