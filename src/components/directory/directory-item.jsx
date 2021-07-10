import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory-item-style.scss';
class DirectoryItem extends React.Component 
{
    constructor()
    {
        super();
        this.state = {
            sections: [
                {
                    title: 'HATS', imageurl: 'https://i.ibb.co/cvpntL1/hats.png', id: 1, size: 'small'
                },
                {
                    title: 'JACKETS', imageurl: 'https://i.ibb.co/px2tCc3/jackets.png', id: 2, size: 'small'
                },
                {
                    title: 'SNEAKERS', imageurl: 'https://media.gq.com/photos/60a7cb370b7289a4f0fb8ac4/16:9/w_2560%2Cc_limit/ToddSynder%252520copy.jpg', id: 3, size: 'small'
                },
                {
                    title: 'WOMENS', imageurl: 'https://i.ibb.co/GCCdy8t/womens.png', id: 4, size: 'large'
                },
                {
                    title: 'MENS', imageurl: 'https://i.ibb.co/R70vBrQ/men.png', id: 5, size: 'large'
                }
            ]
        }
    }
    render()
    {
        return(
            <div className="directory-menu">

                {this.state.sections.map(({title, imageurl, id, size}) => (
                    <MenuItem key={id} title={title} imageurl={imageurl} size={size} />
                ))}

                </div>
        );
    }
}

export default DirectoryItem;