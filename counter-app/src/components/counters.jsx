import React from 'react';
import Counter from './counter';

class Counters extends React.Component {
  render() {
    //Props Destructuring
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <div className="container">
        <div className="row">
          <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
            Reset
          </button>
        </div>
        <div className="row">
          <div class="col-sm">
            {counters.map((counter) => (
              <Counter
                key={counter.id}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counter={counter}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Counters;
