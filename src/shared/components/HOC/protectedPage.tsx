import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {useEffect} from 'react';
import {AppPages} from '../../../routes/appPath';
import AuthContainer from '../../../store/container/AuthContainer';
import {AuthReducerProps} from '../../../store/reducers/authReducer';

const ProtectedPage = (Component: FC) => {
  const Authentication = (props: AuthReducerProps) => {
    const navigation = useNavigation();
    useEffect(() => {
      if (!props?.authenticated) {
        (navigation as any).navigate(AppPages.LOGIN);
      }
    }, []);
    return Component(props as never);
  };
  return AuthContainer(Authentication);
};

export default ProtectedPage;
