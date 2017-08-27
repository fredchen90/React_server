// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  // constructor(props) {
  // 	super(props);
  //
  // 	this.state = { showFormReview: false };
  // }

  // Create react application use babel pluginm
  // equal above constructor
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview === true) {
      return <SurveyFormReview />;
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default SurveyNew;
