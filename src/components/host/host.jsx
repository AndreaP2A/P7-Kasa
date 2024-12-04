import "./_host.scss";

/**
 * Component to display host information including name and avatar.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.host - Host information.
 * @param {string} props.host.name - Name of the host.
 * @param {string} props.host.picture - URL of the host's picture.
 * @param {string} [props.className] - Additional class names for styling.
 * @returns {JSX.Element} The Host component.
 */
function Host({ host, className }) {
  return (
    <div className={`${className} host`}>
      <div className="host__name">{host.name}</div>
      <div className="host__avatar">
        <img src={host.picture} alt={host.name} />
      </div>
    </div>
  );
}

export default Host;
