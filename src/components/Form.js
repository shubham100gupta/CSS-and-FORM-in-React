import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             Topic : 'React'
        }
    }
     
    handleUserameChange = (event) =>{
        this.setState({
            username :event.target.value
        })
    }
    hanldeCommentsChange = (event) =>{
        this.setState({
            comments :event.target.value
        })
    }
    hanldeTopicChange = (event)=>{
        this.setState({
            Topic :event.target.value
        })
    }
    handleSubmit = (event)=> {
        alert(`${this.state.username} ${this.state.comments} ${this.state.Topic}`)
    }


    render() {
        return (
           <form onSubmit = {this.handleSubmit}>
            <div>
            <label>Username</label>
        <input type="text"  value={this.state.username} onChange={this.handleUserameChange}/>
        </div>

        <div>
        <label>Comments</label>
        <textarea value={this.state.comments} onChange={this.hanldeCommentsChange}></textarea>
        </div>

        <div>
        <label>Topic</label>
        <select value={this.state.Topic} onChange={this.handleTopicChange}>
        <option value="react">React</option>
        <option value="node">Node</option>
        <option value="Angular">Angular</option>
            
        </select>
        </div>
        <button type="submit">Submit</button>


           </form>
        )
    }
}

export default Form
