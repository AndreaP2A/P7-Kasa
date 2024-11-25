import "./_tag.scss";

function Tag({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <div key={index} className="tags__item">
          <span className="tags__item__text">{tag}</span>
        </div>
      ))}
    </div>
  );
}

export default Tag;
