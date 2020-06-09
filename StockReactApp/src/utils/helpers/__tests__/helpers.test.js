import { isProduction, isDevelop } from '..';

describe('helper test', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it('should be production', () => {
    process.env.NODE_ENV = 'production';
    expect(isProduction()).toBe(true);
  });

  it('should be develop', () => {
    delete global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    global.window = Object.create(window);

    Object.defineProperty(window, '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__', {
      value: jest.fn().mockImplementation(() => {})
    });

    expect(isDevelop()).toBe(true);
  });
});
