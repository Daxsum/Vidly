import React, { Component } from "react";

const Like = (props) => {
  let Class = "fa-solid fa-heart";
  if (!props.Liked) {
    Class = "fa-regular fa-heart";
  }

  return <i onClick={props.onLiked} className={Class}></i>;
};

export default Like;
