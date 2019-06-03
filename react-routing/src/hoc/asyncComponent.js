import React, {Component} from 'react';

const AsyncComponent = (importComponent) => {
    return class extends Component {
        state = {component: null}

        componentDidMount = () => {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        render() {
            const LazyCmp = this.state.component;

            return LazyCmp ? <LazyCmp {...this.props} /> : null;
        }
    }
}

export default AsyncComponent;