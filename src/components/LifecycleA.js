import React, { Component } from 'react';
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Shubham'
        }
        console.log('LifecycleA construtor ')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    render() {
        console.log('LifecycleA render')
        return ( < div >
            <
            div > LifecycleA < /div>  <
            LifecycleB / >
            <
            /div> 
        )

    }
}

export default LifecycleA;