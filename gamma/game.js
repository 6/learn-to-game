require(['gma/base', 'gma/manager', 'gma/entities/character', 'gma/events', 'gma/entities/enemy'],

    function(gma) {
        // The game specification is contained within this function.
        var manager = gma.manager({width: 600,height: 500});
        
        manager.character = gma.character({left:0, bottom:0, width:3, height:6,depth:3});
        
        manager.addCustomDefinitions({
            templates: {
                greencube : ['meshTemplate', {
                    mesh : gma.unitCubeInfo.mesh,
                    material : {color : "#090"}
                }]
            },
            types: {
              jumpingJack: ['jumpingEnemy', {
                  width    : 1,
                  height   : 2,
                  template : 'greencube'
              }]
            }
        });
        
        var myLevel = {
            camera : {
                 locZ : 60,
                 attached : ['character',0, 3]
             },
            spawn : {
              main : [15, 24]
            },
            entities : [
                gma.platformEnemy({left:-5, bottom:0, width:3, height:6}),
                {type:'jumpingJack', bottom:0, left:-2},
                {top:0, left:-7, width:9, height:1},
                {top:10, left:2, width:20, height:3}
            ]
        };
        manager.storeLevels(myLevel);
        
        gma.keyHandler.register(37, manager.character.move.curry(gma.constants.LEFT));
        gma.keyHandler.register(39, manager.character.move.curry(gma.constants.RIGHT));
        gma.keyHandler.register(38, manager.character.jump);
        
        // intiate the game loop: http://gammajs.org/glossary.html#term-game-loop
        manager.init();
    }
);
