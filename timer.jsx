import React, { Component } from 'react'
import ButtonGroupe from './ButtonGroupe';
import { toast } from 'react-toastify';
import Display from './Display';
import Message from './Message';


export default class timer extends Component {
    state = {
        initialize: 10,
        duration: 10,
        handle: 0,
        message: ''
    };

    notify = (text, type) => {
        toast[type](text, { autoClose: 1500 });
    }

    prependZero = value => {
        return value < 10 ? "0" + value.toString() : value.toString();
    }
    formatDuration = () => {
        const minutes = Math.floor(this.state.duration / 60);
        const secondes = Math.floor(this.state.duration % 60);
        return `${this.prependZero(minutes)}:${this.prependZero(secondes)}`;
    }

    componentDidMount() {
        this.setState({
            initialize: parseInt(this.props.duration, 10) * 60,
            duration: parseInt(this.props.duration, 10) * 60
        })
    }

    componentWillUnmount() {
        this.clean();
    }

    count = () => {
        this.setState({
            duration: this.state.duration - 1
        });
        if (this.state.duration === 0) {
            this.clean();

            this.setState({ message: 'termine' })

        }
    }
    clean = (message) => {
        clearInterval(this.state.handle)
        this.setState({ message: message })
    }
    start = () => {
        const handle = setInterval(() => {
            this.count()
        }, 1000);
        this.setState({ handle: handle, message: '' })
        this.clean('start');

    }
    stop = () => {
        this.notify('en pause', 'warn');
        this.clean('mis en pause');
    }
    reset = () => {
        this.notify('réinitialisaion', 'error');
        this.clean('réinitialisé');
        this.setState({ duration: this.state.initialize })

    }


    render() {
        return (
            <div>
                <Display title={this.props.title}  timerValue={this.formatDuration()} />
                <ButtonGroupe
                    onStart={this.start}
                    onStop={this.stop}
                    onReset={this.reset}



                />

                <Message message={this.state.message} />
            </div>


        )
    }
}
