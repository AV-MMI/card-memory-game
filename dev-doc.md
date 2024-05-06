# dev doc

## functional requirements
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
                id:'',
                highlight: false,
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

        3. Button: Hint
            1. handleHint() -> void
            


## components

app -> state: darkTheme(true/false)
    navheader
        h1
        span
        dark/ligh theme button -> wstate: darkTheme(true/false)
    board -- comp -> state: cardsObjArr[]
        card display
            cards -- comp -> wstate: cardsObjArr[]
        board optsBar
            score display
                current
                max
            buttons -- comp
                reset score
                auto save / no save
                get hint
    footer


    board
    
app
    nav
    board
        row
            card
            card
            card
            card
        row
            card
            card
            card
            card
    boardOpts
        buttons
    footer