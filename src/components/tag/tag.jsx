import "./_tag.scss";

/**
 * Component to render a list of tags.
 *
 * @param {Object} props - The component props.
 * @param {string[]} props.tags - Array of tag strings to be displayed.
 * @returns {JSX.Element} The rendered component.
 */
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
