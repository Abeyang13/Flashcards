import React, {Component} from 'react';
import CurrentCard from '../Current-Card/Current-Card';
import collection from '../Data/Data';
import './Cards-Container.css';


class CardContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            collections: collection,
            currentCollection: [],
            currentCard: {}
        }
    }
    componentDidMount(){
        const myCollections = this.state.collections;
        this.setState({
            collections: myCollections,
            currentCollection: this.setActiveCollection(myCollections),
            currentCard: this.setActiveCard(myCollections)
        });
    }

        setActiveCollection(myCollections){
            var currentCollection = myCollections[0];
            return (currentCollection);
        }

        setActiveCard(myCollections){
            var card = myCollections[0].cards[0];
            return (card);
        }
    render(){

        return(
            <div>
                <CurrentCard word={this.state.currentCard.word} definition={this.state.currentCard.definition} />
            </div>
        );
    }
}

export default CardContainer;