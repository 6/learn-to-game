require(['gma/base', 'gma/manager'],

    function(gma) {
        // The game specification is contained within this function.
        var manager = gma.manager();
        manager.storeLevels({});
        manager.init();
    }
);
