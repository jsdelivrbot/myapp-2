import { observable, action } from 'mobx';

class CampusState {
	@observable data =  [
	    {
	    	name: '彭一妮',
	    	title: '问题标题问题标题问题标题？',
	        text: '教务处：创新性实验项目申报通知目申报通知目申报通知目申报通知',
	        time: '1483250522',
	        comment: '1',
	        likes: '2',
	        id: 1,
	        commentMes: [
	        	{
	        		name: '彭一妮',
	        		time: '1483250522',
	        		text: '阿双方决定你是短发女生看到菲尼克斯福利康师傅某个路口等方面管理是咖啡馆',
	        		id: 1
	        	},
	            {
	                name: '彭一妮',
	                time: '1483250522',
	                text: '阿双方决定你是短发女生看到菲尼克斯福利康师傅某个路口等方面管理是咖啡馆',
	                id: 2
	            }
	        ]
	    },
	    {
	        name: '彭一妮',
	        title: '问题标题问题标题问题标题？',
	        text: '教务处：创新性实验项目申报通知目申报通知目申报通知目申报通知',
	        time: '1483250522',
	        comment: '1',
	        likes: '2',
	        id: 2,
	        commentMes: [
	            {
	                name: '彭一妮',
	                time: '1483250522',
	                text: '阿双方决定你是短发女生看到菲尼克斯福利康师傅某个路口等方面管理是咖啡馆',
	                id: 2
	            }
	        ]
	    }
	]

	@action setData = (res) => {
		this.data = res
	}

	@action addMesData = ( res, index ) => {

        this.data.forEach( ( val, arrindex ) => {
            if ( index === arrindex ) {
                val.commentMes.push(res)
            }
        } )
        console.log(this.data[0].commentMes)
	}

	@action deleteData = ( index ) => {

		this.data.forEach( ( val, arrindex ) => {
			if (index === arrindex) {
				this.data.splice(index, 1)
			}
		} )

	}

}

const campusState = new CampusState();

export default campusState;