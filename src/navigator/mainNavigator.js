import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial173898Navigator from '../features/Tutorial173898/navigator';
import NotificationList173870Navigator from '../features/NotificationList173870/navigator';
import Settings173869Navigator from '../features/Settings173869/navigator';
import Settings173861Navigator from '../features/Settings173861/navigator';
import UserProfile173859Navigator from '../features/UserProfile173859/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial173898: { screen: Tutorial173898Navigator },
NotificationList173870: { screen: NotificationList173870Navigator },
Settings173869: { screen: Settings173869Navigator },
Settings173861: { screen: Settings173861Navigator },
UserProfile173859: { screen: UserProfile173859Navigator },

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
