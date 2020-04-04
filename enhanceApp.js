import DrawerLayout from 'vue-drawer-layout'

import 'element-ui/lib/theme-chalk/index.css';
import { Menu, Submenu, MenuItem, MenuItemGroup, Autocomplete, Tabs, TabPane, Drawer } from 'element-ui';

export default ({
    Vue,
}) => {
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)
    Vue.use(Autocomplete)
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(DrawerLayout)
    Vue.use(Drawer)
}