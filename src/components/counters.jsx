import React, { Component } from 'react';
import Counter from './counterComponent'

class Counters extends React.Component {
    state = {
        count: [
            { id: 1, value: 0 },
            { id: 2, value: 7 },
            { id: 3, value: 0 }
        ]
    }

    handleDelete = (cId) => {
        const counters = this.state.count.filter(count => count.id !== cId);
        this.setState({ count: counters })

    }

    handleIncrement = (counter) => {debugger
        console.log("incremnet, ", counter);
        const counters = [...this.state.count];
        const index= counters.indexOf(counter);
        //counters[0] = { ...counter };
        counters[index].value++;
        console.log(this.state.count[0])
        this.setState({ count: counters });

    }

    handleReset = () => {
        console.log("Clicked Reset");
        const counter = this.state.count.map(count => {
            count.value = 0;
            return count;
        });
        this.setState({ count: counter });
    }

    render() {
        console.log("Counter");
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-danger btn-sm m-2">Reset</button>
                {this.state.count.map(count => <Counter key={count.id} id={count.id} counter={count} onDelete={this.handleDelete} onIncrement={this.handleIncrement} value={count.value} />)}
                {/* <Counter /> */}
            </div>
        );
    }
}

export default Counters;