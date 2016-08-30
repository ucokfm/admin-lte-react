import React from 'react';

import PageWrapper from 'admin-lte-react/PageWrapper';
import PageHeader from 'admin-lte-react/PageHeader';
import Breadcrumb from 'admin-lte-react/Breadcrumb';
import PageContent from 'admin-lte-react/PageContent';
import Box from 'admin-lte-react/Box';

export default function SimplePage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Simple page"
        description="description about the simple page"
      >
        <Breadcrumb
          items={[
            { key: 1, icon: 'fa fa-dashboard', title: 'Home', url: '/' },
            { key: 2, title: 'Pages' },
            { key: 3, title: 'Simple' },
          ]}
        />
      </PageHeader>
      <PageContent>
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <Box
              title="Hello, World!"
              status="primary"
              expandable
              removable
            >
              You can collapse or close this box window using right upper buttons.
            </Box>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  );
}
