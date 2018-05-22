
import React from 'react';
import Apptabar from '../../components/AppTabar/AppTabar';
class MyTabar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
  }
  render() {
    return (
      <div>
        <Apptabar name={['首页', "搜索", '我的']} url={['/home', '/search', '/my']} faIcon={['fa fa-home fa-fw', 'fa fa-search', 'fa fa-user']}></Apptabar>
      </div>
    );
  }
}

export default MyTabar