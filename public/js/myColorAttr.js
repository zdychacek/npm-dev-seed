import { Decorator } from 'angular-decorators';
import myModule from './myModule';

@Decorator({ selector: '[my-color]' })
class MyColorAttr {
	/*@ngInject*/
	constructor ($element, $attrs) {
		$element.css({ color: $attrs.myColor });
	}
}

myModule.add(MyColorAttr);
