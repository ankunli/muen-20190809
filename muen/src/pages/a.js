import React, { Component } from 'react'

export default class a extends Component {
    render() {
        return (
            <div>
               <Search
                      placeholder="input search text"
                      onSearch={value => console.log(value)}
                      style={{ width: 200 }}
                    />  
            </div>
        )
    }
}
