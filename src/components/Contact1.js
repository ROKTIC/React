import React, { Component } from 'react';
import ContactInfo from './ContactInfo';

class Contact1 extends Component {
	state = {
		keyword: '';
		contactData: [{
			name : 'inrok',
			phone : '010-1111-2222';
		},{
			name : 'young';
			phone : '010-2222-3333';
		}, {
			name : 'hyun';
			phone : '010-4444-3333';
		}, {
			name : 'Ryang';
			phone : '010-6666-2222';
		},] // contactData end
    }//  //state end
	_searchContact = (e) => {
		this.setState({
			keyword: e.target.value
		})
	}
	render(){
		const mapToComponents = (data) => {
			data.sort();
			data = data.filter( // 정렬된 데이터를 필터링
				(contact) => {
					return contact.name.toLowerCase() // 이름기준, 대소문자 기준 없이
						.indexOf(this.state.keyword.toLowerCase()) > -1;
				}
			);
			return data.map( // 해당 데이터 배열을 mapping
				(contact, i) => {
					return (<ContactInfo contact={contact} key={i} />);
				}
			);
		}
		return(
			<div>
				<h1>Contact1</h1>
				<input
					name="keyword"
					placeholder="Search"
					value={this.state.keyword}
					onchange = {this._searchContact} // input 창에 입력될때마다
				/>
				<div>{mapToComponents(this.state.contactData)}</div> {/*목록으로 표시 */}
			</div>
		)
		}
	}
}

export default Contact1;













