import { toggleModificator } from './toggleModificator';

describe('toggleModificator', () => {
  test('should set default modificator', () => {
    expect(toggleModificator('block', 'default', 'toggled')(false)).toBe(
      'block block--default',
    );
  });

  test('should set toggled modificator', () => {
    expect(toggleModificator('block', 'default', 'toggled')(true)).toBe(
      'block block--toggled',
    );
  });
});
