import Fruits from './pages/Fruits';
import Vegetables from './pages/Vegetables';

export default [
  { path: '/', component: Fruits, exact: true },
  { path: '/vegetables', component: Vegetables }
];