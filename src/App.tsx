import React from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobaStyle from './styles/global';

import { AuthProvider } from './context/authContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobaStyle />
  </>
);

export default App;
