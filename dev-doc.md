# dev doc

## functional requirements

localStorage.museMatch = {
    theme: '',
    cardsObjArr: [{...}, {...} ...];
    cardsObjComponents [<jsx>, <jsx>, ...];
}

1. toggleTheme():
    toggle the current theme from dark to light or light to dark

2. board component: states[formatedCardsArr]
    1. cards section
        1. displayCards():
            1. cards data obj = {
                title:'',
                author:'',
                year:'',
                department
                url:'',
                imgSrc:'',
                clicked: false,
            }
            
            2. cardClicked() -> void:
                each time a card is clicked it's clicked property turn true, and sorts the cardArr in a random order.
            
            3. randomOrderCards() -> void:
                setCardsArr in a new order and re display all cards components
                1. sortCards() -> []
                2. displayCards() -> void      

    2. gameOptsBar component:
        1. Display scores:
            1. current score
            2. max score
        
        2. Button: reset score
            resets current score and max score
            1. updateLocalStorage obj

        3. Button: Auto save / no save
            uses localStorage to save automatically .cards, .theme, .scores, when any of them have changed.

        3. Button: get hint
            1. getHint() -> jsx component
            return a card that hasn't been clicked before


