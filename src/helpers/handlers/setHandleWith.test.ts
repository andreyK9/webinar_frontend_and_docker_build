import { setHandleWith } from './setHandleWith';

const mockFunction = jest.fn();
describe('setHandleWith', () => {
  test('should not call handler when it is empty', () => {
    setHandleWith(undefined, undefined)();

    expect(mockFunction).not.toBeCalled();
  });

  test('should call handler when it exist', () => {
    setHandleWith({ test: 'test' }, mockFunction)();

    expect(mockFunction).toBeCalledWith({ test: 'test' });
  });
});
