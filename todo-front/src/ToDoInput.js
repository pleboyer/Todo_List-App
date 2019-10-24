import React, {Component} from 'react';

class ToDoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({value: event.target.value});
    }

  handleSubmit(event) {
    event.preventDefault();
    var newItem = this.refs.newItem.value
    if (newItem){
      this.props.addItem({newItem});
      this.setState({value:''})
    }
  }

  render() {
    return (
      <div className="todo-header">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
              <input type="text" value={this.state.value} onChange={this.handleChange} ref="newItem" className="form-control" placeholder="Todo..." aria-label="Todo" aria-describedby="basic-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-primary" type="submit">Add</button>
              </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ToDoInput
