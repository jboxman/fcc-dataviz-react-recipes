// The production URL on gh-pages is prefixed with /web for convenience.
const PREFIX = process.env.NODE_ENV == 'development' ? '' : '/web';

export function prefixedRoute(path = '/') {
  if(path == '/')
    return path;
  else
    return `${PREFIX}/${path}`;
}
