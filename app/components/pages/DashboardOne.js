import React from 'react';
import PageWrapper from '../../../lib/page/PageWrapper';
import PageHeader from '../../../lib/page/PageHeader';
import Breadcrumb from '../../../lib/page/Breadcrumb';
import PageContent from '../../../lib/page/PageContent';
import SmallBox from '../../../lib/widgets/SmallBox';

export default function DashboardOne() {
  return (
    <PageWrapper>
      <PageHeader
        title="Dashboard"
        description="Control panel"
      >
        <Breadcrumb
          items={[
            { key: 1, icon: 'fa fa-dashboard', title: 'Home', url: '/' },
            { key: 2, title: 'Dashboard', url: '' },
          ]}
        />
      </PageHeader>
      <PageContent>
        <div className="row">
          <SmallBox />
          <SmallBox
            number={53}
            sign="%"
            text="Bounce Rate"
            icon="ion-stats-bars"
            color="green"
            url="/bounce-rate"
          />
          <SmallBox
            number={44}
            text="User Registrations"
            icon="ion-person-add"
            color="yellow"
            url="/user-registrations"
          />
          <SmallBox
            number={65}
            text="Unique Visitors"
            icon="ion-pie-graph"
            color="red"
            url="/unique-visitors"
          />
        </div>
      </PageContent>
    </PageWrapper>
  );
}
