const randomImageUrl = (keyword, range) => (`
https://source.unsplash.com/120x120/?${keyword || 'food'},${Math.random(range || 1000)}
`);


export default randomImageUrl;
