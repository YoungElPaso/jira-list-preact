import { h, Component } from "preact";
import twemoji from "twemoji";

// Some fake data to test w/.
const faker = {
	stars: 15,
	status: "opened",
	priority: "medium",
	description: "Hello Joe! I'm an issue! :)"
};

/**
 * Issue detail component. Renders a single issue.
 * Note: `issue` comes from the URL, courtesy of our router
 */
export default class Issue extends Component {
  // Rendering the issue.
	render({ issue }) {
		return (
      <section class="mt5 pa3 bg-light-gray">
        <h1 class="f3"> Issue: {issue.toUpperCase()} </h1>
        <h2 class="f4">
          <Status />
          <Priority />
          <Stars />
        </h2>
        <Description />
      </section>
		);
	}

  // Adding some stuff to do after render.
	componentDidMount() {
		twemoji.parse(this.base, {
			folder: "svg",
			ext: ".svg",
			className: "w1 mr1"
		});
	}
}

// The actual Priority component.
class Status extends Component {
	render({ issue_status }) {
		let fakeStatus = faker.status;
		return (
      <div class="dib mr1">
        Status:
        <span class="bg-green dib mh1 pa1 br3 tc">
          {fakeStatus.toLowerCase()}
        </span>
      </div>
		);
	}
}

// The actual Priority component.
class Priority extends Component {
	render({ issue_priority }) {
		let fakePriority = faker.priority;
		return (
      <div class="dib mr1">
        Priority:
        <span class="bg-orange dib mh1 pa1 br3 tc">
          {fakePriority.toLowerCase()} 🔺
        </span>
      </div>
		);
	}
}

// The actual Stars count component.
class Stars extends Component {
	render({ issue_stars }) {
		let fakeStars = faker.stars;
		return (
      <div class="dib mr1">
        <span class="bg-yellow dib mh1 pa1 br3 tc">
          {fakeStars} ⭐
        </span>
      </div>
		);
	}
}

// The actual Stars count component.
class Description extends Component {
	render({ issue_description }) {
		let fakeDescription = faker.description;
		return (
      <div>
        <h3 class="f5"> Description: </h3>
        <p>
          {fakeDescription}
        </p>
      </div>
		);
	}
}

// TODO: anything in '{}', e.g 'stars' is a variable that needs to be dynamic.

// TODO: data: add more load stuff. Presumably use id to load from store? Pouch or whatever. This is part of the component lifecycle, i.e. will be on mount or something.
