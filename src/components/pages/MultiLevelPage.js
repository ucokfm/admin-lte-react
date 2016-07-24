import React, { PropTypes } from 'react';

import PageWrapper from '../../../lib/page/PageWrapper';
import PageHeader from '../../../lib/page/PageHeader';
import Breadcrumb from '../../../lib/page/Breadcrumb';
import PageContent from '../../../lib/page/PageContent';

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

function MultiLevelPage({ title, description }) {
  return (
    <PageWrapper>
      <PageHeader
        title={title}
        description={description}
      >
        <Breadcrumb
          items={[
            { key: 1, icon: 'fa fa-home', title: 'Home', url: '/' },
            { key: 2, title },
          ]}
        />
      </PageHeader>
      <PageContent />
    </PageWrapper>
  );
}

MultiLevelPage.propTypes = propTypes;

export function LevelOnePage() {
  return (
    <MultiLevelPage
      title="Level One"
      description="Description of level one page"
    />
  );
}

export function LevelTwoPage() {
  return (
    <MultiLevelPage
      title="Level Two"
      description="Description of level two page"
    />
  );
}

export function LevelThreePage() {
  return (
    <MultiLevelPage
      title="Level Three"
      description="Description of level three page"
    />
  );
}
