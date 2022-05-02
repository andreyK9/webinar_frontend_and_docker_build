import { renderHook } from '@testing-library/react-hooks';

import { usePhoneSend } from './usePhoneSend';

const mockDispatch = jest.fn();
jest.mock('store', () => ({
  useAppDispatch: () => mockDispatch,
}));

const mockSend = jest.fn();
jest.mock('pages/Auth/reducers/phone', () => ({
  send: () => mockSend(),
}));
jest.mock('pages/Auth/types', () => ({}));

afterAll(() => {
  jest.unmock('store');
  jest.unmock('pages/Auth/reducers/phone');
  jest.unmock('pages/Auth/types');
});

describe('usePhoneSend', () => {
  test('should dispatch action', () => {
    const { result } = renderHook(() => usePhoneSend());
    result.current('value', {} as any);

    expect(mockDispatch).toBeCalled();
  });

  test('should send phone', () => {
    const { result } = renderHook(() => usePhoneSend());
    result.current('value', {} as any);

    expect(mockSend).toBeCalled();
  });
});
