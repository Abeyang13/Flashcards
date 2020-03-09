import React, {Component} from 'react';
import CurrentCard from '../Current-Card/currentCard';
import collection from '../Data/data';
import './cardsContainer.css';


class CardContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            collections: collection,
            currentCollection: [],
            currentCard: [],
            currentIndex: 0
        }
    }
    componentDidMount(){
        const myCollections = collection;
        this.setState({
            collections: myCollections,
            currentCollection: myCollections[0],
            currentCard: myCollections[0].cards[0],
        });
    }

    setNextCard = () =>{
        const current = this.state.currentCollection;
        const index = this.state.currentIndex;
        this.setState({
            currentCard: current.cards[index + 1],
            currentIndex: index + 1
        });
    }

    setPreviousCard = () =>{
        const current = this.state.currentCollection;
        const index = this.state.currentIndex;
        this.setState({
            currentCard: current.cards[index - 1],
            currentIndex: index - 1
        });
    }

    render(){
        return(
            <>
            <div>
                <CurrentCard title={this.state.currentCollection.title} 
                             word={this.state.currentCard.word} 
                             definition={this.state.currentCard.definition} 
                />
            </div>
            <div>
            <button onClick={this.setPreviousCard}>Previous Card</button><button onClick={this.setNextCard}>Next Card</button>
            </div>
            </>
        );
    }
}

export default CardContainer;