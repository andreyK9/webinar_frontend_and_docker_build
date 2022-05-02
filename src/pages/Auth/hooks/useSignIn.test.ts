import { renderHook } from '@testing-library/react-hooks';

import { useSignIn } from './useSignIn';

const mockDispatch = jest.fn();
jest.mock('store', () => ({
  useAppDispatch: () => mockDispatch,
}));

const mocksignIn = jest.fn();
jest.mock('pages/Auth/reducers/auth', () => ({
  signIn: () => mocksignIn(),
}));

jest.mock('pages/Auth/types', () => ({}));

afterAll(() => {
  jest.unmock('store');
  jest.unmock('pages/Auth/reducers/auth');
  jest.unmock('pages/Auth/types');
});

describe('useSignIn', () => {
  test('should dispatch action', () => {
    const { result } = renderHook(() => useSignIn());
    result.current('value', {} as any);

    expect(mockDispatch).toBeCalled();
  });

  test('should sign in', () => {
    const { result } = renderHook(() => useSignIn());
    result.current('value', {} as any);

    expect(mocksignIn).toBeCalled();
  });
});
