import "./footer.css";

export default function Footer({ style, text }) {
  return (
    <div className={style}>
      <p>{text}</p>
    </div>
  );
}
