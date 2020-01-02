import React, { Component } from "react";
import CardGallery from "components/CardGallery";
import Ajax from "api";
import apis from "api/apis";
class Home extends Component {
  state = {
    folderData: [
      { key: 1, name: "The F2E Week1 - 番茄鐘" },
      { key: 2, name: "The F2E Week2 - 新接龍" },
      { key: 3, name: "The F2E Week3 - MP3 Player" },
      { key: 4, name: "TThe F2E Week4 - 線上支付" },
      { key: 5, name: "The F2E Week5 - 90 秒挑戰遊戲" },
      { key: 6, name: "The F2E Week6 - 旅館預約服務" },
      { key: 7, name: "The F2E Week7 - 匿名聊天室" },
      { key: 8, name: "The F2E Week8 - 雲端硬碟" }
    ]
  };
  componentDidMount() {
    Ajax(apis.getHomeList);
  }
  render() {
    const { folderData } = this.state;
    return (
      <div>
        <CardGallery title="資料夾" data={folderData}></CardGallery>
        <CardGallery title="檔案" data={folderData}></CardGallery>
      </div>
    );
  }
}

export default Home;
