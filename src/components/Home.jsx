import {Component} from "react";

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showWelcomeMessage: true
        };
    }


    componentDidMount() {
        // Masquer le message après 3 secondes
        setTimeout(() => {
            this.setState({ showWelcomeMessage: false });
        }, 3000);


    }

    render() {
        const { showWelcomeMessage } = this.state;

        return (
            <div>
                {showWelcomeMessage && (
                    <h1>Welcome to Our Competition World</h1>
                )}
            </div>
        );
    }
}