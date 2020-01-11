import React, { Component } from 'react';

class Test_props extends Component {
    render(){
	return(
		<div>
		   <p>Test_comp로부터 받은 value</p>
		   <p>{this.props.text}</p>
		</div>
		)
	}
} 

Test_props.defaultProps = { text : 'This is default props' }

export default Test_props;
