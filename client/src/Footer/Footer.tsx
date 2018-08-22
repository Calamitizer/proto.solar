import * as React from 'react';
import 'ps/Footer/footer.scss';

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => (
  <footer className="footer">
    <div className="copyright">
      <span>© J. Alex Ruble</span>
    </div>
  </footer>
);

export default Footer;
