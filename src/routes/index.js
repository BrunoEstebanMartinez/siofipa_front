import React from 'react';
import App from 'App';
import paths, { rootPaths } from './paths';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import AuthSimpleLayout from '../layouts/AuthSimpleLayout';
import MainLayout from '../layouts/MainLayout';
import ErrorLayout from '../layouts/ErrorLayout';
import WizardAuth from 'components/authentication/wizard/WizardAuth';
import Landing from 'components/pages/landing/Landing';
import Accordion from 'components/doc-components/Accordion';
import Alerts from 'components/doc-components/Alerts';
import Badges from 'components/doc-components/Badges';
import Breadcrumbs from 'components/doc-components/Breadcrumb';
import Buttons from 'components/doc-components/Buttons';
import CalendarExample from 'components/doc-components/CalendarExample';
import Cards from 'components/doc-components/Cards';
import Dropdowns from 'components/doc-components/Dropdowns';
import ListGroups from 'components/doc-components/ListGroups';
import Modals from 'components/doc-components/Modals';
import Offcanvas from 'components/doc-components/Offcanvas';
import Pagination from 'components/doc-components/Pagination';
import BasicProgressBar from 'components/doc-components/ProgressBar';
import Spinners from 'components/doc-components/Spinners';
import Toasts from 'components/doc-components/Toasts';
import Avatar from 'components/doc-components/Avatar';
import Image from 'components/doc-components/Image';
import Tooltips from 'components/doc-components/Tooltips';
import Popovers from 'components/doc-components/Popovers';
import Figures from 'components/doc-components/Figures';
import Hoverbox from 'components/doc-components/Hoverbox';
import Tables from 'components/doc-components/Tables';
import FormControl from 'components/doc-components/FormControl';
import InputGroup from 'components/doc-components/InputGroup';
import Select from 'components/doc-components/Select';
import Checks from 'components/doc-components/Checks';
import Range from 'components/doc-components/Range';
import FormLayout from 'components/doc-components/FormLayout';
import FloatingLabels from 'components/doc-components/FloatingLabels';
import FormValidation from 'components/doc-components/FormValidation';
import BootstrapCarousel from 'components/doc-components/BootstrapCarousel';
import SlickCarousel from 'components/doc-components/SlickCarousel';
import Navs from 'components/doc-components/Navs';
import Navbars from 'components/doc-components/Navbars';
import Tabs from 'components/doc-components/Tabs';
import Collapse from 'components/doc-components/Collapse';
import CountUp from 'components/doc-components/CountUp';
import Embed from 'components/doc-components/Embed';
import Backgrounds from 'components/doc-components/Backgrounds';
import Search from 'components/doc-components/Search';
import VerticalNavbar from 'components/doc-components/VerticalNavbar';
import NavBarTop from 'components/doc-components/NavBarTop';
import NavbarDoubleTop from 'components/doc-components/NavbarDoubleTop';
import ComboNavbar from 'components/doc-components/ComboNavbar';
import TypedText from 'components/doc-components/TypedText';
import FileUploader from 'components/doc-components/FileUploader';
import Borders from 'components/utilities/Borders';
import Colors from 'components/utilities/Colors';
import Background from 'components/utilities/Background';
import ColoredLinks from 'components/utilities/ColoredLinks';
import Display from 'components/utilities/Display';
import Visibility from 'components/utilities/Visibility';
import StretchedLink from 'components/utilities/StretchedLink';
import Float from 'components/utilities/Float';
import Position from 'components/utilities/Position';
import Spacing from 'components/utilities/Spacing';
import Sizing from 'components/utilities/Sizing';
import TextTruncation from 'components/utilities/TextTruncation';
import Typography from 'components/utilities/Typography';
import VerticalAlign from 'components/utilities/VerticalAlign';
import Flex from 'components/utilities/Flex';
import Grid from 'components/utilities/Grid';
import WizardForms from 'components/doc-components/WizardForms';
import GettingStarted from 'components/documentation/GettingStarted';
import Configuration from 'components/documentation/Configuration';
import DarkMode from 'components/documentation/DarkMode';
import Plugins from 'components/documentation/Plugins';
import Styling from 'components/documentation/Styling';
import DesignFile from 'components/documentation/DesignFile';
import Starter from 'components/pages/Starter';
import AnimatedIcons from 'components/doc-components/AnimatedIcons';
import DatePicker from 'components/doc-components/DatePicker';
import FontAwesome from 'components/doc-components/FontAwesome';
import Changelog from 'components/documentation/change-log/ChangeLog';
import Analytics from 'components/dashboards/analytics';
import Crm from 'components/dashboards/crm';
import Saas from 'components/dashboards/saas';
import Profile from 'components/pages/user/profile/Profile';
import Associations from 'components/pages/asscociations/Associations';
import Followers from 'components/app/social/followers/Followers';
import Notifications from 'components/app/social/notifications/Notifications';
import ActivityLog from 'components/app/social/activity-log/ActivityLog';
import Settings from 'components/pages/user/settings/Settings';
import Feed from 'components/app/social/feed/Feed';
import Placeholder from 'components/doc-components/Placeholder';
import Lightbox from 'components/doc-components/Lightbox';
import AdvanceTableExamples from 'components/doc-components/AdvanceTableExamples';
import Calendar from 'components/app/calendar/Calendar';
import FaqAlt from 'components/pages/faq/faq-alt/FaqAlt';
import FaqBasic from 'components/pages/faq/faq-basic/FaqBasic';
import FaqAccordion from 'components/pages/faq/faq-accordion/FaqAccordion';
import PrivacyPolicy from 'components/pages/miscellaneous/privacy-policy/PrivacyPolicy';
import InvitePeople from 'components/pages/miscellaneous/invite-people/InvitePeople';
import PricingDefault from 'components/pages/pricing/pricing-default/PricingDefault';
import PricingAlt from 'components/pages/pricing/pricing-alt/PricingAlt';
import Invoice from 'components/app/e-commerce/Invoice';
import Billing from 'components/app/e-commerce/billing/Billing';
import Checkout from 'components/app/e-commerce/checkout/Checkout';
import ShoppingCart from 'components/app/e-commerce/cart/ShoppingCart';
import CustomersDetails from 'components/app/e-commerce/customers-details/CustomersDetails';
import OrderDetails from 'components/app/e-commerce/orders/order-details/OrderDetails';
import Products from 'components/app/e-commerce/product/Products';
import ProductDetails from 'components/app/e-commerce/product/product-details/ProductDetails';
import AddProduct from 'components/app/e-commerce/product/add-product/AddProduct';
import Orders from 'components/app/e-commerce/orders/order-list/Orders';
import Customers from 'components/app/e-commerce/customers/Customers';
import Courses from 'components/app/e-learning/course/Courses';
import CourseDetails from 'components/app/e-learning/course/course-details';
import CreateCourse from 'components/app/e-learning/course/create-a-course';
import TrainerProfile from 'components/app/e-learning/trainer-profile';
import StudentOverview from 'components/app/e-learning/student-overview';
import CreateEvent from 'components/app/events/create-an-event/CreateEvent';
import EventList from 'components/app/events/event-list/EventList';
import EventDetail from 'components/app/events/event-detail/EventDetail';
import EmailDetail from 'components/app/email/email-detail/EmailDetail';
import Compose from 'components/app/email/compose/Compose';
import Inbox from 'components/app/email/inbox/Inbox';
import Rating from 'components/doc-components/Rating';
import AdvanceSelect from 'components/doc-components/AdvanceSelect';
import Editor from 'components/doc-components/Editor';
import Chat from 'components/app/chat/Chat';
import Kanban from 'components/app/kanban/Kanban';
import DraggableExample from 'components/doc-components/DraggableExample';
import LineCharts from 'components/doc-components/charts-example/echarts/line-charts';
import BarCharts from 'components/doc-components/charts-example/echarts/bar-charts';
import CandlestickCharts from 'components/doc-components/charts-example/echarts/candlestick-charts';
import GeoMaps from 'components/doc-components/charts-example/echarts/geo-map';
import ScatterCharts from 'components/doc-components/charts-example/echarts/scatter-charts';
import PieCharts from 'components/doc-components/charts-example/echarts/pie-charts';
import RadarCharts from 'components/doc-components/charts-example/echarts/radar-charts/Index';
import HeatmapCharts from 'components/doc-components/charts-example/echarts/heatmap-chart';
import Chartjs from 'components/doc-components/charts-example/chartjs';
import D3js from 'components/doc-components/charts-example/d3';
import HowToUse from 'components/doc-components/charts-example/echarts/HowToUse';
import GoogleMapExample from 'components/doc-components/GoogleMapExample';
import LeafletMapExample from 'components/doc-components/LeafletMapExample';
import CookieNoticeExample from 'components/doc-components/CookieNoticeExample';
import Scrollbar from 'components/doc-components/Scrollbar';
import Scrollspy from 'components/doc-components/Scrollspy';
import ReactIcons from 'components/doc-components/ReactIcons';
import ReactPlayerExample from 'components/doc-components/ReactPlayerExample';
import EmojiMartExample from 'components/doc-components/EmojiMart';
import TreeviewExample from 'components/doc-components/TreeviewExample';
import Timeline from 'components/doc-components/Timeline';
import Widgets from 'widgets/Widgets';
import Ecommerce from 'components/dashboards/e-commerce';
import Lms from 'components/dashboards/lms';
import ProjectManagement from 'components/dashboards/project-management';

import Error404 from 'components/errors/Error404';
import Error500 from 'components/errors/Error500';

import SimpleLogin from 'components/authentication/simple/Login';
import SimpleLogout from 'components/authentication/simple/Logout';
import SimpleRegistration from 'components/authentication/simple/Registration';
import SimpleForgetPassword from 'components/authentication/simple/ForgetPassword';
import SimplePasswordReset from 'components/authentication/simple/PasswordReset';
import SimpleConfirmMail from 'components/authentication/simple/ConfirmMail';
import SimpleLockScreen from 'components/authentication/simple/LockScreen';
import CardLogin from 'components/authentication/card/Login';
import CardLogout from 'components/authentication/card/Logout';
import CardRegistration from 'components/authentication/card/Registration';
import CardForgetPassword from 'components/authentication/card/ForgetPassword';
import CardConfirmMail from 'components/authentication/card/ConfirmMail';
import CardPasswordReset from 'components/authentication/card/PasswordReset';
import CardLockScreen from 'components/authentication/card/LockScreen';
import SplitLogin from 'components/authentication/split/Login';
import SplitLogout from 'components/authentication/split/Logout';
import SplitRegistration from 'components/authentication/split/Registration';
import SplitForgetPassword from 'components/authentication/split/ForgetPassword';
import SplitPasswordReset from 'components/authentication/split/PasswordReset';
import SplitConfirmMail from 'components/authentication/split/ConfirmMail';
import SplitLockScreen from 'components/authentication/split/LockScreen';
import Dashboard from 'components/dashboards/default';
import Faq from 'components/documentation/Faq';
import SupportDesk from 'components/dashboards/support-desk';
import TableView from 'components/app/support-desk/tickets-layout/TableView';
import CardView from 'components/app/support-desk/tickets-layout/CardView';
import Contacts from 'components/app/support-desk/contacts/Contacts';
import ContactDetails from 'components/app/support-desk/contact-details/ContactDetails';
import TicketsPreview from 'components/app/support-desk/tickets-preview/TicketsPreview';
import QuickLinks from 'components/app/support-desk/quick-links/QuickLinks';
import Reports from 'components/app/support-desk/reports/Reports';
import InputMaskExample from 'components/doc-components/InputMaskExample';
import RangeSlider from 'components/doc-components/RangeSlider';
import { path } from 'd3';


const routes = [
  {
    path: rootPaths.root,
    element: <CardLogin />,
    children: [
      {

      },
      // {
      //   // rutas para autenticación
      //   // ruta padre 
      //   path: rootPaths.authRoot,
      //   // conjunto de rutas hijas que componen la ruta padre de autenticación
      //   children: [
      //     {
      //       path: rootPaths.authCardRoot,
      //       children: [
      //         {
      //           path: paths.cardLogin,
      //           element: <CardLogin />
      //         },
      //         {
      //           path: paths.cardRegister,
      //           element: <CardRegistration />
      //         },
      //         {
      //           path: paths.cardLogout,
      //           element: <CardLogout />
      //         },
      //         {
      //           path: paths.cardForgotPassword,
      //           element: <CardForgetPassword />
      //         },
      //         {
      //           path: paths.cardResetPassword,
      //           element: <CardPasswordReset />
      //         },
      //         {
      //           path: paths.cardConfirmMail,
      //           element: <CardConfirmMail />
      //         },
      //         {
      //           path: paths.cardLockScreen,
      //           element: <CardLockScreen />
      //         }
      //       ]
      //     },
      //     {
      //       path: paths.authWizard,
      //       element: <WizardAuth />
      //     }
      //   ]
      // },
      // {
      //   //root path
      //   path: '/inicio',
      //   element: <MainLayout />,
      //   children: [
      //     {
      //       index: false,
      //       element: <Dashboard />
      //     },
      //     {
      //       path: rootPaths.dashboardRoot,
      //       children: [
      //         {
      //           path: paths.analytics,
      //           element: <Analytics />
      //         },
      //         {
      //           path: paths.crm,
      //           element: <Crm />
      //         },
      //         {
      //           path: paths.saas,
      //           element: <Saas />
      //         },
      //         {
      //           path: paths.ecommerce,
      //           element: <Ecommerce />
      //         },
      //         {
      //           path: paths.lms,
      //           element: <Lms />
      //         },
      //         {
      //           path: paths.projectManagement,
      //           element: <ProjectManagement />
      //         },
      //         {
      //           path: paths.supportDesk,
      //           element: <SupportDesk />
      //         }
      //       ]
      //     },
      //   ]
      // },
      {
        path: '*',
        element: <Navigate to={paths.error404} replace />
      }
    ]
  }
];

export const router = createBrowserRouter(routes, {
  basename: process.env.PUBLIC_URL
});

export default routes;
