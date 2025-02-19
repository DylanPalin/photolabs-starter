import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


const TopicList = ({ getTopicPhotos, topics }) => {
  const topicList = topics.map(topic => {
    return (
      <TopicListItem key={topic.id} topic={topic} getTopicPhotos={getTopicPhotos} />
    );
  });

  return (
    <div className="top-nav-bar__topic-list" >
      {topicList}
    </div>
  );
};

export default TopicList;
