require(['gma/base', 'gma/manager'],

    function(gma) {
        // The game specification is contained within this function.
        var manager = gma.manager({width: 600,height: 500});
        // intiate the game loop: http://gammajs.org/glossary.html#term-game-loop
        manager.storeLevels({});
        manager.init();
    }
);
