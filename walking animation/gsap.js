$( document ).ready(function() {
    var tlWalk = new TimelineMax({repeat: -1}),
        tlBreak = new TimelineMax({paused:true , repeat:-1}),
        tlReset = new TimelineMax({paused:true}),
        tlPipe = new TimelineMax({repeat: -1}),
        tlSmoke = new TimelineMax({repeat: -1}),
        tlBreakSmoke = new TimelineMax({repeat: -1}),
        // tlBg = new TimlineMax({repeat: -1}),
        man = $('#man'),
        armRight = $('#arm-right'),
        armLeft = $('#arm-left'),
        legRight = $('#leg-right'),
        legLeft = $('#leg-left'),
        head = $('#hoofd'),
        beard = $('#baard'),
        tattoo = $('#anker'),
        belly = $('#belly'),
        but = $('#but'),
        shadow = $('#schaduw'),
        pipe = $("#pijp"),
        breaks = $("#remsporen"),
        breaks1 = $("#rem1"),
        breaks2 = $("#rem2"),
        breaks3 = $("#rem3"),
        breaks4 = $("#rem4"),
        breaks5 = $("#rem5"),
        smoke = $(".wolken"),
        smoke1 = $("#wolk1"),
        smoke2 = $("#wolk2"),
        smoke3 = $("#wolk3"),
        smoke4 = $("#wolk4")
        ;



        $(document).mousemove(function(e){

        var viewport = $( window ).width();
        var halfViewport = viewport / 2;
          var coordinaten = e.pageX +', '+ (e.pageY - window.pageYOffset);
          var xAs = e.pageX;
          var speed;

          if (xAs <= halfViewport) {

              tlBreak.pause();
              TweenMax.to(man, 0.5, {rotation: 0, x:0});
              tlWalk.play();
              TweenMax.to(breaks, 0.1, {opacity: 0});
              var slow = 0;
              var fast = halfViewport;
              var speed = (halfViewport - xAs) / 200;

          }
          if (xAs >= halfViewport) {

                  tlWalk.pause();
                  tlBreak.play();
                  TweenMax.to(man, 0.2, {rotation: 10, x:40, y:-18});
                  TweenMax.to(legRight, 0.2, {rotation: 50, y:0});
                  TweenMax.to(legLeft, 0.2, {rotation: -10, y:0});
               TweenMax.to(armLeft, 0.2, {rotation: 0, transformOrigin: "10% 20%"});
               TweenMax.to(armRight, 0.2, {rotation: -130, transformOrigin: "80% 45%"});
               TweenMax.to(breaks, 0.1, {opacity: 1});
          }

          tlWalk.timeScale(speed);

       });


    tlWalk

        //links voor, rechts achter
        .to(man, 0.3, {y:-20})
        .to(shadow, 0.3, {scale:0.8, x:"10%", opacity:0.3}, "=-0.3")
        .to(legRight, 0.3, {rotation: 30, transformOrigin: "0 10%", y: -15}, "=-0.3")
        .to(legLeft, 0.3, {rotation: -30, transformOrigin: "100% 0", y:-2}, "=-0.3")
        //links midden laag, rechts midden hoog
        .to(man, 0.3, {y:0})
        .to(shadow, 0.3, {scale:1, x:0, opacity:1}, "=-0.3")
        .to(legRight, 0.3, {rotation: 60, transformOrigin: "0 10%", y: -2}, "=-0.3")
        .to(legLeft, 0.3, {rotation: -60, transformOrigin: "100% 0", y: -15}, "=-0.3")
        .to(armLeft, 0.6, {rotation: 90, transformOrigin: "10% 20%"}, "=-0.6")
        .to(armRight, 0.6, {rotation: -90, transformOrigin: "80% 45%"}, "=-0.6")
        //rechts voor, links achter
        .to(man, 0.3, {y:-20})
        .to(shadow, 0.3, {scale:0.9, x:"5%", opacity:0.3}, "=-0.3")
        .to(legRight, 0.3, {rotation: 30, transformOrigin: "0 10%", y: 2}, "=-0.3")
        .to(legLeft, 0.3, {rotation: -30, transformOrigin: "100% 0", y: -20}, "=-0.3")
        //links midden hoog, rechts midden laag
        .to(man, 0.3, {y:0})
        .to(shadow, 0.3, {scale:1, x:0, opacity:1}, "=-0.3")
        .to(legRight, 0.3, {rotation: 0, transformOrigin: "0 10%", y: 0}, "=-0.3")
        .to(legLeft, 0.3, {rotation: 0, transformOrigin: "100% 0", y:0}, "=-0.3")
        .to(armLeft, 0.6, {rotation: 0, transformOrigin: "10% 20%"}, "=-0.6")
        .to(armRight, 0.6, {rotation: 0, transformOrigin: "80% 50%"}, "=-0.6")
        //links voor, rechts achter
        ;

    tlBreak
        .to(man, 0.05, {y: -30})
        .to(man, 0.05, {y: -16})
        .to(man, 0.05, {y: -30})
        .to(man, 0.05, {y: -16})
        ;

    tlBreakSmoke
        .to(breaks1, 0.5, {x:200, opacity:0.9})
        .to(breaks1, 0.2, {opacity: 0})

        .to(breaks2, 0.5, {x:150, opacity:0.9}, "=-0.5")
        .to(breaks2, 0.2, {opacity: 0})

        .to(breaks4, 0.5, {x:80, opacity:0.9}, "=-0.5")
        .to(breaks4, 0.2, {opacity: 0})

        .to(breaks3, 0.5, {x:10, opacity:0.5}, "=-1.3")
        .to(breaks5, 1.5, {x:20, opacity:0.5}, "=-1.3")
        ;

    tlPipe
        .to(pipe, 1.5, {rotation: 20, transformOrigin: "-10% 120%", y: -14, ease:Back.easeInOut})
        .to(pipe, 1.5, {rotation: 0, transformOrigin: "-10% 120%", y: 0, ease:Back.easeInOut})

        ;



    tlSmoke
        .to(smoke1, 1.5, {rotation: 5, transformOrigin: "-10% 120%", y: -70, opacity:0.5})
        .to(smoke3, 1.5, {rotation: 0, y: -40, opacity:0}, "=-1.5")
        .to(smoke2, 1.5, {rotation: -10, transformOrigin: "-10% 120%", y: -50, opacity:0.5}, "=-1.3")
        .to(smoke4, 1.7, {rotation: -10, transformOrigin: "-10% 120%", y: -30, opacity:0.5}, "=-1.3")
        .staggerTo(smoke, 1, {opacity: 0})
        // .to(pipe, 1.5, {rotation: 0, transformOrigin: "-10% 120%", y: 0, ease:Back.easeInOut})

        ;

});
