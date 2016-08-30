import React from 'react';

import FooterWrapper from 'admin-lte-react/FooterWrapper';

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="pull-right hidden-xs">
        <b>Version</b> 0.0.1
      </div>
      <strong>
        <span>Copyright &copy; 2016 </span>
        <a href="http://github.com/ucokfm/admin-lte-react">Simple Admin</a>.
      </strong> All rights reserved.
    </FooterWrapper>
  );
}
