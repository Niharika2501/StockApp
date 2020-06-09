export const isProduction = () =>
  process.env.NODE_ENV === 'production' &&
  process.env.GATSBY_STAGING_ENV !== 'true';

export const isServer = () =>
  typeof window === 'undefined' || typeof document === 'undefined';

export const isDevelop = () =>
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  !isProduction() &&
  !isServer();
