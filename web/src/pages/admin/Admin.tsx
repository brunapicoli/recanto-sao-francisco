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
          <Button link="/adocao/caes">Atualizar cães</Button>
          <Button link="/adocao/gatos">Atualizar gatos</Button>
        </AdminContent>
      ) : (
        <Button onClick={() => login()}>Login</Button>
      )}
    </AdminContainer>
  );
};
