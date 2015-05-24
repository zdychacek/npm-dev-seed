import { Component, Template } from 'angular-decorators';
import myModule from './myModule';

@Component({
	selector: 'my-counter',
	bind: {
		start: '@'
	}
})
@Template({ inline: '<strong>{{myCounter.counter}}</strong>' })
class MyCounter {

	counter = 0;

	/*@ngInject*/
	constructor ($element, $timeout, PostFactory) {
		this.$timeout = $timeout;

		this.counter = this.start || 0;

		this.count();

		const post = PostFactory('title', 'some text');

		console.log(post, post.toString());
	}

	count () {
		this.counter++;

		this.$timeout(() => this.count(), 1000);
	}
}

myModule.add(MyCounter);
