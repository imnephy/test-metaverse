import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster containerClassName="font-paragraphs" />
    </>
  );
};

export default App;
