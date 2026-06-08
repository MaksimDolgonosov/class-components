import { getPasswordBorder } from '../../src/utils/getPassBorder';

describe('getPasswordBorder', () => {
  it('should return a border color for a valid password', () => {
    const passwordCorrect = 'Password123$';
    const resultCorrect = getPasswordBorder(passwordCorrect);
    expect(resultCorrect).toBe('2px solid #2ecc71');
    const passwordIncorrect = 'Password123';
    const resultIncorrect = getPasswordBorder(passwordIncorrect);
    expect(resultIncorrect).toBe('2px solid rgb(255, 174, 43)');
    const password2 = 'password123';
    const resultIncorrect2 = getPasswordBorder(password2);
    expect(resultIncorrect2).toBe('2px solid rgb(217, 116, 0)');
    const password3 = 'pass';
    const resultIncorrect3 = getPasswordBorder(password3);
    expect(resultIncorrect3).toBe('2px solid #c0392b');
  });
});
