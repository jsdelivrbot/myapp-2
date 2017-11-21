import { observable, action } from 'mobx';

class FooterStatus {
	@observable footerShow = true

	@action setStatus = (res) => {
		this.footerShow = res
	}
}

const footerStatus = new FooterStatus();

export default footerStatus;