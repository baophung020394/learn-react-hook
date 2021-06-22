import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";
import "./style.scss";

AlbumList.propTypes = {
  albums: PropTypes.array,
};

AlbumList.defaultProps = {
  albums: [],
};
function AlbumList({ albums }) {
  return (
    <ul className="album-list">
      {albums.map((album) => (
        <li key={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
