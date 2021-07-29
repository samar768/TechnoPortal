import React from 'react';
import PropTypes from 'prop-types';

export   const PageHeading = (props) => {
    return (
        <>
            <div className="section-header">
                <h1>{props.PageHeading}</h1>
            </div>

        </>

    )
}

PageHeading.prototype={
    PageHeading:PropTypes.string.isRequired,
}

export default PageHeading
