'use client';

import { useState } from 'react';
import './error-test-button.scss';
type ErrorTestButtonProps = {
  label: string;
};

const ErrorTestButton = ({ label }: ErrorTestButtonProps) => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('Test error: true');
  }

  return (
    <button
      type="button"
      className="error-test-btn"
      onClick={() => setShouldThrow(true)}
    >
      {label}
    </button>
  );
};

export default ErrorTestButton;
