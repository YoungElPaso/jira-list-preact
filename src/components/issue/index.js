import { h, Component } from "preact";
import twemoji from "twemoji";
// Some fake data to test w/.
import fake from "./fake-data.json";

/**
 * Issue detail component. Renders a single issue.
 * Note: `issue` comes from the URL, courtesy of our router
 */
export default class Issue extends Component {
  // Rendering the issue.
	render({ issue }) {
    // This is fake! Normally this would be loaded elsewhere...
		let iS = fake.issues[0];
		return (
      <section class="mt5 pa3 bg-light-gray">
        <h1 class="f3"> Issue: {issue.toUpperCase()} </h1>
        <h2 class="f4">
          <Status status={iS.status} />
          <Priority priority={iS.priority} />
          <Stars stars={iS.stars} />
        </h2>
        <Description description={iS.description} />
      </section>
		);
	}

  // Handle things like adding twemoji.
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
	render({ status }) {
		return (
      <div class="dib mr1">
        Status:
        <span class="bg-green dib mh1 pa1 br3 tc">
          {status.toLowerCase()}
        </span>
      </div>
		);
	}
}

// The actual Priority component.
class Priority extends Component {
	render({ priority }) {
    let p = priority.toLowerCase();

    let valMap = {
      'lowest': 'blue',
      'low' : 'green',
      'medium': 'orange',
      'high' : 'light-red',
      'highest': 'red'
    }
    let classVal = 'bg-orange';
    if (valMap.hasOwnProperty(p)) {
      classVal = valMap[p];
    }

		return (
      <div class="dib mr1">
        Priority:
        <span class={classVal + " dib mh1 pa1 br3 tc"}>
          {p}
        </span>
      </div>
		);
	}
}

// The actual Stars count component.
class Stars extends Component {
	render({ stars }) {
		return (
      <div class="dib mr1">
        <span class="bg-yellow dib mh1 pa1 br3 tc">
          {stars} ⭐
        </span>
      </div>
		);
	}
}

// The actual Description component.
class Description extends Component {
	render({ description }) {
		return (
      <div>
        <h3 class="f5"> Description: </h3>
        <p>
          {description}
        </p>
      </div>
		);
	}
}

// TODO: anything in '{}', e.g 'stars' is a variable that needs to be dynamic.

// TODO: data: add more load stuff. Presumably use id to load from store? Pouch or whatever. This is part of the component lifecycle, i.e. will be on mount or something.
