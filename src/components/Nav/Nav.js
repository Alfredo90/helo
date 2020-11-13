import React, {Component} from'react';
import {connect} from 'react-redux';


class Nav extends Component {
    render(){
        return(
            <div>

            <div>Nav</div>
                <button>Home</button>
                <button>New Post</button>
                <button>Logout</button>

            </div>
        )
    }
}


const mapStateToProps = state => state

export default connect (mapStateToProps) (Nav);