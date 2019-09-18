import React from 'react'

const stylefooter = {
    position:'fixed',
    left:'20%',
    bottom:0,
    width:'80%',
    backgroundColor: '#FFFFFF',
    color:'#000000',
    textAlign: 'center',
    height:'50px'
  }

const Footer = () => {
    return (
        <div style={stylefooter}>
            <footer className="container">
                <p>© Company 2017-2019</p>
            </footer>
        </div>
    )
}

export default Footer
