import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; 
import './index.css'; // Your global styles
import {App} from './App'; // Your App component


const queryClient = new QueryClient();


const rootElement = document.getElementById('root');


if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      
      <QueryClientProvider client={queryClient}>
        {/* Render your App component */}
        <App />
        
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  );
}
