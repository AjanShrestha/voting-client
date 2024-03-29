import React from 'react';

class Vote extends React.PureComponent {
    getPair = () => {
        return this.props.pair || [];
    }

    isDisabled = () => {
        return !!this.props.hasVoted;
    }

    hasVotedFor = (entry) => {
        return this.props.hasVoted === entry;
    }

    render() {
        return (
            <div className="voting">
                {this.getPair().map((entry, index) => 
                    <button key={index}
                            disabled={this.isDisabled()}
                            onClick={() => this.props.vote(entry)}>
                        <h1>{entry}</h1>
                        {
                            this.hasVotedFor(entry) ? 
                            <div className="label">Voted</div> :
                            null
                        }
                    </button>
                )}
            </div>
        );
    }
};

export default Vote;