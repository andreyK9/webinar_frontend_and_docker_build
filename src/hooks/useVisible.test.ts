import { act, renderHook } from '@testing-library/react-hooks';

import { useVisible } from './useVisible';

describe('useVisible', () => {
  test('should return object with current properties', () => {
    const { result } = renderHook(() => useVisible());

    expect(result.current).toEqual({
      visible: expect.any(Boolean),
      show: expect.any(Function),
      hide: expect.any(Function),
    });
  });

  test('should return visible true by called the show', () => {
    const { result } = renderHook(() => useVisible());

    act(() => {
      result.current.show();
    });

    expect(result.current.visible).toBeTruthy();
  });

  test('should return visible false by called the hide', () => {
    const { result } = renderHook(() => useVisible(true));

    act(() => {
      result.current.hide();
    });

    expect(result.current.visible).toBeFalsy();
  });
});
