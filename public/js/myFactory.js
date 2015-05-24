import { Factory, Inject } from 'angular-decorators';
import myModule from './myModule';

@Factory('PostFactory')
@Inject('$http')
class Post {
	constructor ($http, title, content) {
		this.title = title;
		this.content = content;

		this.$http = $http;

		console.log($http);
	}

	toString () {
		return `Post - title: ${this.title}, content: ${this.content}`;
	}

	static create (dependencies, title, content) {
		return new Post(...dependencies, title, content);
	}
}

myModule.add(Post);
