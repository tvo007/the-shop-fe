import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {RouteWithLayout} from './components';
// import {PrivateRouteWithLayout} from './components';
import {Main} from './layouts';
import {Landing, Products} from './views';

//experiemntal redux addition
// import {connect} from 'react-redux';

const Routes = () => {
  //const authIdRoute = `/profile/${_id}`;

  return (
    <div>

      <Switch>
        <RouteWithLayout component={Landing} exact layout={Main} path="/" />
        <RouteWithLayout
          component={Products}
          exact
          layout={Main}
          path="/products"
        />

      </Switch>
    </div>
  );
};

// const mapStateToProps = state => ({
//   auth: state.auth,
//   project: state.project,
// });

// export default connect (mapStateToProps) (Routes);

export default Routes;

/**
 * temp dump: 
 * props: {auth: {user: _id}}
 * 
 * layout comps: 
 * 
 * 
 * <Redirect exact from="/" to="/dashboard" />
            
      
 * <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />

      <PrivateRouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <PrivateRouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <PrivateRouteWithLayout
        component={ProjectListView}
        exact
        layout={MainLayout}
        path="/projects"
      />
      <PrivateRouteWithLayout
        component={ProjectView} // to be refined into unique project route
        exact
        layout={MainLayout}
        path="/projects/:id"
      />
      <PrivateRouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <PrivateRouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <PrivateRouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/profile/me"
      />
      <PrivateRouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <PrivateRouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
 * 
 * 
 */
