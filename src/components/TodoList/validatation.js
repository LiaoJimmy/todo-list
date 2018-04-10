export const itemValidator = (text) => {
  if (!text || text.trim().length <= 0) {
    return 'Todo item text should not be empty';
  } else if (text.length > 20) {
    return 'Todo item text length should be less than 20 characters';
  }

  return true;
};

export default {
  itemValidator,
};
