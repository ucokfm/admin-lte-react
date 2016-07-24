import React from 'react';
import PageWrapper from '../../../lib/page/PageWrapper';
import PageHeader from '../../../lib/page/PageHeader';
import Breadcrumb from '../../../lib/page/Breadcrumb';
import PageContent from '../../../lib/page/PageContent';

export default function BlankPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Blank page"
        description="it all starts here"
      >
        <Breadcrumb
          items={[
            { key: 1, icon: 'fa fa-dashboard', title: 'Home', url: '/' },
            { key: 2, title: 'Examples' },
            { key: 3, title: 'Blank page' },
          ]}
        />
      </PageHeader>
      <PageContent>
        <div className="box">
          <div className="box-header with-border">
            <h3 className="box-title">Title</h3>
            <div className="box-tools pull-right">
              <button type="button" className="btn btn-box-tool">
                <i className="fa fa-minus"></i>
              </button>
              <button type="button" className="btn btn-box-tool">
                <i className="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div className="box-body">
            Start creating your amazing application!
          </div>
          <div className="box-footer">
            Footer
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  );
}
