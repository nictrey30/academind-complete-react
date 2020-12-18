import { createContext } from 'react';

// the authContext is a globally available JS object/ array/ string/ etc., and you decide where it is available

const authContext = createContext({
  authenticated: false,
  login: () => {}
});

export default authContext;
