import { useState } from "react";
import Tag from "./Tag";

const Tags = ({ activeTag, setActiveTag }) => {
  const tags = [
    {
      name: "all",
      active: "false",
      id: 1,
    },
    {
      name: "african",
      active: "false",
      id: 2,
    },
    {
      name: "italian",
      active: "false",
      id: 3,
    },
    {
      name: "american",
      active: "false",
      id: 4,
    },
    {
      name: "pastries",
      active: "false",
      id: 5,
    },
    {
      name: "spanish",
      active: "false",
      id: 6,
    },
    {
      name: "mexican",
      active: "false",
      id: 7,
    },
  ];
  const handleClick = (tag) => {
    setActiveTag(tag);
  };

  return (
    <div className="my-4 border-y border-darkGreen p-4 flex justify-between items-center gap-4">
      <span className="font-bold text-2xl text-darkGreen">Tags: </span>
      {tags.map((tag) => (
        <Tag
          key={tag.id}
          tag={tag}
          active={tag.id == activeTag.id}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Tags;
