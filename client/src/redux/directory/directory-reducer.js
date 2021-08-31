const initial_state = {
    sections: [
        {
            title: 'HATS', imageurl: 'https://i.ibb.co/cvpntL1/hats.png', id: 1, size: 'small', linkUrl: 'shop/hats'
        },
        {
            title: 'JACKETS', imageurl: 'https://i.ibb.co/px2tCc3/jackets.png', id: 2, size: 'small', linkUrl: 'shop/jackets'
        },
        {
            title: 'SNEAKERS', imageurl: 'https://media.gq.com/photos/60a7cb370b7289a4f0fb8ac4/16:9/w_2560%2Cc_limit/ToddSynder%252520copy.jpg', id: 3, size: 'small', linkUrl: 'shop/sneakers'
        },
        {
            title: 'WOMENS', imageurl: 'https://i.ibb.co/GCCdy8t/womens.png', id: 4, size: 'large', linkUrl: 'shop/womens'
        },
        {
            title: 'MENS', imageurl: 'https://i.ibb.co/R70vBrQ/men.png', id: 5, size: 'large', linkUrl: 'shop/mens'
        }
    ]
};

const DirectoryReducer = (state=initial_state, action) =>
{
    switch(action.type)
    {
        default:
            return state;
    }
}

export default DirectoryReducer;