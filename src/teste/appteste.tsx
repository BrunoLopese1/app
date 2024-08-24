
Memória atualizada
Para criar uma página de login independente que, após o login, redireciona o usuário para a aplicação principal com um layout diferente (incluindo uma sidebar), você pode seguir os passos abaixo:

1. Estrutura das Rotas
Você pode criar duas estruturas de rotas distintas: uma para a página de login e outra para a aplicação após o login.

jsx
Copiar código
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';

const AppRoutes = () => {
  const isAuthenticated = /* lógica para verificar se o usuário está autenticado */;

  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/app">
          {isAuthenticated ? (
            <MainLayout>
              <Switch>
                <Route path="/app/dashboard" component={DashboardPage} />
                <Route path="/app/home" component={HomePage} />
                <Redirect from="/app" to="/app/home" />
              </Switch>
            </MainLayout>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Redirect from="/" to={isAuthenticated ? "/app/home" : "/login"} />
      </Switch>
    </Router>
  );
};