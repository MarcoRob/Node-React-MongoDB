const React = require('react');
const ContestPreview = require('./ContestsPreview');

const ContestList = ({contests, onContestClick}) => (
    <div className='ContestList'>
        {Object.keys(contests).map(contestId =>
            <ContestPreview key={contestId}
              onClick={onContestClick}
              {...contests[contestId]} />
        )}
    </div>
);

ContestList.propTypes = {
    contests : React.PropTypes.object,
    onContestClick : React.PropTypes.func.isRequired
  }

module.exports = ContestList;
