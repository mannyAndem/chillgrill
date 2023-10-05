const Tag = ({ tag, active, handleClick }) => {
  return (
    <button
      className={`p-2 font-semibold text-sm lg:text-lg rounded-2xl border border-darkGreen cursor-pointer ${
        active ? "text-gray bg-darkGreen" : "bg-transparent text-darkGreen"
      }`}
      onClick={() => handleClick(tag)}
    >
      {tag.name.toUpperCase()}
    </button>
  );
};

export default Tag;
