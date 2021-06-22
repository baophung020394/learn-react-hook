import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Hoa",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/1/7/2/7172e5eef050a364accf3109a0f7477a.jpg",
    },
    {
      id: 2,
      name: "Rap Việt Tạo Động Lực",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/9/1/1/5911ca608c3bf3ebe553cdc8452f1973.jpg",
    },
    {
      id: 3,
      name: "Nhạc Cho Bé Ngủ",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/9/3/4/6934d6290d1ac5f15a0f575f9280be3a.jpg",
    },
  ];
  return (
    <div>
      <h1>Có thể bạn sẽ thấy</h1>
      <AlbumList albums={albumList} />
    </div>
  );
}

export default AlbumFeature;
