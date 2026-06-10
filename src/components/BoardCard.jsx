const BoardCard = (props) => {
  return (
    <div className={'card ' + props.type}>

      <div className="card-top">
        <h3>{props.title}</h3>
      </div>

      <p className="desc">{props.description}</p>

      <a className="btn" href={props.link} target="_blank">
        Open →
      </a>

    </div>
  )
}

export default BoardCard