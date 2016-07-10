import React from 'react';
import PageWrapper from '../../../lib/page/PageWrapper';
import PageHeader from '../../../lib/page/PageHeader';
import Breadcrumb from '../../../lib/page/Breadcrumb';
import PageContent from '../../../lib/page/PageContent';
import Box from '../../../lib/widgets/Box';

export default function HomePage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Home page"
        description="Welcome to the first page"
      >
        <Breadcrumb
          items={[
            { key: 1, icon: 'fa fa-home', title: 'Home', url: '/' },
            { key: 2, title: 'Page' },
          ]}
        />
      </PageHeader>
      <PageContent>
        <Box
          title="Hello, World!"
          status="primary"
          expandable
          removable
        >
          You can collapse or close this box window using right upper buttons.
        </Box>
      </PageContent>
    </PageWrapper>
  );
}
