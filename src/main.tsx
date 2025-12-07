import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'pretendard/dist/web/variable/pretendardvariable.css';
import './shared/styles/reset.css.ts';
import './shared/styles/global.css.ts';
import QueryProvider from './apis/query-client.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </StrictMode>
);
