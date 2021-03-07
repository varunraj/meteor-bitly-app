import React, { Component } from 'react';


class LinkCreate extends Component {


    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Link To Shorten</label>
                    <input className="form-control" />
                </div>
                <button className="btn btn-primary">Shorten</button>
            </form>
        )
    }
}

export default LinkCreate;