import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen71173909Navigator from '../features/BlankScreen71173909/navigator';
import UserProfile173899Navigator from '../features/UserProfile173899/navigator';
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
BlankScreen71173909: { screen: BlankScreen71173909Navigator },
UserProfile173899: { screen: UserProfile173899Navigator },
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
