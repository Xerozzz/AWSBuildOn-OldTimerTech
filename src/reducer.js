export default (state={}, action) => {
    switch (action.type) {
      case 'IP':
        return {
          ...state,
          ip: action.payload.ip
        }
      default:
        return state;
    }
  }