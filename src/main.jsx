import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import '../node_modules/flowbite/dist/flowbite.min.js';
import { HelmetProvider } from "react-helmet-async";
import 'flowbite';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createRoot } from 'react-dom/client'; 
import { StrictMode } from 'react';
import App from './App.jsx';
import CounterContextProvider from './Context/CounterContext.jsx';
import UserTokenProvider from './Context/UserToken.jsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import NumItemContextProvider from "./Context/NumCartContext.jsx";
const queryClient = new QueryClient(

   

)
createRoot(document.getElementById('root')).render(
  <HelmetProvider>
<UserTokenProvider>

  <NumItemContextProvider>
<QueryClientProvider  client={queryClient}>

  
  <CounterContextProvider>
  <ReactQueryDevtools initialIsOpen={false} />
      <Toaster></Toaster>
      <App />
  </CounterContextProvider>
  
  </QueryClientProvider>
   </NumItemContextProvider>
   </UserTokenProvider>
   </HelmetProvider>


);
