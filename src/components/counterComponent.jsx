import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1
    }

    formatCount() {
        const { count } = this.state;
        return count == 0 ? 'Zero' : count;
    }

    

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count > 0 ? 'primary' : 'info';
        return classes;
    }
}

export default Counter;