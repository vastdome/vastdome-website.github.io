import React from 'react';

import './index.scss';

const Roadmap = () => (
  <div className="roadmap container section">
    <h1>Roadmap</h1>
    <div className="steps-table dark">

      <div className="column">
        <div className="header">
          <h3 className="common-Uppercase"><a
            href="/payments/features/#accept">Accept</a></h3>
        </div>

        <ul className="content compressed">
          <li className="group-header"><h4><a
            href="/payments/features/#customer-interfaces">Customer
            interfaces</a></h4></li>
          <li><a href="/payments/features/#custom-ui-toolkit">Custom UI
            toolkit</a></li>
          <li><a href="/payments/features/#embeddable-checkout">Embeddable
            checkout</a></li>
          <li><a href="/payments/features/#clean-canvas">Clean canvas</a></li>
          <li><a href="/payments/features/#invoicing">Invoicing</a></li>
          <li><a href="/payments/features/#open-source-plugins">Open-source
            plugins</a></li>

          <li className="group-header"><h4><a
            href="/payments/features/#payment-options">Payment options</a></h4>
          </li>
          <li><a href="/payments/features/#cards">Cards</a></li>
          <li><a href="/payments/features/#wallets">Wallets</a></li>
          <li><a href="/payments/features/#local-payment-methods">Local payment
            methods</a></li>
          <li><a href="/payments/features/#currencies">Currencies</a></li>
          <li><a href="/payments/features/#subsidiary-support">Subsidiary
            support</a></li>

          <li className="group-header"><h4><a
            href="/payments/features/#mobile">Mobile</a></h4></li>
          <li><a
            href="/payments/features/#ios-and-android-sdk">iOS &amp; Android
            SDK</a></li>
          <li><a href="/payments/features/#mobile-customer-interfaces">Mobile
            customer interfaces</a></li>
          <li><a href="/payments/features/#mobile-web">Mobile web</a></li>
        </ul>
      </div>

      <div className="column">
        <div className="header">
          <h3 className="common-Uppercase"><a
            href="/payments/features/#process">Process</a></h3>
        </div>

        <ul className="content">
          <li className="group-header"><h4><a
            href="/payments/features/#revenue-optimization">Revenue
            optimization</a></h4></li>
          <li><a href="/payments/features/#authorization">Authorization</a></li>

          <li className="group-header"><h4><a
            href="/payments/features/#fraud-and-disputes">Fraud and disputes</a>
          </h4></li>
          <li><a href="/payments/features/#stripe-radar">Stripe Radar</a></li>
          <li><a href="/payments/features/#three-d-secure">3D Secure</a></li>
          <li><a href="/payments/features/#dispute-handling">Dispute
            handling</a></li>
        </ul>
      </div>

      <div className="column">
        <div className="header">
          <h3 className="common-Uppercase"><a href="/payments/features/#settle">Settle
            and reconcile</a></h3>
        </div>

        <ul className="content">
          <li className="group-header"><h4><a
            href="/payments/features/#reconciliation">Reconciliation</a></h4>
          </li>
          <li><a href="/payments/features/#financial-reporting">Financial
            reporting</a></li>
          <li><a href="/payments/features/#consolidated-reports">Consolidated
            reports</a></li>
          <li><a href="/payments/features/#accounting-support">Accounting
            support</a></li>

          <li className="group-header"><h4><a
            href="/payments/features/#payouts">Payouts</a></h4></li>
          <li><a href="/payments/features/#unified-payouts">Unified payouts</a>
          </li>
          <li><a href="/payments/features/#payout-timing">Payout timing</a></li>
          <li><a href="/payments/features/#multicurrency-payouts">Multicurrency
            payouts</a></li>
        </ul>
      </div>

      <div className="column">
        <div className="header">
          <h3 className="common-Uppercase"><a
            href="/payments/features/#manage">Manage</a></h3>
        </div>

        <ul className="content">
          <li className="group-header"><h4><a
            href="/payments/features/#reporting-and-insights">Reporting &amp; insights</a>
          </h4></li>
          <li><a href="/payments/features/#stripe-sigma">Stripe Sigma</a></li>
          <li><a href="/payments/features/#stripe-dashboard">Stripe
            Dashboard</a></li>
          <li><a href="/payments/features/#dashboard-mobile-app">Dashboard
            mobile app</a></li>

          <li className="group-header"><h4><a
            href="/payments/features/#business-operations">Business
            operations</a></h4></li>
          <li><a href="/payments/features/#roles-and-permissions">Roles and
            permissions</a></li>
          <li><a href="/payments/features/#account-security">Account
            security</a></li>
          <li><a href="/payments/features/#collaboration-notes">Collaboration
            notes</a></li>

          <li className="group-header"><h4><a
            href="/payments/features/#third-party-integrations">Third-party
            integrations</a></h4></li>
          <li><a href="/payments/features/#works-with-stripe">Works with
            Stripe</a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Roadmap;
