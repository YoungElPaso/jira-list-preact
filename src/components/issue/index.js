import {h, Component} from 'preact';
import style from './style.less';

export default class Issue extends Component {
    // issue is from router.
    render ({issue}) {
        return (
            <div class={style.issue}>
                <h1> Issue # {issue} </h1>
                <p>
                    Hello Joe! I'm an issue!
                </p>
            </div>
        );
    };
}

// TODO: add more load stuff. Presumably use id to load from store? Pouch or whatever.