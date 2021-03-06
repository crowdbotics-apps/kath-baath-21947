import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile161307Navigator from '../features/UserProfile161307/navigator';
import Settings161306Navigator from '../features/Settings161306/navigator';
import Settings161304Navigator from '../features/Settings161304/navigator';
import SignIn2161302Navigator from '../features/SignIn2161302/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile161307: { screen: UserProfile161307Navigator },
Settings161306: { screen: Settings161306Navigator },
Settings161304: { screen: Settings161304Navigator },
SignIn2161302: { screen: SignIn2161302Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
