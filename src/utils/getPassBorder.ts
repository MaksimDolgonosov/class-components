export const getPasswordBorder = (password: string): string => {
  const rules = [
    /[0-9]/.test(password),
    /[A-Z]/.test(password),
    /[a-z]/.test(password),
    /[@$!%*?&]/.test(password),
  ];

  const missingRulesCount = rules.filter((isPassed) => !isPassed).length;

  if (missingRulesCount === 0) {
    return '2px solid #2ecc71';
  }

  if (missingRulesCount <= 1) {
    return '2px solid rgb(255, 174, 43)';
  }
  if (missingRulesCount <= 2) {
    return '2px solid rgb(217, 116, 0)';
  }

  return '2px solid #c0392b';
};
