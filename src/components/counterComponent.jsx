import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        tags: ["tag1", "tag2", "tag3"]
    }

    // constructor(){
    //     super();
    //     console.log("Constructor", this);
    // }

    formatCount() {
        const { count } = this.state;
        return count == 0 ? 'Zero' : count;
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    handleIncrement = () => {
        // console.log("Click", this);
        this.setState({count: this.state.count+1})
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                {this.state.tags.length === 0 && "Please create a new tags...!"}
                {this.renderTags()}
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