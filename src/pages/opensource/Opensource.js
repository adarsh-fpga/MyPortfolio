import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";
import { greeting } from "../../portfolio";
import OrganizationsData from "../../shared/opensource/organizations.json";
import PullRequestsData from "../../shared/opensource/pull_requests.json";
import IssuesData from "../../shared/opensource/issues.json";

class Opensource extends Component {
  render() {
    const hasOrganizations = OrganizationsData.data.length > 0;
    const hasPullRequests = PullRequestsData.data.length > 0;
    const hasIssues = IssuesData.data.length > 0;
    const hasCharts =
      PullRequestsData.totalCount > 0 || IssuesData.totalCount > 0;
    const hasOpenSourceData =
      hasOrganizations || hasPullRequests || hasIssues || hasCharts;

    return (
      <div className="opensource-main">
        <Header theme={this.props.theme} />
        {hasOpenSourceData ? (
          <>
            {hasOrganizations && <Organizations theme={this.props.theme} />}
            {hasCharts && <OpensourceCharts theme={this.props.theme} />}
            {hasPullRequests && <PullRequests theme={this.props.theme} />}
            {hasIssues && <Issues theme={this.props.theme} />}
          </>
        ) : (
          <div className="opensource-empty-state">
            <h1 style={{ color: this.props.theme.text }}>Open Source</h1>
            <p style={{ color: this.props.theme.secondaryText }}>
              Public hardware and verification repositories will be added here
              as project code is published. For now, you can follow my GitHub
              profile for portfolio updates and upcoming FPGA/VLSI projects.
            </p>
            <a
              href={greeting.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: this.props.theme.body,
                backgroundColor: this.props.theme.text,
                border: `solid 1px ${this.props.theme.text}`,
              }}
            >
              View GitHub Profile
            </a>
          </div>
        )}
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Opensource;
