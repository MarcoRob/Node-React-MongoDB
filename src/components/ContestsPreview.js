const React = require('react');

const ContestPreview = (contests) => (
    <div className='ContestPreview'>
        <div className='category-name'>
            {contests.categoryName}
        </div>
        <div className='contest-name'>
            {contests.contestName}
        </div>
    </div>
);

module.exports = ContestPreview;