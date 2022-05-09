import { act, renderHook } from '@testing-library/react-hooks';

import { useDropdownState } from './useDropdownState';

describe('useDropdownState', () => {
  test('should visible be false by default', () => {
    const { result } = renderHook(() => useDropdownState());

    expect(result.current.visible).toBeFalsy();
  });

  test('should visible be true when set default visible', () => {
    const { result } = renderHook(() => useDropdownState(true));

    expect(result.current.visible).toBeTruthy();
  });

  test('should open dropdown', () => {
    const { result } = renderHook(() => useDropdownState());

    act(() => {
      result.current.open();
    });

    expect(result.current.visible).toBeTruthy();
  });

  test('should close dropdown', () => {
    const { result } = renderHook(() => useDropdownState());

    act(() => {
      result.current.close();
    });

    expect(result.current.visible).toBeFalsy();
  });

  test('should close dropdown', () => {
    const { result } = renderHook(() => useDropdownState());

    act(() => {
      result.current.toggle();
      result.current.toggle();
    });

    expect(result.current.visible).toBeFalsy();
  });
});
