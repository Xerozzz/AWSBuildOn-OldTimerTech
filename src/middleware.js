export default store => next => action => {
    if (isPromise(action.payload)) {
      action.payload.then(
        success => {
          action.payload = success.data;
          store.dispatch(action);
        }
      ).catch(error => {
          action.payload = {ip: 'NO IP'};
          store.dispatch(action);
        });
      return;
    }
    next(action)
  };
  
  function isPromise(item) {
    return item && typeof item.then === 'function';
  }