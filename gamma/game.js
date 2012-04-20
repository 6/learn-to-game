require(['gma/base', 'gma/manager'],

    function(gma) {
        // The game specification is contained within this function.
        var manager = gma.manager({width: 600,height: 500});
        
        var myLevel = {
            entities : [
                {top:0, left:-7, width:9, height:1},
                {top:10, left:2, width:20, height:3}
            ]
        };
        
        // intiate the game loop: http://gammajs.org/glossary.html#term-game-loop
        manager.storeLevels(myLevel);
        manager.init();
    }
);
