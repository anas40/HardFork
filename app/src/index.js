import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil'
import App from './App';
import Loader from './components/loader'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />} >
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
