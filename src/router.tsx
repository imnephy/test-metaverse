import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import UserProfile from './pages/UserProfile';

const initialRoutes = (
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="*" element={<NotFound />} />
    <Route path="users/:id" element={<UserProfile />} />
  </Route>
);

const router = createBrowserRouter(
  createRoutesFromElements(initialRoutes)
);

export default router;
