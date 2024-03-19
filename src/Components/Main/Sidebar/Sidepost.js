export default function Sidepost({ style, src, h1, p }) {
  return (
    <div className={style}>
      <img src={src}></img>
      <h1>{h1}</h1>
      <p>{p}</p>
    </div>
  );
}
