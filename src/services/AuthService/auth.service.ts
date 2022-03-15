import axiosInstance from '../../interceptor/axiosInstance';
import {User} from '../../models/user.model';
import {ApiRoutes} from '../../routes/apiRoutes';

const AuthService = () => {
  const validateToken = async () => {
    try {
      const {data} = await axiosInstance.get(ApiRoutes.VALIDATE);
      // if token is valid
      if (true) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  const login = async (user: User) => {
    try {
      const payload = {
        user,
      };
      const {data} = await axiosInstance.post(ApiRoutes.LOGIN, payload);
    } catch (error) {}
  };

  return {
    login,
    validateToken,
  };
};

export default AuthService;
