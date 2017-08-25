// SurveyField contains logic to render a form. label / text input
import React from 'react';

export default ({ input }) => {
	return (
		<div>
			<input {...input} />
		</div>
	);
};
