import '@testing-library/jest-dom/vitest';
import React from 'react';
import { afterEach, beforeEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock('next/image', () => ({
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string | { src: string };
    alt: string;
  }) => (
    <img
      src={typeof src === 'string' ? src : src.src}
      alt={alt}
      {...props}
    />
  ),
}));

vi.mock('../../src/i18n/navigation', () => ({
  Link: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => '/',
}));

beforeEach(() => {
  Object.defineProperty(globalThis, 'localStorage', {
    value: {
      getItem: vi.fn().mockReturnValue(''),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    },
    configurable: true,
  });
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
