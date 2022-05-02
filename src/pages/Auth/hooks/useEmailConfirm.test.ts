import { renderHook } from '@testing-library/react-hooks';

import { useEmailConfirm } from './useEmailConfirm';

const mockDispatch = jest.fn();
jest.mock('store', () => ({
  useAppDispatch: () => mockDispatch,
}));

const mockConfirmMail = jest.fn();
jest.mock('pages/Auth/reducers/mailConfirm', () => ({
  confirmMail: () => mockConfirmMail(),
}));
jest.mock('pages/Auth/types', () => ({}));

afterAll(() => {
  jest.unmock('store');
  jest.unmock('pages/Auth/reducers/mailConfirm');
  jest.unmock('pages/Auth/types');
});

describe('useEmailConfirm', () => {
  test('should confirm mail', () => {
    const { result } = renderHook(() => useEmailConfirm());
    result.current('value', {} as any);

    expect(mockConfirmMail).toBeCalled();
  });

  test('should dispatch action', () => {
    const { result } = renderHook(() => useEmailConfirm());
    result.current('value', {} as any);

    expect(mockDispatch).toBeCalled();
  });
});
