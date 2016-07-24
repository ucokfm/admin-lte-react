import React from 'react';
import PageWrapper from '../../../lib/page/PageWrapper';
import PageHeader from '../../../lib/page/PageHeader';
import Breadcrumb from '../../../lib/page/Breadcrumb';
import PageContent from '../../../lib/page/PageContent';
import InfoBox from '../../../lib/widgets/InfoBox';
import StatBox from '../../../lib/widgets/StatBox';
import Box from '../../../lib/widgets/Box';

export default function Widgets() {
  return (
    <PageWrapper>
      <PageHeader
        title="Widgets"
        description="Preview page"
      >
        <Breadcrumb
          items={[
            { key: 1, icon: 'fa fa-dashboard', title: 'Home', url: '/' },
            { key: 2, title: 'Widgets', url: '' },
          ]}
        />
      </PageHeader>
      <PageContent>
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <InfoBox
              iconClasses="fa fa-envelope-o"
              text="messages"
              count="1,410"
              color="aqua"
            />
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <InfoBox
              iconClasses="fa fa-flag-o"
              text="bookmarks"
              count="410"
              color="green"
            />
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <InfoBox
              iconClasses="fa fa-files-o"
              text="uploads"
              count="13,648"
              color="yellow"
            />
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <InfoBox
              iconClasses="fa fa-star-o"
              text="likes"
              count="93,139"
              color="red"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <InfoBox
              iconClasses="fa fa-bookmark-o"
              text="bookmarks"
              count="41,410"
              progressCount={70}
              progressText="70% Increase in 30 ..."
              color="aqua"
            />
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <InfoBox
              iconClasses="fa fa-thumbs-o-up"
              text="likes"
              count="41,410"
              progressCount={70}
              progressText="70% Increase in 30 ..."
              color="green"
            />
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <InfoBox
              iconClasses="fa fa-calendar"
              text="events"
              count="41,410"
              progressCount={70}
              progressText="70% Increase in 30 ..."
              color="yellow"
            />
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <InfoBox
              iconClasses="fa fa-comments-o"
              text="comments"
              count="41,410"
              progressCount={70}
              progressText="70% Increase in 30 ..."
              color="red"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-xs-6">
            <StatBox
              count="150"
              title="New Orders"
              iconClasses="fa fa-shopping-cart"
              url="/new-orders"
              urlText="More info"
              color="aqua"
            />
          </div>
          <div className="col-lg-3 col-xs-6">
            <StatBox
              count="53"
              countSign="%"
              title="Bounce Rate"
              iconClasses="ion ion-stats-bars"
              url="/bounce-rate"
              urlText="More info"
              color="green"
            />
          </div>
          <div className="col-lg-3 col-xs-6">
            <StatBox
              count="44"
              title="User Registrations"
              iconClasses="ion ion-person-add"
              url="/user-registrations"
              urlText="More info"
              color="yellow"
            />
          </div>
          <div className="col-lg-3 col-xs-6">
            <StatBox
              count="65"
              title="Unique Visitors"
              iconClasses="ion ion-pie-graph"
              url="/unique-visitors"
              urlText="More info"
              color="red"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Box title="Expandable" expandable collapsed>
              The body of the box
            </Box>
          </div>
          <div className="col-md-3">
            <Box title="Removable" status="success" removable>
              The body of the box
            </Box>
          </div>
          <div className="col-md-3">
            <Box title="Collapsable" status="warning" expandable>
              The body of the box
            </Box>
          </div>
          <div className="col-md-3">
            <Box title="Loading state" status="danger" loading>
              The body of the box
            </Box>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Box title="Expandable" solid expandable collapsed>
              The body of the box
            </Box>
          </div>
          <div className="col-md-3">
            <Box title="Removable" status="success" solid removable>
              The body of the box
            </Box>
          </div>
          <div className="col-md-3">
            <Box title="Collapsable" status="warning" solid expandable>
              The body of the box
            </Box>
          </div>
          <div className="col-md-3">
            <Box title="Loading state" status="danger" solid loading>
              The body of the box
            </Box>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  );
}
