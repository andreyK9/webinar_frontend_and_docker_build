import { addJustModificator } from './addJustModificator';

describe('addJustModificator', () => {
  test.each([
    ['block', 'modificator', false, ''],
    ['block', 'modificator', true, ' block--modificator'],
  ])(
    'when block is %s, modificator is %s, enadled is %s, should return %s',
    (block, modificator, isEnadled, result) => {
      expect(addJustModificator(block, modificator)(isEnadled)).toBe(result);
    },
  );
});
