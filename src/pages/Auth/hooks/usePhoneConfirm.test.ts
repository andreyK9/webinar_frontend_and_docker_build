import { renderHook } from '@testing-library/react-hooks';

import { usePhoneConfirm } from './usePhoneConfirm';

const mockDispatch = jest.fn();
jest.mock('store', () => ({
  useAppDispatch: () => mockDispatch,
}));

const mockConfirm = jest.fn();
jest.mock('pages/Auth/reducers/phone', () => ({
  confirm: () => mockConfirm(),
}));
jest.mock('pages/Auth/types', () => ({}));

afterAll(() => {
  jest.unmock('store');
  jest.unmock('pages/Auth/reducers/mailConfirm');
  jest.unmock('pages/Auth/types');
});

describe('usePhoneConfirm', () => {
  test('should dispatch action', () => {
    const { result } = renderHook(() => usePhoneConfirm());
    result.current('value', {} as any);

    expect(mockDispatch).toBeCalled();
  });

  test('should confirm phone', () => {
    const { result } = renderHook(() => usePhoneConfirm());
    result.current('value', {} as any);

    expect(mockConfirm).toBeCalled();
  });
});
