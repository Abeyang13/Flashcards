import React from 'react';
import CurrentCard from '../Current-Card/Current-Card';
import collection from '../Data/Data';
import './Cards-Container.css';


class CardContainer extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections: collection,
            currentCollection: [],
            currentCard: []
        }
    }

    componentWillMount(){
        const myCollections = this.state.collections;
        this.setState({
            collections: myCollections,
            currentCollection: [myCollections[0]],
            currentCard: [myCollections[0].cards[0].word, myCollections[0].cards[0].definition]
        });
    }

    render(){

        return(
            <div>
                <CurrentCard word={this.props.word} defintion={this.props.definition} />
            </div>
        );
    }
}

export default CardContainer;