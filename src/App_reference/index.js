import React ,{useState}from "react";
import { connect } from 'react-redux';
import { Switch, Route, Link,Redirect } from "react-router-dom";
import { Header,
         Footer,
         Sidebar 
        } from "../components/admin";

// import OwlCarousel from "./pages/Modules/OwlCarousel";
// import Sparkline from "./pages/Modules/Sparkline";
// import SweetAlert from "./pages/Modules/SweetAlert";
// import Toastr from "./pages/Modules/Toastr";
// import VectorMap from "./pages/Modules/VectorMap";
// import WeatherIcon from "./pages/Modules/WeatherIcon";
import { useLocation } from "react-router-dom";
// import Subscribe from "./pages/Pages/Utilities/Subscribe";
// import Contact from "./pages/Pages/Utilities/Contact";
// import Invoice from "./pages/Pages/Utilities/Invoice";
// import TransparentSidebar from "./pages/Strater/TransparentSidebar";
// import Profile from "./pages/Pages/Features/Profile";
// import SettingDetail from "./pages/Pages/Features/SettingDetail";
// import Settings from "./pages/Pages/Features/Settings";
// import Tickets from "./pages/Pages/Features/Tickets";
// import Calender from "./pages/Modules/Calender";
// import Chart from "./pages/Modules/Chart";
// import DataTables from "./pages/Modules/DataTables";
// import Flag from "./pages/Modules/Flag";
// import FontAwesome from "./pages/Modules/FontAwesome";
// import IonIcons from "./pages/Modules/IonIcons";
// import Error403 from "./pages/Pages/Errors/403";
// import Error404 from "./pages/Pages/Errors/404";
// import Error500 from "./pages/Pages/Errors/500";
// import Error503 from "./pages/Pages/Errors/503";
// import Activities from "./pages/Pages/Features/Activities";
// import PostCreate from "./pages/Pages/Features/PostCreate";
// import Posts from "./pages/Pages/Features/Posts";


import EcommerceDashboard from "../pages/Dashboard/EcommerceDashboard";
import GeneralDashboard from "../pages/Dashboard/GeneralDashboard";
import DefaultLayoutPage from "../pages/Strater/DefaultLayoutPage";
import BootstrapAlert from "../pages/Strater/Bootstrap/BootstrapAlert";
import BootstrapBadge from "../pages/Strater/Bootstrap/BootstrapBadge";
import BootstrapButtons from "../pages/Strater/Bootstrap/BootstrapButtons";
import BootstrapCard from "../pages/Strater/Bootstrap/BootstrapCard";
import BootstrapCarousel from "../pages/Strater/Bootstrap/BootstrapCarousel";
import BootstrapBreadcrumb from "../pages/Strater/Bootstrap/BootstrapBreadcrumb";
import BootstrapCollapse from "../pages/Strater/Bootstrap/BootstrapCollapse";
import BootstrapDropDown from "../pages/Strater/Bootstrap/BootstrapDropDown";
import BootstrapForm from "../pages/Strater/Bootstrap/BootstrapForm";
import BootstrapListGroup from "../pages/Strater/Bootstrap/BootstrapListGroup";
import BootstrapMediaObject from "../pages/Strater/Bootstrap/BootstrapMediaObject";
import BootstrapModal from "../pages/Strater/Bootstrap/BootstrapModal";
import BootstrapNav from "../pages/Strater/Bootstrap/BootstrapNav";
import BootstrapNavbar from "../pages/Strater/Bootstrap/BootstrapNavbar";
import BootstrapPagination from "../pages/Strater/Bootstrap/BootstrapPagination";
import BootstrapProgress from "../pages/Strater/Bootstrap/BootstrapProgress";
import BootstrapTable from "../pages/Strater/Bootstrap/BootstrapTable";
import BootstrapTooltip from "../pages/Strater/Bootstrap/BootstrapTooltip";
import BootstrapTypography from "../pages/Strater/Bootstrap/BootstrapTypography";
import BootstrapPopover from "../pages/Strater/Bootstrap/BootstrapPopover";
import CompArticle from "../pages/Components/CompArticle";
import CompAvatar from "../pages/Components/CompAvatar";
import CompChatbox from "../pages/Components/CompChatbox";
import CompEmptystate from "../pages/Components/CompEmptystate";
import CompGallery from "../pages/Components/CompGallery";
import CompHero from "../pages/Components/CompHero";
import CompMultipleupload from "../pages/Components/CompMultipleupload";
import CompPricing from "../pages/Components/CompPricing";
import CompStatics from "../pages/Components/CompStatics";
import CompTab from "../pages/Components/CompTab";
import CompTable from "../pages/Components/CompTable";
import CompUser from "../pages/Components/CompUser";
import CompWizard from "../pages/Components/CompWizard";
import AdvancedRoute from "../pages/Google Maps/AdvancedRoute";
import DraggableMarker from "../pages/Google Maps/DraggableMarker";
import GeoCoding from "../pages/Google Maps/GeoCoding";
import GeoLocation from "../pages/Google Maps/GeoLocation";
import Marker from "../pages/Google Maps/Marker";
import MultipleMarker from "../pages/Google Maps/MultipleMarker";
import GRoute from "../pages/Google Maps/Route";
import Simple from "../pages/Google Maps/Simple";
import FormValidation from "../pages/Forms/FormValidation";
import FormEditor from "../pages/Forms/FormEditor";
import FormAdvancedform from "../pages/Forms/FormAdvancedform";
import ForgotPassword from "../pages/Pages/Auth/ForgotPassword";
import Login from "../pages/Pages/Auth/Login";
import Register from "../pages/Pages/Auth/Register";
import ResetPassword from "../pages/Pages/Auth/ResetPassword";
import Credit from "../pages/Pages/Credits";
import { login } from "../redux/authRedux/authAction";
import { logout } from '../redux/authRedux/authAction';




// const Posts = React.lazy(() => import('./pages/Pages/Features/Posts'));
// const Posts = React.lazy(() => import('./pages/Pages/Features/Posts'));
// const Posts = React.lazy(() => import('./pages/Pages/Features/Posts'));
// const Posts = React.lazy(() => import('./pages/Pages/Features/Posts'));
// const Posts = React.lazy(() => import('./pages/Pages/Features/Posts'));
// const Posts = React.lazy(() => import('./pages/Pages/Features/Posts'));

const Error403 = React.lazy(() => import('../pages/Pages/Errors/403'));
const Error404 = React.lazy(() => import('../pages/Pages/Errors/404'));
const Error500 = React.lazy(() => import('../pages/Pages/Errors/500'));
const Error503 = React.lazy(() => import('../pages/Pages/Errors/503'));

const Activities = React.lazy(() => import('../pages/Pages/Features/Activities'));
const PostCreate = React.lazy(() => import('../pages/Pages/Features/PostCreate'));
const Posts = React.lazy(() => import('../pages/Pages/Features/Posts'));
const Profile = React.lazy(() => import('../pages/Pages/Features/Profile'));

const SettingDetail = React.lazy(() => import('../pages/Pages/Features/SettingDetail'));
const Settings = React.lazy(() => import('../pages/Pages/Features/Settings'));
const Tickets = React.lazy(() => import('../pages/Pages/Features/Tickets'));
const Calender = React.lazy(() => import('../pages/Modules/Calender'));
const Chart = React.lazy(() => import('../pages/Modules/Chart'));

const DataTables = React.lazy(() => import('../pages/Modules/DataTables'));
const Flag = React.lazy(() => import('../pages/Modules/Flag'));
const FontAwesome = React.lazy(() => import('../pages/Modules/FontAwesome'));
const IonIcons = React.lazy(() => import('../pages/Modules/IonIcons'));
const OwlCarousel = React.lazy(() => import('../pages/Modules/OwlCarousel'));

const Sparkline = React.lazy(() => import('../pages/Modules/Sparkline'));
const SweetAlert = React.lazy(() => import('../pages/Modules/SweetAlert'));
const Toastr = React.lazy(() => import('../pages/Modules/Toastr'));
const VectorMap = React.lazy(() => import('../pages/Modules/VectorMap'));

const WeatherIcon = React.lazy(() => import('../pages/Modules/WeatherIcon'));
const Subscribe = React.lazy(() => import('../pages/Pages/Utilities/Subscribe'));

const Invoice = React.lazy(() => import('../pages/Pages/Utilities/Invoice'));
const TransparentSidebar = React.lazy(() => import('../pages/Strater/TransparentSidebar'));
const Contact = React.lazy(() => import('../pages/Pages/Utilities/Contact'));

const history = React.lazy(() => import('../Apps/history'));

// export for ease of access
export {
  Header,
  Footer,
  Sidebar ,
  EcommerceDashboard,
  GeneralDashboard,
  DefaultLayoutPage,
  BootstrapAlert,
  BootstrapBadge,
  BootstrapButtons,
  BootstrapCard,
  BootstrapCarousel,
  BootstrapBreadcrumb,
  BootstrapCollapse,
  BootstrapDropDown,
  BootstrapForm,
  BootstrapListGroup,
  BootstrapMediaObject,
  BootstrapModal,
  BootstrapNav,
  BootstrapNavbar,
  BootstrapPagination,
  BootstrapProgress,
  BootstrapTable,
  BootstrapTooltip,
  BootstrapTypography,
  BootstrapPopover,
  CompArticle,
  CompAvatar,
  CompChatbox,
  CompEmptystate,
  CompGallery,
  CompHero,
  CompMultipleupload,
  CompPricing,
  CompStatics,
  CompTab,
  CompTable,
  CompUser,
  CompWizard,
  AdvancedRoute,
  DraggableMarker,
  GeoCoding,
  GeoLocation,
  Marker,
  MultipleMarker,
  GRoute,
  Simple,
  FormValidation,
  FormEditor,
  FormAdvancedform,
  ForgotPassword,
  Login,
  Register,
  ResetPassword,
  Credit,
  login,
  logout,
  Error403,
  Error404,
  Error500,
  Error503,
  Activities,
  PostCreate,
  Posts,
  Profile,
  SettingDetail,
  Settings,
  Tickets,
  Calender,
  Chart,
  DataTables,
  Flag,
  FontAwesome,
  IonIcons,
  OwlCarousel,
  Sparkline,
  SweetAlert,
  Toastr,
  VectorMap,
  WeatherIcon,
  Subscribe,
  Invoice,
  TransparentSidebar,
  Contact,
  history
}





















































  



















