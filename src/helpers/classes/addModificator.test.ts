import { addModificator } from './addModificator';

describe('addModificator', () => {
  test('should not add modificator', () => {
    expect(addModificator('block', 'modificator')(false)).toBe('block');
  });

  test('should add modificator', () => {
    expect(addModificator('block', 'modificator')(true)).toBe('block block--modificator');
  });
});
