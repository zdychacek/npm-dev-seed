import { Decorator, Inject } from 'angular-decorators';
import myModule from './myModule';

@Decorator({ selector: '[my-color]' })
@Inject('$element', '$attrs')
class MyColorAttr {
	constructor ($element, $attrs) {
		$element.css({ color: $attrs.myColor });
	}
}

myModule.add(MyColorAttr);
