import {FC} from 'react';
import Login from '../pages/Auth/Login';
import Home from '../pages/Home';
import SplashScreen from '../pages/SplashScreen';
import ProtectedPage from '../shared/components/HOC/protectedPage';
import {AppPages} from './appPath';

interface PageProps {
  name: string;
  component: FC;
}

export const pages: PageProps[] = [
  {
    name: AppPages.SPLASH_SCREEN,
    component: SplashScreen,
  },
  {
    name: AppPages.LOGIN,
    component: Login,
  },
  {
    name: AppPages.HOME,
    component: ProtectedPage(Home),
  },
];
