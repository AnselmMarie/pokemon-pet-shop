import { createJSONStorage } from 'jotai/utils';

import { createInMemoryStorage } from './in-store-storage';
import { createStorage } from './create-storage';

jest.mock('jotai/utils', () => ({
  createJSONStorage: jest.fn((getStorage: () => unknown) => {
    // Invoke the factory callback so it's counted as covered
    getStorage();
    return {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    };
  }),
}));

jest.mock('./in-store-storage', () => ({
  createInMemoryStorage: jest.fn(() => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  })),
}));

const mockedCreateJSONStorage = jest.mocked(createJSONStorage);
const mockedCreateInMemoryStorage = jest.mocked(createInMemoryStorage);

const globalObj = globalThis as unknown as Record<string, unknown>;

describe('createStorage (web)', () => {
  const originalLocalStorage = globalObj.localStorage;

  afterEach(() => {
    jest.clearAllMocks();
    Object.defineProperty(globalObj, 'localStorage', {
      value: originalLocalStorage,
      writable: true,
      configurable: true,
    });
  });

  it('returns createJSONStorage result when localStorage is available', () => {
    const mockLs = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    };

    Object.defineProperty(globalObj, 'localStorage', {
      value: mockLs,
      writable: true,
      configurable: true,
    });

    createStorage();

    expect(mockLs.setItem).toHaveBeenCalledWith('__test__', '__test__');
    expect(mockLs.removeItem).toHaveBeenCalledWith('__test__');
    expect(mockedCreateJSONStorage).toHaveBeenCalled();
    expect(mockedCreateInMemoryStorage).not.toHaveBeenCalled();
  });

  it('falls back to in-memory storage when localStorage is undefined', () => {
    Object.defineProperty(globalObj, 'localStorage', {
      value: undefined,
      writable: true,
      configurable: true,
    });

    createStorage();

    expect(mockedCreateInMemoryStorage).toHaveBeenCalled();
    expect(mockedCreateJSONStorage).not.toHaveBeenCalled();
  });

  it('falls back to in-memory storage when localStorage.setItem throws', () => {
    const mockLs = {
      getItem: jest.fn(),
      setItem: jest.fn(() => {
        throw new Error('QuotaExceededError');
      }),
      removeItem: jest.fn(),
    };

    Object.defineProperty(globalObj, 'localStorage', {
      value: mockLs,
      writable: true,
      configurable: true,
    });

    createStorage();

    expect(mockedCreateInMemoryStorage).toHaveBeenCalled();
  });
});
