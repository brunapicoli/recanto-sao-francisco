import { Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { useAppContext } from 'context/AppContext';
import { Button } from 'components/atoms/button/Button';
import { AuthService } from 'services/AuthService';
import { AdminContainer, AdminContent, AdminTitle } from './style';

export const Admin = () => {
  const { isLoggedIn, setIsLoggedIn } = useAppContext();

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const isUserAllowed = await AuthService.isUserAllowed(codeResponse);
      setIsLoggedIn(isUserAllowed);
    },
    onError: (error) => alert('Erro ao fazer login: ' + error),
  });

  return (
    <AdminContainer>
      <AdminTitle>Área do Administrador</AdminTitle>
      {isLoggedIn ? (
        <AdminContent>
          <Link to="/adocao/caes">
            <Button text="Atualizar cães" />
          </Link>
          <Link to="/adocao/gatos">
            <Button text="Atualizar gatos" />
          </Link>
        </AdminContent>
      ) : (
        <Button text="Login" onClick={() => login()} />
      )}
    </AdminContainer>
  );
};
