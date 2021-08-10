import React from 'react';
import MenuItem from '../menu-item/menu-item';
import { selectDirectorySections } from './directory-selectors';
import { createStructuredSelector } from 'reselect';
import './directory-item-style.scss';
import {connect} from 'react-redux'
const DirectoryItem = ({sections}) => (
    <div className="directory-menu">

                {sections.map(({title, imageurl, id, size, linkUrl}) => (
                    <MenuItem key={id} title={title} imageurl={imageurl} size={size} linkUrl={linkUrl} />
                ))}

                </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryItem);