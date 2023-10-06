import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react';
import Root from './root/indx.jsx';
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <PersistGate loading={false} persistor={persistor}>
      <Root/>
    </PersistGate>
  </Provider >

)
