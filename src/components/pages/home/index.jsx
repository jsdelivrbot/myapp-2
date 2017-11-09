import React, {Component} from 'react';
// import logo from '../../../logo.svg';
import {View,Pages,Page,PageContent} from 'framework7-react';

export default class App extends Component {
  render() {
    return (
      <View>
        <Pages>
          <Page>
            <PageContent>
              <p><a href="/home/message" className='link'>点我去message</a></p>
            </PageContent>
          </Page>
        </Pages>
      </View>
    );
  }
}