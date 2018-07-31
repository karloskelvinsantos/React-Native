import Page1 from './Page1';
import Page2 from './Page2';

import { createDrawerNavigator } from 'react-navigation';

const DrawerNav = createDrawerNavigator({
    Home: Page1,
    About: Page2,
});

export default DrawerNav;