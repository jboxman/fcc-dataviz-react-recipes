import localForage from 'localforage';

// Based upon code and research from:
// http://blog.krawaller.se/posts/exploring-redux-middleware/

export default function(middlewareAPI) {
  return function(next) {
    return function(action) {
      let recipes;
      const ret = next(action);

      // May not be defined
      if('object' == typeof ret && ret.type.indexOf('recipe::') != -1) {
        recipes = middlewareAPI.getState().recipes;
        // async
        localForage.setItem('RECIPES', recipes);
      }

      return ret;
    };
  };
}
