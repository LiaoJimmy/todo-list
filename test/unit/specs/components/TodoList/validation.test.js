import { itemValidator } from '../../../../../src/components/TodoList/validatation';

describe('itemValidator', () => {
  it('should validate todo item text length more than 20 characters', () => {
    const text = 'abcdeabcdeabcdeabcdea';
    const errorMessage = 'Todo item text length should be less than 20 characters';

    expect(itemValidator(text)).toBe(errorMessage);
  });

  it('should validate todo item text length less than 1 character or null', () => {
    const text = '';
    const errorMessage = 'Todo item text should not be empty';

    expect(itemValidator(text)).toBe(errorMessage);
    expect(itemValidator(null)).toBe(errorMessage);
  });

  it('should validate todo item text length less than 1 character after trim space character', () => {
    const text = ' ';
    const errorMessage = 'Todo item text should not be empty';

    expect(itemValidator(text)).toBe(errorMessage);
  });

  it('should accept todo item text length less than 20 characters', () => {
    const text = 'abcdeabcdeabcdeabcde';

    expect(itemValidator(text)).toBe(true);
  });
});
