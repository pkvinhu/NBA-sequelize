import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Root extends Component {
  render() {
	return (
	  <div>
	  	<h1
	  	  style={{
	  	  	width:'100%',
	  	  	height:'100%',
	  	  	textAlign:'center',
	  	  	backgroundColor:'orange',
	  	  	display:'flex',
	  	  	justifyContent:'center',
	  	  	alignItems:'center'
	  	  }}
	  	>Ball is Life</h1>
	  </div>
	);
  }
};

ReactDOM.render(<Root />, document.getElementById('root'));