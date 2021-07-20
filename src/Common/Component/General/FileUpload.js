// import statements
import React from 'react';
import PropTypes from 'prop-types';

const openFileSearchWindow = () => {
	document.getElementById('fileinput').click();
}

const processCsvFile = (e) => {
	var f = e.target.files[0];

	if (f) {
		var r = new FileReader();
		r.onload = function (e) {
			var contents = e.target.result;
			var lines = contents.split('\n'), output = [];

			for (var i = 0; i < lines.length; i++) {
				console.log(lines[i].split(','));
			}
		}
		r.readAsText(f);
	} else {
		alert('Failed to load file');
	}
}

// export icon
const FileUpload = () => (
	<React.Fragment>
		<input
			type='file'
			id='fileinput'
			className='btn btn-primary'
			style={{display: 'none'}}
			onChange={(e) => processCsvFile(e)}
		/>
		<a
			href='#'
			className='btn btn-info btn-add-item'
			onClick={() => {
				openFileSearchWindow();
			}}>
			<i className='ion ion-upload'></i> UPLOAD
		</a>
	</React.Fragment>
);

// prop types
FileUpload.propTypes = {
	iconClass: PropTypes.string.isRequired
};

// export the component
export default React.memo(FileUpload);