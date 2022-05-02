import { renderHook } from '@testing-library/react-hooks';

import { useSignUp } from './useSignUp';

const mockDispatch = jest.fn();
jest.mock('store', () => ({
  useAppDispatch: () => mockDispatch,
}));

const mockSignUp = jest.fn();
jest.mock('pages/Auth/reducers/auth', () => ({
  signUp: () => mockSignUp(),
}));

jest.mock('pages/Auth/types', () => ({}));

afterAll(() => {
  jest.unmock('store');
  jest.unmock('pages/Auth/reducers/auth');
  jest.unmock('pages/Auth/types');
});

describe('useSignUp', () => {
  test('should dispatch action', () => {
    const { result } = renderHook(() => useSignUp());
    result.current('value', {} as any);

    expect(mockDispatch).toBeCalled();
  });

  test('should sign in', () => {
    const { result } = renderHook(() => useSignUp());
    result.current('value', {} as any);

    expect(mockSignUp).toBeCalled();
  });
});
