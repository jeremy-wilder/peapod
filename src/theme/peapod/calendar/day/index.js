import wrapper from 'utility/wrapper.jsx';
import unwrappedComponent from './component.jsx';
const wrappedComponent = wrapper(unwrappedComponent('Calendar_Day'));

import style from './style.js';

export { wrappedComponent as default, style as style };
