/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

const Main = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <App />
        </ApplicationProvider>
      </QueryClientProvider>
    </>
  );
};

AppRegistry.registerComponent(appName, () => Main);
