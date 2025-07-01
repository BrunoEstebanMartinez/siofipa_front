import paths, { rootPaths } from './paths';

export const dashboardRoutes = {
  label: 'Dashboard',
  labelDisable: true,
  children: []
};
export const appRoutes = {
  label: 'app',
  children: [
  ]
};

export const pagesRoutes = {
  label: 'pages',
  children: [

    {
      name: 'Authentication',
      icon: 'lock',
      active: true,
      children: [
        {
          name: 'Card',
          active: true,
          children: [
            {
              name: 'Login',
              to: paths.cardLogin,
              active: true
            },
            {
              name: 'Logout',
              to: paths.cardLogout,
              active: true
            },
            {
              name: 'Register',
              to: paths.cardRegister,
              active: true
            },
            {
              name: 'Forgot password',
              to: paths.cardForgotPassword,
              active: true
            },
            {
              name: 'Confirm mail',
              to: paths.cardConfirmMail,
              active: true
            },
            {
              name: 'Reset password',
              to: paths.cardResetPassword,
              active: true
            },
            {
              name: 'Lock screen',
              to: paths.cardLockScreen,
              active: true
            }
          ]
        },
      ]
    },
    {
      name: 'User',
      icon: 'user',
      active: true,
      children: [
        {
          name: 'Profile',
          to: paths.userProfile,
          active: true
        },
        {
          name: 'Settings',
          to: paths.userSettings,
          active: true
        }
      ]
    },
    {
      name: 'Errors',
      active: true,
      icon: 'exclamation-triangle',
      children: [
        {
          name: '404',
          to: paths.error404,
          active: true
        },
        {
          name: '500',
          to: paths.error500,
          active: true
        }
      ]
    },
  ]
};

export const modulesRoutes = {
  label: 'Modules',
  children: [
    {
      name: 'Forms',
      active: true,
      icon: 'file-alt',
      children: [
      ]
    }
  ]
};

export const documentationRoutes = {
  label: 'documentation',
  children: [
  ]
};

export default [
  dashboardRoutes,
  appRoutes,
  pagesRoutes,
  modulesRoutes,
  documentationRoutes
];
