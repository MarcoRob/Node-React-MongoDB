const React = require('react');
const ContestPreview = require('./ContestsPreview');

const ContestList = ({contests, onContestClick}) => (
    <div className='ContestList'>
        {contests.map(contest =>
            <ContestPreview key={contest.id}
              onClick={onContestClick}
              {...contest} />
        )}
    </div>
);

ContestList.propTypes = {
    contests : React.PropTypes.array,
    onContestClick : React.PropTypes.func.isRequired
  }

module.exports = ContestList;
