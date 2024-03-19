export default function Postform({
  style,
  img,
  titleStyle,
  title,
  titleDesc,
  date,
  fullDesc,
  fotStyle,
  butText,
  comNum,
}) {
  return (
    <div className={style}>
      <img src={img}></img>
      <div className={titleStyle}>
        <h3>{title}</h3>
        <h5>
          {titleDesc}, <span>{date}</span>
        </h5>
        <p>{fullDesc}</p>
      </div>
      <div className={fotStyle}>
        <button>{butText}</button>
        <div>
          Comments, <span>{comNum}</span>
        </div>
      </div>
    </div>
  );
}
