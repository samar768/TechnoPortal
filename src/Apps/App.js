import React ,{useState}from "react";
import { connect } from 'react-redux';
import { Switch, Route, Link,Redirect } from "react-router-dom";
import { Header, Footer, Sidebar } from "../components/admin";
import { useLocation } from "react-router-dom";
import {
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

} from "../App_reference";
import { login } from "../redux/authRedux/authAction";
import { logout } from '../redux/authRedux/authAction';

// =================================Start Sale Modules======================================
const SaleOrder = React.lazy(() => import('../pages/Sales/Order'));
const SaleInvoice = React.lazy(() => import('../pages/Sales/SaleInvoice-Reel/SaleInvoice_Reel.jsx'));
const SaleOrderListings = React.lazy(() => import('../pages/Sales/Order/OrderListing.jsx'));

// =================================End Sale Modules========================================


// =================================Start Authentication Modules======================================
const LoginNew = React.lazy(() => import('../pages/Authentication/Login.jsx'));
// =================================End Sale Modules========================================




function App(props) {
  let location = useLocation().pathname;

  let locationSplit = location.split("/");
  let locationParent = locationSplit[1];
  let WithoutRouter = ["auth", "error", "utilities"];
  console.log(props.isAuthUser);

  const RenderDataFullScreen = () => {
    if (location === "/auth/forget-password") {
      return <ForgotPassword />;
    } else if (location === "/auth/register") {
      return <Register />;
    } else if (location === "/auth/reset-password") {
      return <ResetPassword />;
    } else if (location === "/error/503") {
      return <Error503 />;
    } else if (location === "/error/403") {
      return <Error403 />;
    } else if (location === "/error/404") {
      return <Error404 />;
    } else if (location === "/error/500") {
      return <Error500 />;
    } else if (location === "/utilities/subscribe") {
      return <Subscribe />;
    } else if (location === "/utilities/contact") {
      return <Contact />;
    }
  };
  // const isLoggedin = localStorage.getItem("TECHNO_SIGNED_IN");
 
    return (


      <div className="App">
        <>
   
          {
          !props.isAuthUser  ? (
            <>
                <React.Suspense fallback={<h1>Still Loading…</h1>}>
                  <Route path="/" exact component={LoginNew} />
                </React.Suspense>
            </>
          ) : (
            <>
            <Header />
            <Sidebar />
            </>
          
          )
          }

          <React.Suspense fallback={<h1>Still Loading…</h1>}>
            <Switch history={history}>
              {/* <Route path="/" exact component={Login} /> */}
              <Route path="/dashboard/EcommerceDashboard"  component={EcommerceDashboard} />
              <Route path="/dashboard/general" component={GeneralDashboard} />
              <Route path="/layout/default" component={DefaultLayoutPage} />
              <Route
                path="/layout/transparent-sidebar"
                component={TransparentSidebar}
              />
              <Route path="/bootstrap/alert" component={BootstrapAlert} />
              <Route path="/bootstrap/badge" component={BootstrapBadge} />
              <Route path="/bootstrap/breadcrumb" component={BootstrapBreadcrumb} />
              <Route path="/bootstrap/button" component={BootstrapButtons} />
              <Route path="/bootstrap/card" component={BootstrapCard} />
              <Route path="/bootstrap/carousel" component={BootstrapCarousel} />
              <Route path="/bootstrap/collapse" component={BootstrapCollapse} />
              <Route path="/bootstrap/dropdown" component={BootstrapDropDown} />
              <Route path="/bootstrap/form" component={BootstrapForm} />
              <Route path="/bootstrap/list-group" component={BootstrapListGroup} />
              <Route
                path="/bootstrap/media-object"
                component={BootstrapMediaObject}
              />
              <Route path="/bootstrap/modal" component={BootstrapModal} />
              <Route path="/bootstrap/nav" component={BootstrapNav} />
              <Route path="/bootstrap/navbar" component={BootstrapNavbar} />
              <Route path="/bootstrap/pagination" component={BootstrapPagination} />
              <Route path="/bootstrap/popover" component={BootstrapPopover} />
              <Route path="/bootstrap/Progress" component={BootstrapProgress} />
              <Route path="/bootstrap/table" component={BootstrapTable} />
              <Route path="/bootstrap/tooltip" component={BootstrapTooltip} />
              <Route path="/bootstrap/typography" component={BootstrapTypography} />
              <Route path="/component/article" component={CompArticle} />
              <Route path="/component/avatar" component={CompAvatar} />
              <Route path="/component/chat-box" component={CompChatbox} />
              <Route path="/component/empty-state" component={CompEmptystate} />
              <Route path="/component/gallery" component={CompGallery} />
              <Route path="/component/hero" component={CompHero} />
              <Route
                path="/component/multiple-upload"
                component={CompMultipleupload}
              />
              <Route path="/component/pricing" component={CompPricing} />
              <Route path="/component/statistic" component={CompStatics} />
              <Route path="/component/tab" component={CompTab} />
              <Route path="/component/table" component={CompTable} />
              <Route path="/component/user" component={CompUser} />
              <Route path="/component/wizard" component={CompWizard} />
              <Route path="/form/advance-form" component={FormAdvancedform} />
              <Route path="/form/editor" component={FormEditor} />
              <Route path="/form/validation" component={FormValidation} />
              <Route path="/google-maps/advance-route" component={AdvancedRoute} />
              <Route
                path="/google-maps/draggable-marker"
                component={DraggableMarker}
              />
              <Route path="/google-maps/geocoding" component={GeoCoding} />
              <Route path="/google-maps/geolocation" component={GeoLocation} />
              <Route path="/google-maps/marker" component={Marker} />
              <Route
                path="/google-maps/multiple-marker"
                component={MultipleMarker}
              />
              <Route path="/google-maps/route" component={GRoute} />
              <Route path="/google-maps/simple" component={Simple} />
              <Route path="/module/calendar" component={Calender} />
              <Route path="/module/chartjs" component={Chart} />
              <Route path="/module/datatables" component={DataTables} />
              <Route path="/module/flag" component={Flag} />
              <Route path="/module/font-awesome" component={FontAwesome} />
              <Route path="/module/ion-icons" component={IonIcons} />
              <Route path="/module/owl-carousel" component={OwlCarousel} />
              <Route path="/module/sparkline" component={Sparkline} />
              <Route path="/module/sweetalert" component={SweetAlert} />
              <Route path="/module/toastr" component={Toastr} />
              <Route path="/module/vector-map" component={VectorMap} />
              <Route path="/module/weather-icons" component={WeatherIcon} />
              <Route path="/feature/activities" component={Activities} />
              <Route path="/feature/post-create" component={PostCreate} />
              <Route path="/feature/posts" component={Posts} />
              <Route path="/feature/profile" component={Profile} />
              <Route path="/feature/Settings" component={Settings} />
              <Route path="/feature/setting-detail" component={SettingDetail} />
              <Route path="/feature/tickets" component={Tickets} />
              <Route path="/credit" component={Credit} />
              <Route path="/utilitie/Invoice" component={Invoice} />
              <Route path="/auth/login" component={Login} />
              <Route path="/auth/forget-password" component={ForgotPassword} />
              <Route path="/auth/reset-password" component={ResetPassword} />
              <Route path="/error/503" component={Error503} />
              <Route path="/error/404" component={Error404} />
              <Route path="/error/403" component={Error403} />
              <Route path="/error/503" component={Error500} />
              <Route path="/utilities/subscribe" component={Subscribe} />
              <Route path="/utilities/contact" component={Contact} />

              {/* Start Sales Modules */}
              <Route
                path="/sales/saleorder"
                render={(props) => (
                  <SaleOrder {...props}
                    order_type={'View'}
                    order_id={'12312321'}
                  />
                )}
              />

               <Route
                path="/sales/orderListings"
                render={(props) => (
                  <SaleOrderListings {...props}
                  />
                )}
              />
              <Route
                path="/sales/saleInvoice-Reel"
                render={(props) => (
                  <SaleInvoice {...props}
                    order_type={'View'}
                    order_id={'12312321'}
                  />
                )}
              />
              {/* End Sales Modules */}
            </Switch>
          </React.Suspense>
          <Footer />
        </>
      </div>
    );

  }


  const mapStateToProps = (state) => {
    return {
      isAuthUser: state.authData.isAuthUser
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      logout: () => {
        return dispatch(logout());
      }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(App);
  
