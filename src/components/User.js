import React, { Component } from 'react';

class User extends Component {
    
    render() {
        if(true){
            throw new Error("error found")
        }

        return (
            <div>
              <h1>Error boundaries</h1>      
            </div>
        );
    }
}

export default User;  