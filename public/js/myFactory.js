import { Factory, Inject } from 'angular-decorators';
import myModule from './myModule';
import assert from 'assert';

@Factory('PostFactory')
@Inject('$http')
class PostFactory {
	constructor ($http, title, content) {
		assert($http);

		this.title = title;
		this.content = content;
	}

	toString () {
		return `Post - title: ${this.title}, content: ${this.content}`;
	}
}

myModule.add(PostFactory);
