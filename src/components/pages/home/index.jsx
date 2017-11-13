import React, {Component} from 'react';
import Swiper from '../../common/banner';
import Acco from '../../common/accordion';

export default class Home extends Component {
  render() {
    console.log(this.props.href);
    return (
      <div className='page' data-page='home'>
        <div className='page-content page-content-home'>
          {/*轮播组件引入*/}
          <Swiper/>

          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deserunt iure tempore. Blanditiis consectetur dolorum eos est ex, explicabo iusto laboriosam magnam maxime minima molestiae possimus quae quaerat reiciendis sint.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, assumenda cupiditate dolorem error ex id ipsa itaque laboriosam nam odit optio placeat quas repellendus reprehenderit repudiandae, sapiente sit ullam veniam?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut consequuntur delectus distinctio doloribus dolorum et facilis odit, quas similique sit vero. Ex quis quisquam sequi ut vel? At, doloremque.
          </span>
          <p className='toMessage'><a href="/home/message" className='link'>点我去message</a></p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deserunt iure tempore. Blanditiis consectetur dolorum eos est ex, explicabo iusto laboriosam magnam maxime minima molestiae possimus quae quaerat reiciendis sint.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, assumenda cupiditate dolorem error ex id ipsa itaque laboriosam nam odit optio placeat quas repellendus reprehenderit repudiandae, sapiente sit ullam veniam?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut consequuntur delectus distinctio doloribus dolorum et facilis odit, quas similique sit vero. Ex quis quisquam sequi ut vel? At, doloremque.
          </span>
          {/*手风琴组件引入*/}
          <Acco/>

          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci at, cum cupiditate dolore dolorem illum impedit ipsam maxime nesciunt omnis quidem quisquam ratione repellendus soluta totam veritatis vero.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet labore magni minus natus optio quibusdam sunt? Asperiores culpa porro totam velit! Cumque dicta error, illum nobis quas quasi sapiente similique.
          </span>
          <p className='toMessage2'><a href="/home/message" className='link'>点我去message</a></p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci at, cum cupiditate dolore dolorem illum impedit ipsam maxime nesciunt omnis quidem quisquam ratione repellendus soluta totam veritatis vero.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet labore magni minus natus optio quibusdam sunt? Asperiores culpa porro totam velit! Cumque dicta error, illum nobis quas quasi sapiente similique.
          </span>
        </div>
      </div>
    );
  }
}