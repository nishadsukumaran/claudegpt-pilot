import { describe, it, expect } from 'vitest';
import { hello } from '../src/index.js';

describe('hello', () => {
  it('returns the pilot online message', () => {
    expect(hello()).toBe('ClaudeGPT pilot online');
  });
});
