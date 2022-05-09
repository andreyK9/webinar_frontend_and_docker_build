import { renderHook } from '@testing-library/react-hooks';

import { useAddHendlerFor } from './useAddHendlerFor';

const mockHandler = jest.fn();

describe('E', () => {
  test('should call handler with state data', () => {
    renderHook(() => useAddHendlerFor(undefined, mockHandler));

    expect(mockHandler).toBeCalledWith(undefined);
  });
});
