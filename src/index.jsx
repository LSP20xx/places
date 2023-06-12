import Navigator from './navigation';
import { Provider } from 'react-redux';
import store from './store/index';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}