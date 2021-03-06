import { requireNativeComponent, UIManager } from 'react-native';
const VIEW_MANAGER_NAME = 'RNCViewPager';
export const ViewpagerViewManager = requireNativeComponent(VIEW_MANAGER_NAME);
export function getViewManagerConfig(viewManagerName = VIEW_MANAGER_NAME) {
  return UIManager.getViewManagerConfig(viewManagerName);
}
//# sourceMappingURL=ViewPagerNative.js.map