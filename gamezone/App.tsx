import React from 'react'
import { View } from 'react-native';

import Home from './screens/Home'
export interface AppProps {
  
}
 
const App: React.SFC<AppProps> = () => {
  return (
      <Home />
  );
}
 
export default App;