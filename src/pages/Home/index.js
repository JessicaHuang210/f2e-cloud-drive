import React, { Component } from "react";
import CardGallery from "components/CardGallery";
import Ajax from "api";
import apis from "api/apis";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      folderData: []
    };
  }
  async componentDidMount() {
    const { data } = await Ajax(apis.getHomeList);
    this.setState({ folderData: data });
  }
  render() {
    const { folderData } = this.state;
    return (
      <div>
        <CardGallery title="資料夾" data={folderData}></CardGallery>
        <CardGallery title="檔案"></CardGallery>
      </div>
    );
  }
}

export default Home;
