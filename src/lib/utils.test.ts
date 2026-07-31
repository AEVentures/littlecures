import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn', () => {
  it('merges class strings and resolves tailwind conflicts', () => {
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });

  it('ignores falsy values', () => {
    expect(cn('px-2', false && 'hidden', 'py-4')).toBe('px-2 py-4');
  });

  it('merges conditional classes', () => {
    const active = true;
    expect(cn('rounded', active && 'bg-rose-600', 'px-4')).toBe('rounded bg-rose-600 px-4');
  });
});
