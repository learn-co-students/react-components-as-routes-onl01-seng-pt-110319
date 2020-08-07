import React from 'react'

class Messages extends React.Component{
    render() {
        return(
            <form>
                <div>
                    <textarea type="text" placeholder="Enter Text" />
                    <input type="submit" value="Send Message" />
                </div>
            </form>
        )
    }
}

export default Messages