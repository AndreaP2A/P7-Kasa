import "./_host.scss";

function Host({ host }) {
  return (
    <div className="host">
      <div className="host__name">{host.name}</div>
      <div className="host__avatar">
        <img src={host.picture} alt={host.name} />
      </div>
    </div>
  );
}

export default Host;
