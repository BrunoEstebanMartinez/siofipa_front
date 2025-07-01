export const rootPaths = {
  root: '/',
  appsRoot: 'app',
  pagesRoot: 'pages',
  authRoot: 'authentication',
  authCardRoot: 'inicio'
};

export default {
  starter: `/${rootPaths.pagesRoot}/starter`,
  cardLogin: `/${rootPaths.authRoot}/${rootPaths.authCardRoot}/login`,
  cardRegister: `/${rootPaths.authRoot}/${rootPaths.authCardRoot}/register`,

};
