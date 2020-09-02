import React from 'react';

class Messages extends React.Component {
    render() {
        let NumMes = 0
        let plurMess
        
        if (NumMes === 1 ) {
          plurMess = "Message"
        } 
        else {
          plurMess = "Messages"
        }
        return (
            <h2>You Have {NumMes} {plurMess}</h2>
        )
    }
}

export default Messages;