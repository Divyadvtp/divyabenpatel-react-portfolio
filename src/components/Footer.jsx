import "./Footer.css";

export default function Footer({ pageRefs }) {
  return (
    <footer id="footer" className="footer-container" ref={el => pageRefs.current = { ...pageRefs.current, footer: el }}>
      <div className="inner-content">
        <div className="account-link inner-item">
          <a href="https://github.com/Divyadvtp" target="_blank" rel="noopener noreferrer"><img src="img/gitHub.png" alt="gitHub" /></a>
          <a  href="https://www.linkedin.com/in/divyaben-patel-8428b9110/" target="_blank" rel="noopener noreferrer"><img src="img/LinkedIn.png" alt="LinkedIn" /></a>
          </div>

        <div className="copyright inner-item">&copy;Copyright 2024. Made by <a className="footerName" rel="noreferrer" target="_blank" href="https://divyadvtp.github.io/divyabenpatel-react-portfolio/">Divyaben Patel</a></div>

      </div>
    </footer>
  );
}
