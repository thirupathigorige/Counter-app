import React, { Component } from 'react';

class Counter extends Component {
    

    // constructor(){
    //     super();
    //     console.log("Constructor", this);
    // }

    formatCount() {
        const { value } = this.props.counter;
        return value == 0 ? 'Zero' : value;
    }

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }

   
    
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>

                {/* {this.state.tags.length === 0 && "Please create a new tags...!"}
                {this.renderTags()} */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value > 0 ? 'primary' : 'info';
        return classes;
    }
}

export default Counter;