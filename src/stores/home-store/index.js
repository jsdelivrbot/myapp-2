import { observable, action } from 'mobx';

class HomeState {
	@observable data = {
		text: 'wwww',
		ddd: 'wwwww'
	};

	@action setData = () => {
		this.data = !this.data;
	}
}

const homeState = new HomeState();

export default homeState;