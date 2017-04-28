import {h, Component} from 'preact';
import style from './style.less';

export default class Issue extends Component {
    // issue is from router.
    render ({issue}) {
        return (
            <section class='mt5 pa3 bg-light-gray'>
                <h1 class='f3'> Issue: {issue.toUpperCase()} </h1>
                <h2 class='f4'> Status: 
                    <span class='bg-green dib mh1 ph1 br3 center'>
                        {'Closed'.toLowerCase()}
                    </span>
                    &nbsp; Priority:
                    <span class='bg-orange dib mh1 ph1 br3 center'>
                        {'medium'.toLowerCase()}
                    </span>
                    &nbsp; Stars:
                    <span class='bg-yellow dib mh1 ph1 br3 ba bw1 b--white center'>
                        {5}
                    </span> 
                </h2>
                <div class=''>
                    <h3 class='f5'> Description: </h3>
                    <p>
                        Hello Joe! I'm an issue!
                    </p>
                </div>
            </section>
        );
    };
}

// TODO: anything in '{}', e.g 'stars' is a variable that needs to be dynamic.

// TODO: data: add more load stuff. Presumably use id to load from store? Pouch or whatever. This is part of the component lifecycle, i.e. will be on mount or something.