import { TokenResponse } from '@react-oauth/google';
import axios from 'axios';
import { api } from './api';

export const AuthService = {
  isUserAllowed: async (tokenResponse: Omit<TokenResponse, 'error' | 'error_description' | 'error_uri'>) => {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResponse.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
          Accept: 'application/json',
        },
      }
    );
    if (response.data.email === `${process.env.REACT_APP_ALLOWED_EMAIL}`) {
      const token = `${tokenResponse.token_type} ${tokenResponse.access_token}`;
      api.defaults.headers.common.Authorization = token;
      sessionStorage.setItem('token', token);
      return true;
    } else {
      alert('Usuário não autorizado');
      sessionStorage.removeItem('token');
      return false;
    }
  },
};
