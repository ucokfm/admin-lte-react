import React from 'react';
import PageWrapper from '../../../lib/page/PageWrapper';
import PageHeader from '../../../lib/page/PageHeader';
import Breadcrumb from '../../../lib/page/Breadcrumb';
import PageContent from '../../../lib/page/PageContent';
import InfoBox from '../../../lib/widgets/InfoBox';

export default function DashboardTwo() {
  return (
    <PageWrapper>
      <PageHeader
        title="Dashboard"
        description="Version 2.0"
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
          <div className="col-md-3 col-sm-6 col-xs-12">
            <InfoBox
              icon="ion ion-ios-gear-outline"
              text="cpu traffic"
              count="90"
              countSign="%"
              color="aqua"
            />
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <InfoBox
              icon="fa fa-google-plus"
              text="likes"
              count="41,410"
              color="red"
            />
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <InfoBox
              icon="ion ion-ios-cart-outline"
              text="sales"
              count="760"
              color="green"
            />
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <InfoBox
              icon="ion ion-ios-people-outline"
              text="new members"
              count="2,000"
              color="yellow"
            />
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  );
}
