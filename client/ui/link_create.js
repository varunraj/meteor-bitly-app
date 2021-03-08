import React, { Component } from 'react';


class LinkCreate extends Component {

    handleSubmit(event) {
        event.preventDefault()
        // this.refs.input // point to input data
        //console.log(this.refs.link.value)
        //console.log('event', event.target.value);
        // call meteor method from link collection
        Meteor.call('links.insert', this.refs.link.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Link To Shorten</label>
                    <input ref="link" className="form-control" />
                </div>
                <button className="btn btn-primary">Shorten</button>
            </form>
        )
    }
}

export default LinkCreate;