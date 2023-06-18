import Navigator from './navigation';
import { Provider } from 'react-redux';
import store from './store/index';
import { init } from './db';

init()
  .then(() => {
    console.log('Database initialized');
  })
  .catch((err) => {
    console.log('Database failed to connect');
    console.log(err);
  });

export default function App() {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}