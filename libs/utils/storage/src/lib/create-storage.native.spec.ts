import { createInMemoryStorage } from './in-store-storage';
import { createStorage } from './create-storage.native';

const mockAsyncStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

jest.mock('@react-native-async-storage/async-storage', () => ({ default: mockAsyncStorage }), {
  virtual: true,
});

jest.mock('./in-store-storage', () => ({
  createInMemoryStorage: jest.fn(() => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  })),
}));

const mockedCreateInMemoryStorage = jest.mocked(createInMemoryStorage);

describe('createStorage (native)', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns an async storage adapter when AsyncStorage is available', () => {
    const storage = createStorage();
    expect(storage).toHaveProperty('getItem');
    expect(storage).toHaveProperty('setItem');
    expect(storage).toHaveProperty('removeItem');
    expect(mockedCreateInMemoryStorage).not.toHaveBeenCalled();
  });

  describe('getItem', () => {
    it('returns initialValue when key does not exist', async () => {
      mockAsyncStorage.getItem.mockResolvedValue(null);
      const storage = createStorage<string>();

      const result = await storage.getItem('missing', 'default');

      expect(result).toBe('default');
      expect(mockAsyncStorage.getItem).toHaveBeenCalledWith('missing');
    });

    it('returns parsed JSON value when key exists', async () => {
      mockAsyncStorage.getItem.mockResolvedValue(JSON.stringify({ name: 'Ash' }));
      const storage = createStorage<{ name: string }>();

      const result = await storage.getItem('user', { name: '' });

      expect(result).toEqual({ name: 'Ash' });
    });

    it('returns initialValue when JSON.parse fails', async () => {
      mockAsyncStorage.getItem.mockResolvedValue('invalid-json{{{');
      const storage = createStorage<string>();

      const result = await storage.getItem('corrupted', 'fallback');

      expect(result).toBe('fallback');
    });
  });

  describe('setItem', () => {
    it('calls AsyncStorage.setItem with JSON stringified value', async () => {
      mockAsyncStorage.setItem.mockResolvedValue(undefined);
      const storage = createStorage<{ name: string }>();

      await storage.setItem('user', { name: 'Ash' });

      expect(mockAsyncStorage.setItem).toHaveBeenCalledWith(
        'user',
        JSON.stringify({ name: 'Ash' })
      );
    });
  });

  describe('removeItem', () => {
    it('calls AsyncStorage.removeItem', async () => {
      mockAsyncStorage.removeItem.mockResolvedValue(undefined);
      const storage = createStorage<string>();

      await storage.removeItem('user');

      expect(mockAsyncStorage.removeItem).toHaveBeenCalledWith('user');
    });
  });
});

describe('createStorage (native) - fallback', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('falls back to in-memory storage when AsyncStorage is unavailable', () => {
    jest.mock(
      '@react-native-async-storage/async-storage',
      () => {
        throw new Error('Module not found');
      },
      { virtual: true }
    );

    jest.mock('./in-store-storage', () => ({
      createInMemoryStorage: jest.fn(() => ({
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
      })),
    }));

    const { createStorage: createStorageFallback } = require('./create-storage.native');
    const { createInMemoryStorage: mockedInMemory } = require('./in-store-storage');

    createStorageFallback();

    expect(mockedInMemory).toHaveBeenCalled();
  });
});
