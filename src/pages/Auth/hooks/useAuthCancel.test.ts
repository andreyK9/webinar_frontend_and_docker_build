import { renderHook } from '@testing-library/react-hooks';

import { useAuthCancel } from './useAuthCancel';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));
jest.mock('pages/Auth/types', () => ({}));

describe('useAuthCancel', () => {
  test('should go back', () => {
    const { result } = renderHook(() => useAuthCancel());
    result.current();

    expect(mockNavigate).toBeCalledWith(-1);
  });
});
