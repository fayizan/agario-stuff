//v1.979
setTimeout(function() {
    $('#create-party-btn')['click']()
}, 3500);
var currentIP = '0.0.0.0:0';
var currentToken = '';
var previousMode = localStorage['getItem']('gamemode');
var defaultMusicUrl = 'https://www.youtube.com/watch?v=f5cXwgjs0aE';
var coinTimer;
var musicPlayer;
var originalDeath;
var stateObj = {
    foo: 'bar'
};
var containermain;
var closebutton1 = '0';
var modebetter = '';
var modbetter2 = '';
var fullornot = 'NO';
var minimapbckimg = '';
var leadbimg = '';
var teambimg = '';
var canvasbimg = '';
var pic1urlimg = 'http://i.imgur.com/RVBi3T1.gif';
var pic2urlimg = 'http://i.imgur.com/p2T29QE.gif';
var pic3urlimg = 'http://i.imgur.com/EucIfYY.gif';
var pic4urlimg = 'http://i.imgur.com/KOoBDaK.gif';
var pic5urlimg = 'http://i.imgur.com/CS03xWv.gif';
var pic6urlimg = 'http://i.imgur.com/tfMUu2J.gif';
var pic1dataimg = 'Bad Choice!';
var pic2dataimg = 'Why?';
var pic3dataimg = 'Yow!!';
var pic4dataimg = 'Death!';
var pic5dataimg = 'Relax!';
var pic6dataimg = 'Legend Mod!';
var lastIP = '';
var autoRespawn = localStorage['getItem']('autoRespawn');
var showToken = localStorage['getItem']('showTK');
var showPlayer = localStorage['getItem']('showPlayer');
var IPBtn = localStorage['getItem']('IPBtn');
var SHOSHOBtn = localStorage['getItem']('SHOSHOBtn');
var XPBtn = localStorage['getItem']('XPBtn');
var TIMEBtn = localStorage['getItem']('TIMEBtn');
var MAINBBtn = localStorage['getItem']('MAINBBtn');
var MAINBTBtn = localStorage['getItem']('MAINBTBtn');
var MANUIBtn = localStorage['getItem']('MANUIBtn');
var YoutubeAutoBtn = localStorage['getItem']('YoutubeAutoBtn');
var TIMEcalBtn = localStorage['getItem']('TIMEcalBtn');
var troll1Btn = localStorage['getItem']('troll1Btn');
var ComPosition = localStorage['getItem']('ComPosition');
var autoCoinBtn = localStorage['getItem']('autoCoinBtn');
var copyGameNames = localStorage['getItem']('copyGameNames');
var url = localStorage['getItem']('url');
var region = getParameterByName('r', url);
var mode = getParameterByName('m', url);
var searchStr = getParameterByName('search', url);
var searchSip = getParameterByName('sip', url);
var realmode = '';
var token = '';
var messageone = 1;
var hiddenfromclan = 0;
var saveclanpassword;
var troll1;
var seticon = 'YES';
var clanpassword;
var searching;
var timerId;
var semimodVersion = 2;
T = {};
if (mode == '') {
    modebetter2 = ':ffa'
} else {
    modebetter2 = mode
};
loadericon();
setTimeout(function() {
    MC['setQuality']($('#quality')['val']());
    if (searchSip != null) {
        $('#cur-tk-hud')['html']('<i class="fa fa-lock" aria-hidden="true"></i>' + 'Region:' + region + ' Mode' + modebetter2 + ' IP:' + searchSip);
        setTimeout(function() {
            history['pushState'](stateObj, 'page 2', '?sip=' + searchSip + '#&?r=' + region + '&m=' + mode)
        }, 6000)
    };
    $('#cur-tk-hud')['bind']('DOMSubtreeModified', function() {
        setTimeout(function() {
            realmode = getGameMode();
            if (searchSip == null) {
                history['pushState'](stateObj, 'page 2', '?sip=' + currentIP + '#&?r=' + MC['getRegion']() + '&m=' + realmode)
            };
            MC['setQuality']($('#quality')['val']());
            return realmode
        }, 1000);
        setTimeout(function() {
            MC['setQuality']($('#quality')['val']())
        }, 2000);
        setTimeout(function() {
            MC['setQuality']($('#quality')['val']());
            lastIP = currentIP;
            localStorage['setItem']('lastIP', lastIP)
        }, 5000)
    })
}, 7000);
if (searchSip != null) {
    setTimeout(function() {
        MC['setQuality']($('#quality')['val']())
    }, 7000);
    setTimeout(function() {
        MC['setQuality']($('#quality')['val']())
    }, 8000);
    setTimeout(function() {
        MC['setQuality']($('#quality')['val']())
    }, 9000);
    setTimeout(function() {
        MC['setQuality']($('#quality')['val']())
    }, 10000);
    setTimeout(function() {
        MC['setQuality']($('#quality')['val']())
    }, 11000);
    setTimeout(function() {
        MC['setQuality']($('#quality')['val']())
    }, 12000);
    setTimeout(function() {
        MC['setQuality']($('#quality')['val']())
    }, 13000);
    setTimeout(function() {
        MC['setQuality']($('#quality')['val']())
    }, 14000);
    setTimeout(function() {
        MC['setQuality']($('#quality')['val']())
    }, 15000);
    setTimeout(function() {
        MC['setQuality']($('#quality')['val']())
    }, 16000);
    setTimeout(function() {
        MC['setQuality']($('#quality')['val']())
    }, 17000);
    setTimeout(function() {
        MC['setQuality']($('#quality')['val']())
    }, 18000)
};
setTimeout(function() {
    MC['setQuality']($('#quality')['val']())
}, 20000);

function init(_0x8ddex40) {
    var _0x8ddex41 = 0;
    setTimeout(function() {
        document['title'] = 'Legend mod v' + _0x8ddex40;
        $('button:contains(\'Spectate\')')['html']('<span class="glyphicon glyphicon-globe"></span>')['attr']('data-toggle', 'tooltip')['prop']('title', 'Spectate');
        $('button:contains(\'Logout\')')['html']('<span class="glyphicon glyphicon-off"></span>')['attr']('data-toggle', 'tooltip')['prop']('title', 'Logout');
        $('button:contains(\'Copy\')')['removeClass']('btn-info')['addClass']('btn-link');
        $('#create-party-btn')['html']('<span class="glyphicon glyphicon-plus"></span>');
        $('#create-party-btn')['attr']('data-toggle', 'tooltip')['prop']('title', 'Create party');
        $('#join-party-btn')['html']('<span class="glyphicon glyphicon-save"></span>')['attr']('data-toggle', 'tooltip')['prop']('title', 'Join party')['attr']('style', 'width: 49% !important; float: right;');
        $('body')['prepend']('<div id="backgroundFade" style="width: 100%; height: 100%; position: absolute; background: black; z-index: 100; opacity: 0.6; display: none;"></div>');
        $('#overlays')['css']('z-index', 100);
        $('#overlays-hud')['prepend']('<div id="statsInfo" class="main-color" style="display: none;font-size: 13px;margin-top: 3px;float: left;font-weight: 700;background-color: rgba(0, 0, 0, 0.2);padding: 3px;border-radius: 4px;width: 65%;height: 24px;z-index: 15;margin: auto;top: 0px;right: 0px;left: 0px;bottom: 85px;position: fixed;pointer-events: auto;color: #ffffff;"><p style="float: left;margin-left: 10px;">Region: <span id="currentRegion"></span></p><p style="float: right;margin-right: 225px;">Servers: <span id="numServers"></span> (<span id="pps"></span> <span data-toggle="tooltip" data-placement="top" data-original-title="Players per server">PPS</span>)</p><p style="margin-left: 245px;">Players: <span id="numPlayers"></span> / <span id="totalPlayers"  data-toggle="tooltip" data-placement="top" data-original-title="Total players online"></span></p></div>' + '<div id="searchHud" class="hud" style="width: 65%; height: 60px; z-index: 15; margin: auto; top: 0; right: 0; left: 0; bottom: 0; position: fixed;">' + '<div id="" style="margin-top: 10px;">' + '<input id="searchInput" class="form-control" title="" placeholder="Enter friend\'s token, IP, leaderboard, name or clan tag..." style="margin-bottom: 10px;float: left;width: 80% !important;text-align: center;">' + '<button id="searchBtn" class="btn btn-copy-token copy-party-token btn-primary" data-toggle="tooltip" data-placement="bottom" data-original-title="Cancel search" style="margin-bottom:10px;width: 15%;"><span id="searchSpan" class="glyphicon glyphicon-search"></span></button>' + '<button id="closeBtn" class="btn btn-copy-token copy-party-token" data-toggle="tooltip" style="color: #ffffff;margin-bottom:10px;width: 10%; background-color: transparent;" data-placement="right" data-original-title="Close" title=""><span class="glyphicon glyphicon-remove-circle"></span></button>' + '</div></div>');
        $('#statsInfo')['before']('<div id="notes" class="main-color" style="display:none;font-size: 13px;float: left;font-weight: 700;border-radius: 4px;width: 65%;height: 147px;z-index: 15;margin: auto;top: 0px;right: 0px;left: 0px;bottom: 400px;position: fixed;pointer-events: auto;color: rgb(255, 255, 255);padding: 10px;background-color: rgba(0, 0, 0, 0.2);"><h5 class="main-color text-center" style="margin-top: 0px;">Save for later</h5>' + '<input id="note1" class="form-control main-color note" style="background: transparent;color: lightgrey;  width: 25%;float:left; border: none; border-bottom: 1px solid; border-color: darkgrey; margin-right: 7px; text-align: center;">' + '<input id="note2" class="form-control main-color note" style="background: transparent; color: lightgrey; width: 24%; float: left; border: none; border-bottom: 1px solid; margin-left: 0px; margin-right: 7px; text-align: center; border-color: darkgrey;">' + '<input id="note3" class="form-control main-color note" style="background: transparent; width: 49%; border: none; border-bottom: 1px solid; margin-left: 10px; text-align: center; border-color: darkgrey;">' + '<input id="note4" class="form-control main-color note" style="background: transparent; color: lightgrey; width: 25%; float: left; border: none; border-bottom: 1px solid; margin-right: 7px; text-align: center; border-color: darkgrey;">' + '<input id="note5" class="form-control main-color note" style="background: transparent; color: lightgrey; width: 24%; float: left; border: none; border-bottom: 1px solid; margin-left: 0px; margin-right: 7px; text-align: center; border-color: darkgrey;">' + '<input id="note6" class="form-control main-color note" style="background: transparent; color: lightgrey; width: 49%; border: none; border-bottom: 1px solid; margin-left: 10px; text-align: center; border-color: darkgrey;">' + '<input id="note7" class="form-control main-color note" style="background: transparent; color: lightgrey; border: none; border-bottom: 1px solid; text-align: center; border-color: darkgrey;">' + '</div>');
        $('.menu-tabs')['children']()['attr']('style', 'width: 14.27%;');
        $('.menu-tabs')['children']()['last']()['after']('<li class="legend-tab" style="width: 14.27%; height: 100%;" data-toggle="tooltip" data-title="Tools" data-placement="top"><a style="height: 100%;" onclick="$(\'#main-menu\').children(\'div\').hide(); $(\'.menu-tabs\').children(\'li\').removeClass(\'active\'); $(\'.menu-tabs\').children(\'li\').children(\'a\').removeClass(\'active\'); $(\'#legend\').fadeIn(); $(this).addClass(\'active\'); $(this).parent().addClass(\'active\'); $(\'#helloContainer\').attr(\'style\',\'transform: translate(-50%, 0%) scale(1); top: 207px;\')" href="javascript:void(0);" class="fa fa-cogs"></a></li>');
        $('#main-menu')['children']()['last']()['after']('<div id="legend" class="menu-panel"><div class="agario-panel legend-panel">' + '<button id="IPBtn" type="button" class="btn btn-sm btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%;"><i class="fa fa-trademark"></i>Show IP</button>' + '<button id="SHOSHOBtn" type="button" class="btn btn-sm btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-left: 0.5%;"><i class="fa fa-puzzle-piece"></i>Show Shortcuts</button>' + '<button id="XPBtn" type="button" class="btn btn-sm btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%;"><i class="fa fa-gamepad"></i>Show XP Bar</button>' + '<button id="TIMEBtn" type="button" class="btn btn-sm btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-left: 0.5%;"><i class="fa fa-clock-o"></i>Show Time</button>' + '<button id="MAINBBtn" type="button" class="btn btn-sm btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%;"><i class="fa fa-bars"></i>Show Main Banner</button>' + '<button id="MAINBTBtn" type="button" class="btn btn-sm btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-left: 0.5%;"><i class="fa fa-minus"></i>Show Main Tools</button>' + '<button id="MANUIBtn" type="button" class="btn btn-sm btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%;"><i class="fa fa-minus"></i>Show Manual Skins</button>' + '<button id="HideAllBthn" type="button" class="btn btn-sm btn-danger" data-toggle="button" aria-pressed="false" autocomplete="off" data-toggle="tooltip" data-placement="right" data-original-title="Temporarily Hide/Show Everything. Function for Youtubers" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-left: 0.5%;"><i class="fa fa-exclamation-triangle"></i>Hide Everything</button>' + '<button id="TIMEcalBtn" type="button" class="btn btn-sm btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%;"><i class="fa fa-calculator"></i>Show Timer Calc.</button>' + '<button id="copyGameNames" type="button" class="btn btn-sm btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-left: 0.5%;"><i class="fa fa-scissors"></i>Edit Names</button>' + '<button id="autoCoinBtn" type="button" class="btn btn-sm btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%;"><i class="fa fa-clock-o"></i> Auto free coins</button>' + '<button id="autoRespawnBtn" type="button" class="btn btn-sm btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off" data-original-title="" title="" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-left: 0.5%;"><i class="fa fa-flash"></i> Auto respawn</button>' + '<button id="troll1Btn" type="button" class="btn btn-sm btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off" data-original-title="" title="" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%;"><i class="fa fa-bath"></i> Troll on Death </button>' + '<div class="input-box" style="text-align: center; font-size: 12px; margin-top: 4px; padding: 6px 0 6px 0;"><span class="title" style="">Manual background images</span>' + '<select id="backgroundPic" class="form-control" onchange="changePicFun();" required="" data-original-title="" title="">' + '<option value="1" data-itr="">Minimap</option>' + '<option value="2" data-itr="">Leaderboard</option>' + '<option value="3" data-itr="">Teamboard</option>' + '<option value="4" data-itr="">Main Canvas</option>' + '</select>' + '<input id="minimapPicture" class="form-control" placeholder="Minimap Image URL" value="" style="margin-top: 4px; display: block;" onblur="setminbgname();">' + '<input id="leadbPicture" class="form-control" placeholder="Leaderboard Image URL" value="" style="margin-top: 4px; display: none;" onblur="setleadbgname();">' + '<input id="teambPicture" class="form-control" placeholder="Teamboard Image URL" value="" style="margin-top: 4px; display: none;" onblur="setteambgname();">' + '<input id="canvasPicture" class="form-control" placeholder="Main Canvas Image URL" value="" style="margin-top: 4px; display: none;" onblur="setcanvasbgname();">' + '</div>' + '<div class="input-box" style="text-align: center; font-size: 12px; margin-top: 4px; padding: 6px 0 6px 0;"><span class="title" style="">Manual Message Icons</span>' + '<select id="changephotos" class="form-control" onchange="changePhotoFun();" required="" data-original-title="" title="">' + '<option value="1" data-itr="">Manual Message Icon 1</option>' + '<option value="2" data-itr="">Manual Message Icon 2</option>' + '<option value="3" data-itr="">Manual Message Icon 3</option>' + '<option value="4" data-itr="">Manual Message Icon 4</option>' + '<option value="5" data-itr="">Manual Message Icon 5</option>' + '<option value="6" data-itr="">Manual Message Icon 6</option>' + '</select>' + '<input id="pic1url" class="form-control" placeholder="Message Icon 1 Imgur Url" value="" style="margin-top: 4px; display: block;" onblur="setpic1url();">' + '<input id="pic2url" class="form-control" placeholder="Message Icon 2 Imgur Url" value="" style="margin-top: 4px; display: none;" onblur="setpic2url();">' + '<input id="pic3url" class="form-control" placeholder="Message Icon 3 Imgur Url" value="" style="margin-top: 4px; display: none;" onblur="setpic3url();">' + '<input id="pic4url" class="form-control" placeholder="Message Icon 4 Imgur Url" value="" style="margin-top: 4px; display: none;" onblur="setpic4url();">' + '<input id="pic5url" class="form-control" placeholder="Message Icon 5 Imgur Url" value="" style="margin-top: 4px; display: none;" onblur="setpic5url();">' + '<input id="pic6url" class="form-control" placeholder="Message Icon 6 Imgur Url" value="" style="margin-top: 4px; display: none;" onblur="setpic6url();">' + '</div>' + '<input id="pic1data" class="form-control" placeholder="Message Icon 1 Text" value="" style="margin-top: 0px; display: block;" onblur="setpic1data();">' + '<input id="pic2data" class="form-control" placeholder="Message Icon 2 Text" value="" style="margin-top: 0px; display: none;" onblur="setpic2data();">' + '<input id="pic3data" class="form-control" placeholder="Message Icon 3 Text" value="" style="margin-top: 0px; display: none;" onblur="setpic3data();">' + '<input id="pic4data" class="form-control" placeholder="Message Icon 4 Text" value="" style="margin-top: 0px; display: none;" onblur="setpic4data();">' + '<input id="pic5data" class="form-control" placeholder="Message Icon 5 Text" value="" style="margin-top: 0px; display: none;" onblur="setpic5data();">' + '<input id="pic6data" class="form-control" placeholder="Message Icon 6 Text" value="" style="margin-top: 0px; display: none;" onblur="setpic6data();">' + '</div>' + '<div class="input-box" style="text-align: center; font-size: 12px; margin-top: 4px; padding: 0px 0 0px 0;"><span class="title" style="">Chat Position</span><div class="btn-group">' + '<button id="topleft" type="button" class="btn btn-primary"><i class="fa fa-arrow-up" aria-hidden="true"></i><i class="fa fa-arrow-left" aria-hidden="true"></i></button>' + '<button id="topright" type="button" class="btn btn-primary"><i class="fa fa-arrow-up" aria-hidden="true"></i><i class="fa fa-arrow-right" aria-hidden="true"></i></button>' + '<button id="bottomright" type="button" class="btn btn-primary"><i class="fa fa-arrow-down" aria-hidden="true"></i><i class="fa fa-arrow-right" aria-hidden="true"></i></button>' + '<button id="bottomleft" type="button" class="btn btn-primary"><i class="fa fa-arrow-down" aria-hidden="true"></i><i class="fa fa-arrow-left" aria-hidden="true"></i></button>' + '</div></div>' + '' + '</div></div>');
        $('#HideAllBthn')['tooltip']({
            title: 'Temporarily Hide/Show Everything. Function for Youtubers',
            placement: 'bottom'
        });
        var _0x8ddex42 = (localStorage['getItem']('musicUrl') == null ? defaultMusicUrl : localStorage['getItem']('musicUrl'));
        $('#music')['replaceWith']('<div id="music" class="menu-panel" style="display: none;"><div class="agario-panel"><h5 class="main-color">Youtube player</h5>' + '<iframe id="musicFrame" width="320" height="180" src="' + getEmbedUrl(_0x8ddex42) + '" frameborder="0" allowfullscreen=""></iframe>' + '<input id="musicUrl" onclick="$(this).select();" type="text" value="' + _0x8ddex42 + '" class="form-control" data-toggle="tooltip" data-placement="right" data-original-title="Paste your video/playlist here">' + '<button id="YoutubeAutoBtn" type="button" class="btn btn-block btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px;"><i class="fa fa-youtube-play"></i>Auto Youtube On</button></div></div>');
        if (typeof YT !== 'undefined') {
            musicPlayer = new YT.Player('musicFrame', {
                events: {
                    "\x6F\x6E\x53\x74\x61\x74\x65\x43\x68\x61\x6E\x67\x65": function(_0x8ddex43) {
                        if (_0x8ddex43['data'] == 1) {
                            $('#playerI')['removeClass']('fa-play-circle')['addClass']('fa-pause-circle');
                            $('#playerBtn')['attr']('data-original-title', 'Pause')['tooltip']('fixTitle')
                        } else {
                            $('#playerI')['removeClass']('fa-pause-circle')['addClass']('fa-play-circle');
                            $('#playerBtn')['attr']('data-original-title', 'Play')['tooltip']('fixTitle')
                        }
                    }
                }
            })
        };
        $('#exp-bar > .icon-user')['addClass']('fa fa-cog fa-spin fa-3x fa-fw')['removeClass']('icon-user');
        $('.music-tab')['children']()['addClass']('quick-yt icon-youtube2')['removeClass']('icon-music')['attr']('data-original-title', 'Youtube radio');
        document['getElementsByClassName']('quick-yt icon-youtube2')[0]['setAttribute']('id', 'legendid');
        document['getElementsByClassName']('quick-yt icon-youtube2')[0]['href'] = 'https://www.youtube.com/watch?v=CnIfNSpCf70';
        document['getElementsByClassName']('quick-yt icon-youtube2')[0]['setAttribute']('data-original-title', 'Legend Promo Video');
        $('#legendid')['addClass']('fa fa-thumbs-o-up')['removeClass']('quick-yt icon-youtube2');
        $('#musicUrl')['on']('input', function() {
            $(this)['attr']('maxlength', '0')
        });
        $('#musicUrl')['bind']('paste', function(_0x8ddex44) {
            $(this)['attr']('maxlength', '1000');
            var _0x8ddex45 = _0x8ddex44['originalEvent']['clipboardData']['getData']('text');
            var _0x8ddex46 = getEmbedUrl(_0x8ddex45['trim']());
            if (_0x8ddex46 == false) {
                toastr['error']('Cannot open this youtube URL')['css']('width', '210px');
                setTimeout(function() {
                    if (localStorage['getItem']('musicUrl') == null) {
                        $('#musicUrl')['val'](defaultMusicUrl)
                    } else {
                        $('#musicUrl')['val'](localStorage['getItem']('musicUrl'))
                    }
                }, 500)
            } else {
                $('#musicFrame')['attr']('src', _0x8ddex46);
                localStorage['setItem']('musicUrl', _0x8ddex45['trim']())
            }
        });
        $('.note')['keyup'](function(_0x8ddex47) {
            localStorage['setItem'](_0x8ddex47['target']['id'], $(_0x8ddex47['target'])['val']())
        });
        $('#searchHud')['after']('<div id="searchLog" class="main-color" style="font-size: 13px;float: left;font-weight: 700;border-radius: 4px;width: 65%;height: 270px;z-index: 15;margin: auto;top: 0px;right: 0px;left: 0px;bottom: -390px;position: fixed;pointer-events: auto;color: rgb(255, 255, 255);padding: 10px;display: none;background-color: rgba(0, 0, 0, 0.2);"><h5 id="logTitle" class="main-color text-center" style="margin-top: 0px;">Leaderboard history</h5>' + '<div id="log" style="font-weight: normal; overflow-x: hidden; overflow-y: auto;height: 90%;">' + '</div></div>');
        $('#leaderboard-hud')['append']('<div id="leaderboard-menu">' + '<a id="searchShortcut" class="btn btn-sm btn-info" data-toggle="tooltip" data-placement="left" data-original-title="Join server (Backspace)" style="width: 33.3%;text-shadow: 0.3px 0.3px #000000;font-size: small;margin-top: 0px;border-top-color: rgb(141, 201, 64);border-bottom-style: none;border-left-style: none;border: none;margin-top: 0px; background-color: transparent;" data-original-title="Search leaderboards" title=""><span id="searchSpan" class="glyphicon glyphicon-search"></span></a>' + '<a id="copySIPBtn" href="javascript:void(0);" class="btn btn-sm btn-copy-leaderboard btn-info" style="background-color: transparent; width: 33.3%;text-shadow: 0.3px 0.3px #000000;font-size: small;margin-top: 0px;/* border: none; */border-left-style: none;border-right-style: none;border-bottom-style: none;border: none; user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-drag: none; -webkit-user-select: none; -ms-user-select: none;" data-toggle="tooltip" data-placement="left" data-original-title="Copy Token(Party), SIP Locked Address(Other)">Copy</a>' + '<a id="reconnectBtn" class="btn btn-info btn-sm icon-loop2" title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Change server (+)" style="' + 'background-color: transparent;width: 33.3%; text-shadow: 0.3px 0.3px #000000; font-size: small; margin-top: 0px; margin-top: 0px; border: none;"></a>' + '<div id="dropDown3" class="hud" style="position: absolute; pointer-events: auto; width: 33%; height: 30x; left: 0px; padding: 0px; border-radius: 0px;">' + '<a id="lastIPBtn" data-disabled="true" href="javascript:void(0);" class="btn btn-sm btn-copy-leaderboard btn-info" style="width: 33.3%;text-shadow: 0.3px 0.3px #000000;font-size: small;margin-top: 0px;border-top-color: rgb(141, 201, 64);border-bottom-style: none;border-left-style: none;border: none;margin-top: 0px; background-color: transparent;" data-toggle="tooltip" data-html="true" data-placement="left" data-original-title="<p style=&quot;margin-top:3px; margin-bottom:0px;&quot; align=&quot;center&quot;><span class=&quot;hud-main-color&quot; style=&quot;position:absolute; left: 15px;&quot;>NEW</span>Join back</p><hr style=&quot;margin-top:5px; margin-bottom:10px; border-color:darkslategray;&quot;/><p class=&quot;&quot; style=&quot;margin-bottom:3px; font-weight:normal;&quot; align=&quot;justify&quot;>Connect to last IP you played</p>"><span class="glyphicon glyphicon-download-alt"></span></a>' + '</div>' + '<div id="dropDown" class="hud" style="position: absolute; pointer-events: auto; width: 33%; height: 60px; left: 67px; padding: 0px; border-radius: 0px;">' + '<a id="copyIPBtn" href="javascript:void(0);" class="btn btn-sm btn-copy-leaderboard btn-info" style="background-color: transparent; width: 100%;text-shadow: rgb(0, 0, 0) 0.3px 0.3px;font-size: small;margin-top: 0px;display: block;border: none; user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-drag: none; -webkit-user-select: none; -ms-user-select: none;" data-toggle="tooltip" data-placement="left" data-original-title="Copy IP Address">IP</a>' + '<a id="copyLBBtn" href="javascript:void(0);" class="btn btn-sm btn-copy-leaderboard btn-info" style="background-color: transparent; width: 100%;text-shadow: rgb(0, 0, 0) 0.3px 0.3px;font-size: small;margin-top: 0px;display: block;border: none; user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-drag: none; -webkit-user-select: none; -ms-user-select: none;" data-toggle="tooltip" data-placement="left" data-original-title="Copy Leaderboard (L)">Board</a>' + '</div>' + '<input id="tempCopy" style="display: none;" value="">' + '</div>');
        $('#searchShortcut')['mouseenter'](function() {
            $('#dropDown')['hide']();
            $('#dropDown3')['show'](100);
            $('#copySIPBtn')['text']('Copy')
        });
        $('#copySIPBtn')['mouseenter'](function() {
            $('#dropDown3')['hide']();
            $('#copySIPBtn')['text']('Token');
            $('#dropDown')['show'](100)
        });
        $('#leaderboard-menu')['mouseleave'](function() {
            $('#dropDown')['hide']();
            $('#dropDown3')['hide']();
            $('#copySIPBtn')['text']('Copy')
        });
        $('#logTitle')['after']('<a href="#" style="color: lightgrey;float: right;position: absolute;right: 12px;top: 9px;" class="main-color" onclick="$(\'#log\').html(\'\');" data-toggle="tooltip" data-placement="left" data-original-title="Clear list"><span class="glyphicon glyphicon-ban-circle"></span></a>');
        $('#searchBtn')['tooltip']('disable');
        $('#copyLBBtn')['click'](function() {
            copy(getLeaderboard())
        });
        $('#lastIPBtn')['click'](function() {
            lastIP = localStorage['getItem']('lastIP');
            dosearch();
            document['getElementById']('searchInput')['value'] = lastIP;
            $('#searchBtn')['click']()
        });
        $('#copyIPBtn')['click'](function() {
            if (searchSip != null) {
                copy('http://agar.io/?r=' + region + '&m=' + mode + '&search=ws://' + searchSip)
            } else {
                copy('http://agar.io/?r=' + MC['getRegion']() + '&m=' + realmode + '&search=ws://' + currentIP)
            }
        });
        $('#copySIPBtn')['click'](function() {
            if (searchSip != null) {
                if (mode == ':party') {
                    copy('http://agar.io/#' + MC['getPartyToken']())
                } else {
                    if (mode != ':party') {
                        copy('http://agar.io/?sip=' + searchSip + '#&?r=' + region + '&m=' + mode)
                    }
                }
            } else {
                if (realmode == ':party') {
                    copy('http://agar.io/#' + currentToken)
                } else {
                    if (realmode != ':party') {
                        copy('http://agar.io/?sip=' + currentIP + '#&?r=' + MC['getRegion']() + '&m=' + realmode)
                    }
                }
            }
        });
        $('#reconnectBtn')['click'](function() {
            ogario['gameMode'] = realmode;
            hideMenu();
            changeServer();
            if (!$('#searchHud')['is'](':visible')) {
                delay(200, spectate);
                setTimeout(function() {
                    MC['setQuality']($('#quality')['val']())
                }, 1000);
                setTimeout(function() {
                    MC['setQuality']($('#quality')['val']())
                }, 2000);
                setTimeout(function() {
                    MC['setQuality']($('#quality')['val']())
                }, 3000)
            }
        });
        $('#reconnectBtn')['mouseenter'](function() {
            $('#dropDown')['hide']();
            $('#copySIPBtn')['text']('Copy')
        });
        $('#searchBtn')['click'](function() {
            var _0x8ddex48 = $('#searchInput')['val']();
            searchHandler(_0x8ddex48)
        });
        $('#searchInput')['keyup'](function(_0x8ddex47) {
            if (_0x8ddex47['keyCode'] == 13) {
                $('#searchBtn')['click']()
            }
        });
        $('#closeBtn')['click'](function() {
            hideSearchHud()
        });
        $('#searchShortcut')['click'](function() {
            hideMenu();
            showSearchHud();
            $('#searchInput')['focus']()['select']()
        });
        $('#nick')['mouseenter'](function() {
            $('#nick')['css']('background-color', '#000066')
        })['mouseleave'](function() {
            $('#nick')['css']('background-color', '')
        });
        $('#clantag')['mouseenter'](function() {
            $('#clantag')['css']('background-color', '#000066')
        })['mouseleave'](function() {
            $('#clantag')['css']('background-color', '')
        });
        $('#region')['mouseenter'](function() {
            $('#region')['css']('background-color', '#003300');
            MC['setQuality']($('#quality')['val']())
        })['mouseleave'](function() {
            $('#region')['css']('background-color', '')
        });
        $('#gamemode')['mouseenter'](function() {
            $('#gamemode')['css']('background-color', '#003300');
            MC['setQuality']($('#quality')['val']())
        })['mouseleave'](function() {
            $('#gamemode')['css']('background-color', '')
        });
        $('#create-party-btn')['click'](function() {
            if (hiddenfromclan == 0) {
                $('#ChatBtn')['attr']('data-original-title', 'Chat is ON, hide/show up');
                $('#ChatBtn1')['attr']('class', 'fa fa-eye-slash')
            } else {
                if (hiddenfromclan == 1) {
                    $('#ChatBtn')['attr']('data-original-title', 'Chat is ON, hide/show up')
                }
            };
            return messageone = 1
        });
        var _0x8ddex49 = $('#menu-footer')['text']()['split']('| ')[1];
        $('#menu-footer')['text']('');
        $('.agario-panel.ogario-yt-panel')['html']('<div class="agario-panel ogario-yt-panel"><h5 class="menu-main-color">Legend Mod by jimboy3100</h5>' + 'Scripts used: ' + '<a href="http://ogario.ovh" target="_blank">ogario</a>' + ', ' + '<a href="https://kittymod.github.io/" target="_blank">kitty</a>' + ' & ' + '<a href="https://greasyfork.org/en/scripts/by-site/agar.io" target="_blank">others</a></div>');
        $('#menu-footer')['prepend']('<span style="float: left; font-size: 13px;"><a target="_blank" onclick="ga(\'send\', \'event\', \'Link\', \'click\', \'legendWebsite\');" href="http://www.legendmod.ml" style="color: #ffffff;" data-toggle="tooltip" data-title="Legend Mod Website" data-placement="left">Legend mod v' + _0x8ddex40 + semimodVersion + '</a></span>' + '<a href="http://www.miniclip.com/games/en/" target="_blank">Agario v.2.0.0, Module:3.9.3</a>');
        $(document)['keyup'](function(_0x8ddex47) {
            if (_0x8ddex47['which'] == 8) {
                if ($('input:focus')['length'] == 0) {
                    $('#searchShortcut')['click']()
                }
            } else {
                if (_0x8ddex47['which'] == 187 && !($('input')['is'](':focus')) && ogario['play'] == false) {
                    $('#reconnectBtn')['click']()
                } else {
                    if (_0x8ddex47['which'] == 27) {
                        if ($('#searchHud')['is'](':visible')) {
                            hideSearchHud()
                        } else {
                            showMenu()
                        }
                    }
                }
            }
        });
        $('.btn.btn-play-guest.btn-success.btn-needs-server')['attr']('onclick', 'newsubmit()');
        $('.btn.btn-play.btn-primary.btn-needs-server')['attr']('onclick', 'newsubmit()');
        $(document)['keydown'](function(_0x8ddex47) {
            if (_0x8ddex47['which'] == 81 && ogario['spectate'] && !($('input')['is'](':focus'))) {
                spectate()
            }
        });
        $('#time-hud')['attr']('style', 'top: 290px !important;');
        $('#leaderboard-menu')['css']('pointer-events', 'auto');
        $('#searchHud')['css']('pointer-events', 'auto');
        $('[id="statsText"]')['css']('font-size', 'medium');
        $(document)['bind']('paste', function(_0x8ddex44) {
            if (!searching && !($('input,textarea')['is'](':focus'))) {
                var _0x8ddex45 = _0x8ddex44['originalEvent']['clipboardData']['getData']('text');
                hideMenu();
                showSearchHud();
                $('#searchInput')['val'](_0x8ddex45);
                $('#searchInput')['select']();
                searchHandler(_0x8ddex45)
            }
        });
        $('#searchInput')['bind']('paste', function(_0x8ddex44) {
            if (!searching) {
                var _0x8ddex45 = _0x8ddex44['originalEvent']['clipboardData']['getData']('text');
                $('#searchInput')['val'](_0x8ddex45);
                $('#searchInput')['select']();
                searchHandler(_0x8ddex45)
            }
        });
        $('#note1')['val'](localStorage['getItem']('note1'));
        $('#note2')['val'](localStorage['getItem']('note2'));
        $('#note3')['val'](localStorage['getItem']('note3'));
        $('#note4')['val'](localStorage['getItem']('note4'));
        $('#note5')['val'](localStorage['getItem']('note5'));
        $('#note6')['val'](localStorage['getItem']('note6'));
        $('#note7')['val'](localStorage['getItem']('note7'));
        MC['onDisconnect'] = function() {
            toastr['error']('Disconnected from server :(')['css']('width', '210px');
            appendSysLog('DISCONNECTED :(')
        };
        MC['onPlayerBanned'] = function() {
            toastr['error']('You were banned, restart your rooter!')['css']('width', '210px');
            appendSysLog('BAN :(')
        };
        $('#region')['ready'](function() {
            delay(2000, getInfo)
        });
        $('body')['on']('click', '.logEntry', function() {
            document['getElementById']('searchInput')['value'] = 'http://agar.io/#' + $(this)['data']('token');
            bumpLog();
            getInfo();
            searchTKHandler($('#searchInput')['val']())
        });
        $('body')['on']('click', '.btn-play-shortcut', function() {
            MC['setQuality']($('#quality')['val']());
            hideSearchHud();
            toastr['clear']();
            play()
        });
        $('body')['on']('click', '.btn-spectate-shortcut', function() {
            MC['setQuality']($('#quality')['val']());
            hideSearchHud();
            toastr['clear']();
            spectate()
        });
        $('#region, #gamemode')['change'](function() {
            appendLog(getLeaderboard())
        });
        $('#ogario-party')['wrap']('<div style="display: none;" id="hidendivtoken"></div>');
        $('#gamemode')['change'](function() {
            if ($('#gamemode')['val']() == ':party') {
                $('#hidendivtoken')['css']('display', 'block');
                $('#joinPartyToken')['val']('')
            } else {
                $('#hidendivtoken')['css']('display', 'none')
            };
            localStorage['setItem']('gamemode', ogario['gameMode'])
        });
        $('.btn-spectate, .btn-logout')['attr']('style', 'border-top: none; border-left: none; border-right: none;');
        $('#region')['change'](function() {
            localStorage['setItem']('location2', MC['getRegion']())
        });
        if (searchSip == null) {
            $(document)['ajaxComplete'](function(_0x8ddex47, _0x8ddex4a, _0x8ddex4b) {
                if (getGameMode() == '') {
                    modebetter = ':ffa'
                } else {
                    modebetter = getGameMode()
                };
                if (_0x8ddex4a['responseJSON'] != null) {
                    if (_0x8ddex4a['responseJSON']['ip'] != null && _0x8ddex4a['responseJSON']['hasOwnProperty']('ip')) {
                        currentIP = _0x8ddex4a['responseJSON']['ip'];
                        if (localStorage['getItem']('IPBtn') == 'true' || localStorage['getItem']('IPBtn') == null) {
                            $('#cur-tk-hud')['fadeTo']('fast', 0.2)['fadeTo']('fast', 1.0);
                            $('#cur-tk-hud')['text']('Region:' + MC['getRegion']() + ' Mode' + modebetter + ' IP:' + currentIP)
                        }
                    }
                };
                if (_0x8ddex4a['responseJSON']['token'] != null && _0x8ddex4a['responseJSON']['hasOwnProperty']('token')) {
                    currentToken = _0x8ddex4a['responseJSON']['token']
                };
                if (_0x8ddex4a['status'] == 200 && _0x8ddex4b['url'] == 'http://m.agar.io/getToken') {
                    delay(200, spectate);
                    _0x8ddex41++;
                    if (_0x8ddex41 == 2) {
                        toastr['info']('Connected!</br> <button class="btn btn-sm btn-primary btn-play btn-play-shortcut" style="margin-top: 10px;border-color: darkblue;">PLAY</button><br><button class="btn btn-sm btn-warning btn-spectate btn-spectate-shortcut" style="width: 100%;margin-top: 10px;">SPECTATE</button>', '', {
                            timeOut: 20000,
                            extendedTimeOut: 20000
                        })['css']('width', '210px');
                        $('#hidendivtoken')['css']('display', 'block')
                    };
                    return _0x8ddex41, modebetter
                }
            });
            $(document)['ajaxError'](function(_0x8ddex47, _0x8ddex4a, _0x8ddex4b) {
                if (_0x8ddex4a['status'] == 404 && _0x8ddex4b['url'] == 'http://m.agar.io/getToken') {
                    toastr['error']('Invalid token or server has closed :(')['css']('width', '210px');
                    $('#helloContainer')['attr']('data-party-state', '0')
                }
            });
            setTimeout(function() {
                if (url['length'] == 21) {
                    joinToken(url['replace']('http://agar.io/#', ''))
                } else {
                    if (region != null) {
                        MC['setRegion'](region);
                        MC['setGameMode'](mode)
                    } else {
                        MC['setRegion'](localStorage['getItem']('location2'));
                        MC['setGameMode'](previousMode)
                    }
                };
                if (searchStr != null && searchStr) {
                    if (searchIPHandler(searchStr)) {
                        hideMenu();
                        showSearchHud();
                        showCancelSearch();
                        $('#searchInput')['val'](searchStr)
                    }
                }
            }, 10000)
        };
        $('#autoCoinBtn')['click'](function() {
            var _0x8ddex4c = !($(this)['attr']('aria-pressed') == 'true');
            if (_0x8ddex4c) {
                localStorage['setItem']('autoCoinBtn', true);
                startCoinMining();
                $(this)['html']('<i class="fa fa-clock-o"></i> Stop free coins')
            } else {
                localStorage['setItem']('autoCoinBtn', false);
                stopCoinMining();
                $(this)['html']('<i class="fa fa-clock-o"></i> Auto free coins')
            }
        });
        var _0x8ddex4d = 0;
        $('#copyGameNames')['click'](function() {
            var _0x8ddex4c = !($(this)['attr']('aria-pressed') == 'true');
            if (_0x8ddex4c) {
                localStorage['setItem']('copyGameNames', true);
                if (_0x8ddex4d == 0) {
                    $(this)['html']('<i class="fa fa-user-o"></i>Close Names');
                    StartEditGameNames()
                } else {
                    localStorage['setItem']('copyGameNames', true);
                    $(this)['html']('<i class="fa fa-user-o"></i>Close Names');
                    ContinueEditGameNames()
                }
            } else {
                localStorage['setItem']('copyGameNames', false);
                StopEditGameNames();
                $(this)['html']('<i class="fa fa-user-o"></i>Edit Names');
                return _0x8ddex4d = 1
            }
        });
        $('#autoRespawnBtn')['click'](function() {
            var _0x8ddex4c = !($(this)['attr']('aria-pressed') == 'true');
            if (_0x8ddex4c) {
                localStorage['setItem']('autoRespawn', true);
                MC['onPlayerDeath'] = function() {
                    var _0x8ddex4e = $('#main-menu')['is'](':visible');
                    var _0x8ddex4f = $('#searchHud')['is'](':visible');
                    var autoRespawn = localStorage['getItem']('autoRespawn');
                    if (!$('#skipStats')['is'](':checked')) {
                        $('#skipStats')['click']()
                    };
                    if (autoRespawn != null && autoRespawn == 'true' && !_0x8ddex4e && !_0x8ddex4f && !($('input')['is'](':focus'))) {
                        setTimeout(function() {
                            play()
                        }, 1500)
                    }
                };
                $(this)['html']('<i class="fa fa-flash"></i> Stop respawn')
            } else {
                localStorage['setItem']('autoRespawn', false);
                MC['onPlayerDeath'] = originalDeath;
                $(this)['html']('<i class="fa fa-flash"></i> Auto respawn')
            }
        });
        localStorage['setItem']('showTK', false);
        $('#IPBtn')['click'](function() {
            var _0x8ddex4c = !($(this)['attr']('aria-pressed') == 'true');
            if (_0x8ddex4c) {
                localStorage['setItem']('IPBtn', true);
                $('#cur-tk-hud')['text']('Region:' + MC['getRegion']() + ' Mode' + modebetter + ' IP:' + currentIP)['show']();
                $(this)['html']('<i class="fa fa-trademark"></i>Hide IP')
            } else {
                localStorage['setItem']('IPBtn', false);
                $('#cur-tk-hud')['hide']();
                $(this)['html']('<i class="fa fa-trademark"></i>Show IP')
            }
        });
        $('#SHOSHOBtn')['click'](function() {
            var _0x8ddex4c = !($(this)['attr']('aria-pressed') == 'true');
            if (_0x8ddex4c) {
                localStorage['setItem']('SHOSHOBtn', true);
                $('#shortcuts-hud')['show']();
                $(this)['html']('<i class="fa fa-puzzle-piece"></i>Hide Shortcuts')
            } else {
                localStorage['setItem']('SHOSHOBtn', false);
                $('#shortcuts-hud')['hide']();
                $('#images-hud')['hide']();
                $(this)['html']('<i class="fa fa-puzzle-piece"></i>Show Shortcuts');
                return seticon = 'YES'
            }
        });
        $('#XPBtn')['click'](function() {
            var _0x8ddex4c = !($(this)['attr']('aria-pressed') == 'true');
            if (_0x8ddex4c) {
                localStorage['setItem']('XPBtn', true);
                $('#exp-bar')['show']();
                $(this)['html']('<i class="fa fa-gamepad"></i>Hide XP BAR')
            } else {
                localStorage['setItem']('XPBtn', false);
                $('#exp-bar')['hide']();
                $(this)['html']('<i class="fa fa-gamepad"></i>Show XP BAR')
            }
        });
        $('#TIMEBtn')['click'](function() {
            var _0x8ddex4c = !($(this)['attr']('aria-pressed') == 'true');
            if (_0x8ddex4c) {
                localStorage['setItem']('TIMEBtn', true);
                $('#time-hud')['show']();
                $(this)['html']('<i class="fa fa-clock-o"></i>Hide TIME')
            } else {
                localStorage['setItem']('TIMEBtn', false);
                $('#time-hud')['hide']();
                $(this)['html']('<i class="fa fa-clock-o"></i>Show TIME')
            }
        });
        $('#MAINBBtn')['click'](function() {
            var _0x8ddex4c = !($(this)['attr']('aria-pressed') == 'true');
            if (_0x8ddex4c) {
                localStorage['setItem']('MAINBBtn', true);
                $('#LEGENDAds')['show']();
                $(this)['html']('<i class="fa fa-bars"></i>Hide Main Banner')
            } else {
                localStorage['setItem']('MAINBBtn', false);
                $('#LEGENDAds')['hide']();
                $(this)['html']('<i class="fa fa-bars"></i>Show Main Banner')
            }
        });
        $('#MAINBTBtn')['click'](function() {
            var _0x8ddex4c = !($(this)['attr']('aria-pressed') == 'true');
            if (_0x8ddex4c) {
                localStorage['setItem']('MAINBTBtn', true);
                $('#legendbanners')['show']();
                $(this)['html']('<i class="fa fa-minus"></i>Hide Main Tools')
            } else {
                localStorage['setItem']('MAINBTBtn', false);
                $('#legendbanners')['hide']();
                $(this)['html']('<i class="fa fa-minus"></i>Show Main Tools')
            }
        });
        $('#MANUIBtn')['click'](function() {
            var _0x8ddex4c = !($(this)['attr']('aria-pressed') == 'true');
            if (_0x8ddex4c) {
                localStorage['setItem']('MANUIBtn', true);
                $('.input-group.skin.colorpicker-element')['show']();
                $(this)['html']('<i class="fa fa-minus"></i>Hide Manual Skins')
            } else {
                localStorage['setItem']('MANUIBtn', false);
                $('.input-group.skin.colorpicker-element')['hide']();
                $(this)['html']('<i class="fa fa-minus"></i>Show Manual Skins')
            }
        });
        $('#YoutubeAutoBtn')['click'](function() {
            var _0x8ddex4c = !($(this)['attr']('aria-pressed') == 'true');
            if (_0x8ddex4c) {
                localStorage['setItem']('YoutubeAutoBtn', true);
                setTimeout(function() {
                    $('#playerBtn')['click']()
                }, 3000);
                setTimeout(function() {
                    $('#playerBtn')['focusout']()
                }, 3500);
                $(this)['html']('<i class="fa fa-youtube-play"></i>Auto Youtube Off')
            } else {
                localStorage['setItem']('YoutubeAutoBtn', false);
                $(this)['html']('<i class="fa fa-youtube-play"></i>Auto Youtube On')
            }
        });
        $('#TIMEcalBtn')['click'](function() {
            var _0x8ddex4c = !($(this)['attr']('aria-pressed') == 'true');
            if (_0x8ddex4c) {
                localStorage['setItem']('TIMEcalBtn', true);
                $('#timertools-hud')['show']();
                $(this)['html']('<i class="fa fa-calculator"></i>Hide Timer Calc.');
                T['timerDiv'] = document['getElementById']('timer');
                return T['timerDiv']
            } else {
                localStorage['setItem']('TIMEcalBtn', false);
                $('#timertools-hud')['hide']();
                $(this)['html']('<i class="fa fa-calculator"></i>Show Timer Calc.')
            }
        });
        $('#HideAllBthn')['click'](function() {
            var _0x8ddex4c = !($(this)['attr']('aria-pressed') == 'true');
            if (_0x8ddex4c) {
                $('#cur-tk-hud')['hide']();
                $('#shortcuts-hud')['hide']();
                $('#exp-bar')['hide']();
                $('#time-hud')['hide']();
                $('.input-group.skin.colorpicker-element')['hide']();
                $('#legendbanners')['hide']();
                $('#leaderboard-hud')['hide']();
                $('#minimap-hud')['hide']();
                $('#stats-hud')['hide']();
                $('#top5-hud')['hide']();
                $('#target-hud')['hide']();
                $('#target-panel-hud')['hide']();
                $(this)['html']('<i class="fa fa-exclamation-triangle"></i>Show Everything')
            } else {
                $('#cur-tk-hud')['show']();
                $('#shortcuts-hud')['show']();
                $('#exp-bar')['show']();
                $('#time-hud')['show']();
                $('.input-group.skin.colorpicker-element')['show']();
                $('#legendbanners')['show']();
                $('#leaderboard-hud')['show']();
                $('#minimap-hud')['show']();
                $('#stats-hud')['show']();
                $('#top5-hud')['show']();
                $('#target-panel-hud')['show']();
                $('#target-hud')['show']();
                $(this)['html']('<i class="fa fa-exclamation-triangle"></i>Hide Everything')
            }
        });
        $('#troll1Btn')['click'](function() {
            var _0x8ddex4c = !($(this)['attr']('aria-pressed') == 'true');
            if (_0x8ddex4c) {
                localStorage['setItem']('troll1Btn', true);
                settroll1true();
                whenplayerdies();
                $(this)['html']('<i class="fa fa-bath"></i> No troll on Death ')
            } else {
                localStorage['setItem']('troll1Btn', false);
                settroll1false();
                whenplayerdies();
                $(this)['html']('<i class="fa fa-bath"></i> Troll on Death ')
            }
        });
        $('#stats-hud')['after']('<div id="cur-tk-hud" class="hud main-color hud-top" style=" right: 220px; font-size: 15px; padding: 6px;"></div>');
        $('#minimap-hud')['prepend']('<div id="shortcuts-hud" class="hud" style="width: 70%; height: 30px; padding: 0px; pointer-events: auto; position: absolute; right: 0px; top: -30px; display: block;">' + '<button id="ChatBtn" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 24%; height: 100%;" data-toggle="tooltip" data-original-title="Chat"><i id="ChatBtn1" class="icon-bubbles" style="padding-left: 0px;"></i></button>' + '<button id="Images" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 15%; height: 100%;" onclick="seticonfunction();" data-toggle="tooltip" data-original-title="Message Icons"><i id="Images1" class="fa fa-picture-o" style="padding-left: 0px;"></i></button>' + '<button id="Cutnames" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 15%; height: 100%;" data-toggle="tooltip" data-original-title="Edit names"><i id="Cutnames1" class="fa fa-scissors" style="padding-left: 0px;"></i></button>' + '<button id="Bino" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 15%; height: 100%;" onclick="Bino();" data-toggle="tooltip" data-original-title="[Spectate Mode Only] Binoculars"><i id="BinoBtnI" class="fa fa-binoculars" style="padding-center: 0px;"></i></button>' + '<button id="playerBtn" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 15%; height: 100%;" data-toggle="tooltip" data-original-title="Play"><i id="playerI" class="fa fa-play-circle" style="padding-center: 0px;"></i></button>' + '<button id="fullscreenBtn" class="btn-link" style="padding: 0px;color: #d6d3d3;width: 15%;height: 100%;" onclick="toggleFullScreen(fullornot);" data-toggle="tooltip" data-original-title="Fullscreen"><i class="fa fa-tv" style="padding-left: 0px;"></i></button></div>');
        $('#minimap-hud')['prepend']('<div id="images-hud" class="hud" style="width: 70%; height: 30px; padding: 0px; pointer-events: auto; position: absolute; right: 0px; top: -60px; display: none;">' + '<button id="sendicon1" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendicon1();" data-toggle="tooltip" data-original-title="Bad Choice!"><i id="sendicon11" class="fa fa-exclamation-triangle" style="padding-left: 0px;"></i></button>' + '<button id="sendicon2" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendicon2();" data-toggle="tooltip" data-original-title="Why?"><i id="sendicon21" class="fa fa-question-circle" style="padding-left: 0px;"></i></button>' + '<button id="sendicon3" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendicon3();" data-toggle="tooltip" data-original-title="Yow!!"><i id="sendicon31" class="fa fa-wheelchair" style="padding-center: 0px;"></i></button>' + '<button id="sendicon4" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendicon4();" data-toggle="tooltip" data-original-title="Death!"><i id="sendicon41" class="fa fa-cutlery" style="padding-center: 0px;"></i></button>' + '<button id="sendicon5" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendicon5();" data-toggle="tooltip" data-original-title="Relax!"><i id="sendicon51" class="fa fa-bed" style="padding-left: 0px;"></i></button>' + '<button id="sendicon6" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendicon6();" data-toggle="tooltip" data-original-title="Legend Mod!"><i id="sendicon61" class="fa fa-telegram" style="padding-left: 0px;"></i></button></div>');
        $('[data-toggle="tooltip"]')['tooltip']();
        $('#playerBtn')['tooltip']();
        $('#minimap-hud')['prepend']('<div id="timertools-hud" class="hud" style="width: 50%; height: 30px; padding: 0px; pointer-events: auto; position: absolute; right: 0px; top: -90px; display: block;">' + '<button id="playtimer" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100% display: block;" onclick="startTimer();" data-toggle="tooltip" data-original-title="Start Timer"" ><i id="playtime" class="fa fa-play-circle" style="padding-left: 0px;"></i></button>' + '<button id="stoptimer" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100% display: none;" onclick="stopTimer();" data-toggle="tooltip" data-original-title="Pause Timer""><i id="pausetime" class="fa fa-pause-circle" style="padding-left: 0px;"></i></button>' + '<button id="cleartimer" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100% display: none;" onclick="clearTimer();" data-toggle="tooltip" data-original-title="Stop Timer"><i id="cleartime" class="fa fa-stop-circle" style="padding-left: 0px;"></i></button>' + '<a id="timer" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100% position: absolute; right: 0px;">00:00</a>');
        $('#stoptimer')['hide']();
        $('#cleartimer')['hide']();
        $('#playerBtn')['click'](function() {
            if (musicPlayer != undefined) {
                var _0x8ddex50 = musicPlayer['getPlayerState']();
                if (_0x8ddex50 != 1) {
                    musicPlayer['playVideo']();
                    $('#playerI')['removeClass']('fa-play-circle')['addClass']('fa-pause-circle');
                    $(this)['attr']('data-original-title', 'Pause')['tooltip']('fixTitle')['tooltip']('show')
                } else {
                    musicPlayer['pauseVideo']();
                    $('#playerI')['removeClass']('fa-pause-circle')['addClass']('fa-play-circle');
                    $(this)['attr']('data-original-title', 'Play')['tooltip']('fixTitle')['tooltip']('show')
                }
            }
        });
        $('#topright')['click'](function() {
            localStorage['setItem']('ComPosition', 0);
            toastr['remove']();
            toastr['options'] = {
                "\x70\x6F\x73\x69\x74\x69\x6F\x6E\x43\x6C\x61\x73\x73": 'toast-top-right'
            }
        });
        $('#topleft')['click'](function() {
            localStorage['setItem']('ComPosition', 1);
            toastr['remove']();
            toastr['options'] = {
                "\x70\x6F\x73\x69\x74\x69\x6F\x6E\x43\x6C\x61\x73\x73": 'toast-top-left'
            }
        });
        $('#bottomright')['click'](function() {
            localStorage['setItem']('ComPosition', 2);
            toastr['remove']();
            toastr['options'] = {
                "\x70\x6F\x73\x69\x74\x69\x6F\x6E\x43\x6C\x61\x73\x73": 'toast-bottom-right'
            }
        });
        $('#bottomleft')['click'](function() {
            localStorage['setItem']('ComPosition', 3);
            toastr['remove']();
            toastr['options'] = {
                "\x70\x6F\x73\x69\x74\x69\x6F\x6E\x43\x6C\x61\x73\x73": 'toast-bottom-left'
            }
        });
        $('#ChatBtn')['click'](function() {
            chatfunction()
        });
        $('#Cutnames')['click'](function() {
            $('#copyGameNames')['click']()
        });
        $('#statsContinue2')['click'](function() {
            $('#main-menu > ul > li.start-tab > a')['click']()
        });
        originalDeath = MC['onPlayerDeath'];
        $('#leaderboard-hud > h4')['text']('LEADERBOARD');
        $('#nick')['attr']('maxlength', 50)['attr']('placeholder', 'Name')['tooltip']({
            title: 'Insert your in-game name, 50 chars are visible on Mod users, 15 to other users',
            placement: 'bottom'
        });
        $('#clantag')['attr']('placeholder', 'Password')['tooltip']({
            title: 'Insert the password of the Team / Clan, for ingame communication',
            placement: 'left'
        });
        $('#skin')['attr']('placeholder', 'Manual direct skin URL')['tooltip']({
            title: 'Insert your manual skin weblink',
            placement: 'left'
        });
        $('#region')['tooltip']({
            title: 'The region to play',
            placement: 'left'
        });
        $('#gamemode')['tooltip']({
            title: 'Gameplay, for party change region first',
            placement: 'top'
        });
        $('#log')['after']('<button id="Backtomenu" onclick="doback(); return false" class="btn btn-danger" data-itr="page_login_and_play" data-original-title="" title="">CLOSE</button>');
        $('#hidendivtoken')['after']('<div id="legendbanners"><img src="https://jimboy3100.github.io/legend.github.io/banners/1481753383_search_magnifying_glass_find.png" alt="Search Servers" id= "searchicon" onclick="dosearch(); return false" class="img-rounded" alt="Cinque Terre" width="87" height="40">' + '<img src="https://jimboy3100.github.io/legend.github.io/banners/vanillapic.jpg" alt="Vanilla Like Settings" id = "vanillaset" onclick="vanillasettings(); return false" class="img-rounded"  return false" width="87" height="40" >' + '<img src="https://jimboy3100.github.io/legend.github.io/banners/galaxybanner.jpg" alt="Vanilla Like Settings" id = "galaxyset" onclick="galaxysettings(); return false" class="img-rounded"  return false" width="87" height="40"  >' + '<img src="https://jimboy3100.github.io/legend.github.io/banners/smallbannerlegendclan.png" alt="Vanilla Like Settings" id = "legendclanbanner" class="img-rounded" return false" width="87" height="40" onclick="gotolegendml(); return false" > ' + '</div><div id="LEGENDAds"></div>');
        var _0x8ddex51 = document['getElementById']('nick')['value'];
        if (_0x8ddex40 != '1.9') {
            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerupdate')
        } else {
            if (_0x8ddex51['includes']('\u2654Jimboy3100') == true) {
                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/playeriamlegend')
            } else {
                if (_0x8ddex51['includes']('GUARD') == true) {
                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/playerguard')
                } else {
                    if (_0x8ddex51['includes']('\u2776') == true) {
                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                    } else {
                        if (_0x8ddex51['includes']('\u20A3') == true) {
                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                        } else {
                            if (_0x8ddex51['includes']('\u2104') == true) {
                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                            } else {
                                if (_0x8ddex51['includes']('\u264B') == true) {
                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                                } else {
                                    if (_0x8ddex51['includes']('\u06DE\u1E92\u1E68\u06DE') == true) {
                                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerzs')
                                    } else {
                                        if (_0x8ddex51['includes']('\u1D3A\u0AEF\u1D42\u06DE') == true) {
                                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerzs')
                                        } else {
                                            if (_0x8ddex51['includes']('\u06DE\u1D76\u1D74\u2122') == true) {
                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerzs')
                                            } else {
                                                if (_0x8ddex51['includes']('\u0E54\u0240') == true) {
                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerdz')
                                                } else {
                                                    if (_0x8ddex51['includes']('\uFF8F\uFF6E\u029E\u0287') == true) {
                                                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerrect')
                                                    } else {
                                                        if (_0x8ddex51['includes']('\u20B4\u20B5\u20B3\u2C64') == true) {
                                                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerscar')
                                                        } else {
                                                            if (_0x8ddex51['includes']('\u03B2\u03B2\u0141\u03A3\xDF\u039B\u013B\u017D') == true) {
                                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/playerbubbleBALZ')
                                                            } else {
                                                                if (_0x8ddex51['includes']('\u22E9\u156E\u03C7\u22E8') == true) {
                                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerex')
                                                                } else {
                                                                    if (_0x8ddex51['includes']('\u0196\u01A6') == true) {
                                                                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerir')
                                                                    } else {
                                                                        if (_0x8ddex51['includes']('\u0234\xF8ng') == true) {
                                                                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerlong')
                                                                        } else {
                                                                            if (_0x8ddex51['includes']('\u01B8U') == true) {
                                                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannereu')
                                                                            } else {
                                                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerAll')
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        if (_0x8ddex40 != '1.9') {
            toastr['error']('Mod v' + _0x8ddex40 + ' can be Updated to v1.9, visit <a target="_blank" href="https://github.com/jimboy3100/legend.github.io/raw/master/legendmod.user.js">www.legendmod.ml</a>')
        } else {
            toastr['info']('Hello ' + _0x8ddex51 + '! </br>Legend Mod v' + _0x8ddex40 + ' website: <a target="_blank" href="http://www.legendmod.ml/">LINK</a>');
            toastr['info']('1. Prefer TOKENS than IP, 2. Enable Options on last Tab 3. For IP communication use chat button (shortcut area)')
        };
        $('#searchicon')['mouseover'](function() {
            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersearchliking')
        });
        $('#vanillaset')['mouseover'](function() {
            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannervanillaliking')
        });
        $('#galaxyset')['mouseover'](function() {
            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannergalaxyliking')
        });
        $('#legendclanbanner')['mouseover'](function() {
            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
        });
        $('#searchicon')['mouseout'](function() {
            if (_0x8ddex40 != '1.9') {
                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerupdate')
            } else {
                if (_0x8ddex51['includes']('\u2654Jimboy3100') == true) {
                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/playeriamlegend')
                } else {
                    if (_0x8ddex51['includes']('GUARD') == true) {
                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/playerguard')
                    } else {
                        if (_0x8ddex51['includes']('\u2776') == true) {
                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                        } else {
                            if (_0x8ddex51['includes']('\u20A3') == true) {
                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                            } else {
                                if (_0x8ddex51['includes']('\u2104') == true) {
                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                                } else {
                                    if (_0x8ddex51['includes']('\u264B') == true) {
                                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                                    } else {
                                        if (_0x8ddex51['includes']('\u06DE\u1E92\u1E68\u06DE') == true) {
                                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerzs')
                                        } else {
                                            if (_0x8ddex51['includes']('\u1D3A\u0AEF\u1D42\u06DE') == true) {
                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerzs')
                                            } else {
                                                if (_0x8ddex51['includes']('\u06DE\u1D76\u1D74\u2122') == true) {
                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerzs')
                                                } else {
                                                    if (_0x8ddex51['includes']('\u0E54\u0240') == true) {
                                                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerdz')
                                                    } else {
                                                        if (_0x8ddex51['includes']('\uFF8F\uFF6E\u029E\u0287') == true) {
                                                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerrect')
                                                        } else {
                                                            if (_0x8ddex51['includes']('\u20B4\u20B5\u20B3\u2C64') == true) {
                                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerscar')
                                                            } else {
                                                                if (_0x8ddex51['includes']('\u03B2\u03B2\u0141\u03A3\xDF\u039B\u013B\u017D') == true) {
                                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/playerbubbleBALZ')
                                                                } else {
                                                                    if (_0x8ddex51['includes']('\u22E9\u156E\u03C7\u22E8') == true) {
                                                                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerex')
                                                                    } else {
                                                                        if (_0x8ddex51['includes']('\u0196\u01A6') == true) {
                                                                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerir')
                                                                        } else {
                                                                            if (_0x8ddex51['includes']('\u0234\xF8ng') == true) {
                                                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerlong')
                                                                            } else {
                                                                                if (_0x8ddex51['includes']('\u01B8U') == true) {
                                                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannereu')
                                                                                } else {
                                                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerAll')
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        $('#vanillaset')['mouseout'](function() {
            if (_0x8ddex40 != '1.9') {
                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerupdate')
            } else {
                if (_0x8ddex51['includes']('\u2654Jimboy3100') == true) {
                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/playeriamlegend')
                } else {
                    if (_0x8ddex51['includes']('GUARD') == true) {
                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/playerguard')
                    } else {
                        if (_0x8ddex51['includes']('\u2776') == true) {
                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                        } else {
                            if (_0x8ddex51['includes']('\u20A3') == true) {
                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                            } else {
                                if (_0x8ddex51['includes']('\u2104') == true) {
                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                                } else {
                                    if (_0x8ddex51['includes']('\u264B') == true) {
                                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                                    } else {
                                        if (_0x8ddex51['includes']('\u06DE\u1E92\u1E68\u06DE') == true) {
                                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerzs')
                                        } else {
                                            if (_0x8ddex51['includes']('\u1D3A\u0AEF\u1D42\u06DE') == true) {
                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerzs')
                                            } else {
                                                if (_0x8ddex51['includes']('\u06DE\u1D76\u1D74\u2122') == true) {
                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerzs')
                                                } else {
                                                    if (_0x8ddex51['includes']('\u0E54\u0240') == true) {
                                                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerdz')
                                                    } else {
                                                        if (_0x8ddex51['includes']('\uFF8F\uFF6E\u029E\u0287') == true) {
                                                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerrect')
                                                        } else {
                                                            if (_0x8ddex51['includes']('\u20B4\u20B5\u20B3\u2C64') == true) {
                                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerscar')
                                                            } else {
                                                                if (_0x8ddex51['includes']('\u03B2\u03B2\u0141\u03A3\xDF\u039B\u013B\u017D') == true) {
                                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/playerbubbleBALZ')
                                                                } else {
                                                                    if (_0x8ddex51['includes']('\u22E9\u156E\u03C7\u22E8') == true) {
                                                                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerex')
                                                                    } else {
                                                                        if (_0x8ddex51['includes']('\u0196\u01A6') == true) {
                                                                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerir')
                                                                        } else {
                                                                            if (_0x8ddex51['includes']('\u0234\xF8ng') == true) {
                                                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerlong')
                                                                            } else {
                                                                                if (_0x8ddex51['includes']('\u01B8U') == true) {
                                                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannereu')
                                                                                } else {
                                                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerAll')
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        $('#galaxyset')['mouseout'](function() {
            if (_0x8ddex40 != '1.9') {
                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerupdate')
            } else {
                if (_0x8ddex51['includes']('\u2654Jimboy3100') == true) {
                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/playeriamlegend')
                } else {
                    if (_0x8ddex51['includes']('GUARD') == true) {
                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/playerguard')
                    } else {
                        if (_0x8ddex51['includes']('\u2776') == true) {
                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                        } else {
                            if (_0x8ddex51['includes']('\u20A3') == true) {
                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                            } else {
                                if (_0x8ddex51['includes']('\u2104') == true) {
                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                                } else {
                                    if (_0x8ddex51['includes']('\u264B') == true) {
                                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                                    } else {
                                        if (_0x8ddex51['includes']('\u06DE\u1E92\u1E68\u06DE') == true) {
                                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerzs')
                                        } else {
                                            if (_0x8ddex51['includes']('\u1D3A\u0AEF\u1D42\u06DE') == true) {
                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerzs')
                                            } else {
                                                if (_0x8ddex51['includes']('\u06DE\u1D76\u1D74\u2122') == true) {
                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerzs')
                                                } else {
                                                    if (_0x8ddex51['includes']('\u0E54\u0240') == true) {
                                                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerdz')
                                                    } else {
                                                        if (_0x8ddex51['includes']('\uFF8F\uFF6E\u029E\u0287') == true) {
                                                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerrect')
                                                        } else {
                                                            if (_0x8ddex51['includes']('\u20B4\u20B5\u20B3\u2C64') == true) {
                                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerscar')
                                                            } else {
                                                                if (_0x8ddex51['includes']('\u03B2\u03B2\u0141\u03A3\xDF\u039B\u013B\u017D') == true) {
                                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/playerbubbleBALZ')
                                                                } else {
                                                                    if (_0x8ddex51['includes']('\u22E9\u156E\u03C7\u22E8') == true) {
                                                                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerex')
                                                                    } else {
                                                                        if (_0x8ddex51['includes']('\u0196\u01A6') == true) {
                                                                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerir')
                                                                        } else {
                                                                            if (_0x8ddex51['includes']('\u0234\xF8ng') == true) {
                                                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerlong')
                                                                            } else {
                                                                                if (_0x8ddex51['includes']('\u01B8U') == true) {
                                                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannereu')
                                                                                } else {
                                                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerAll')
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        $('#legendclanbanner')['mouseout'](function() {
            if (_0x8ddex40 != '1.9') {
                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerupdate')
            } else {
                if (_0x8ddex51['includes']('\u2654Jimboy3100') == true) {
                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/playeriamlegend')
                } else {
                    if (_0x8ddex51['includes']('GUARD') == true) {
                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/playerguard')
                    } else {
                        if (_0x8ddex51['includes']('\u2776') == true) {
                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                        } else {
                            if (_0x8ddex51['includes']('\u20A3') == true) {
                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                            } else {
                                if (_0x8ddex51['includes']('\u2104') == true) {
                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                                } else {
                                    if (_0x8ddex51['includes']('\u264B') == true) {
                                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannersflc')
                                    } else {
                                        if (_0x8ddex51['includes']('\u06DE\u1E92\u1E68\u06DE') == true) {
                                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerzs')
                                        } else {
                                            if (_0x8ddex51['includes']('\u1D3A\u0AEF\u1D42\u06DE') == true) {
                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerzs')
                                            } else {
                                                if (_0x8ddex51['includes']('\u06DE\u1D76\u1D74\u2122') == true) {
                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerzs')
                                                } else {
                                                    if (_0x8ddex51['includes']('\u0E54\u0240') == true) {
                                                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerdz')
                                                    } else {
                                                        if (_0x8ddex51['includes']('\uFF8F\uFF6E\u029E\u0287') == true) {
                                                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerrect')
                                                        } else {
                                                            if (_0x8ddex51['includes']('\u20B4\u20B5\u20B3\u2C64') == true) {
                                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerscar')
                                                            } else {
                                                                if (_0x8ddex51['includes']('\u03B2\u03B2\u0141\u03A3\xDF\u039B\u013B\u017D') == true) {
                                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/playerbubbleBALZ')
                                                                } else {
                                                                    if (_0x8ddex51['includes']('\u22E9\u156E\u03C7\u22E8') == true) {
                                                                        $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerex')
                                                                    } else {
                                                                        if (_0x8ddex51['includes']('\u0196\u01A6') == true) {
                                                                            $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerir')
                                                                        } else {
                                                                            if (_0x8ddex51['includes']('\u0234\xF8ng') == true) {
                                                                                $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerlong')
                                                                            } else {
                                                                                if (_0x8ddex51['includes']('\u01B8U') == true) {
                                                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannereu')
                                                                                } else {
                                                                                    $('#LEGENDAds')['load']('https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/bannerAll')
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        $('#cur-tk-hud')['hide']();
        $('#shortcuts-hud')['hide']();
        $('#exp-bar')['hide']();
        $('#time-hud')['hide']();
        $('#LEGENDAds')['hide']();
        $('#legendbanners')['hide']();
        $('.input-group.skin.colorpicker-element')['hide']();
        $('#timertools-hud')['hide']();
        setTimeout(function() {
            if (autoRespawn == 'true') {
                $('#autoRespawnBtn')['click']()
            };
            if (IPBtn == 'true') {
                $('#IPBtn')['click']()
            };
            if (SHOSHOBtn == 'true') {
                $('#SHOSHOBtn')['click']()
            };
            if (TIMEBtn == 'true') {
                $('#TIMEBtn')['click']()
            };
            if (MAINBBtn == 'true') {
                $('#MAINBBtn')['click']()
            };
            if (MAINBTBtn == 'true') {
                $('#MAINBTBtn')['click']()
            };
            if (MANUIBtn == 'true') {
                $('#MANUIBtn')['click']()
            };
            if (YoutubeAutoBtn == 'true') {
                $('#YoutubeAutoBtn')['click']()
            };
            if (XPBtn == 'true') {
                $('#XPBtn')['click']()
            };
            if (TIMEcalBtn == 'true') {
                $('#TIMEcalBtn')['click']()
            };
            if (troll1Btn == 'true') {
                $('#troll1Btn')['click']()
            };
            if (ComPosition == 0) {
                $('#topright')['click']()
            };
            if (ComPosition == 1) {
                $('#topleft')['click']()
            };
            if (ComPosition == 2) {
                $('#bottomright')['click']()
            };
            if (ComPosition == 3) {
                $('#bottomleft')['click']()
            };
            if (autoCoinBtn == 'true') {
                setTimeout(function() {
                    $('#autoCoinBtn')['click']()
                }, 5000)
            };
            if (copyGameNames == 'true') {
                setTimeout(function() {
                    $('#copyGameNames')['click']()
                }, 1000)
            };
            document['getElementById']('minimapPicture')['value'] = localStorage['getItem']('minimapbckimg');
            if ($('#minimapPicture')['val']() != '') {
                setminbgname()
            };
            document['getElementById']('leadbPicture')['value'] = localStorage['getItem']('leadbimg');
            if ($('#leadbPicture')['val']() != '') {
                setleadbgname()
            };
            document['getElementById']('teambPicture')['value'] = localStorage['getItem']('teambimg');
            if ($('#teambPicture')['val']() != '') {
                setteambgname()
            };
            document['getElementById']('canvasPicture')['value'] = localStorage['getItem']('canvasbimg');
            if ($('#canvasPicture')['val']() != '') {
                setcanvasbgname()
            };
            document['getElementById']('pic1url')['value'] = localStorage['getItem']('pic1urlimg');
            if ($('#pic1url')['val']() != '') {
                setpic1url()
            };
            document['getElementById']('pic2url')['value'] = localStorage['getItem']('pic2urlimg');
            if ($('#pic2url')['val']() != '') {
                setpic2url()
            };
            document['getElementById']('pic3url')['value'] = localStorage['getItem']('pic3urlimg');
            if ($('#pic3url')['val']() != '') {
                setpic3url()
            };
            document['getElementById']('pic4url')['value'] = localStorage['getItem']('pic4urlimg');
            if ($('#pic4url')['val']() != '') {
                setpic4url()
            };
            document['getElementById']('pic5url')['value'] = localStorage['getItem']('pic5urlimg');
            if ($('#pic5url')['val']() != '') {
                setpic5url()
            };
            document['getElementById']('pic6url')['value'] = localStorage['getItem']('pic6urlimg');
            if ($('#pic6url')['val']() != '') {
                setpic6url()
            };
            document['getElementById']('pic1data')['value'] = localStorage['getItem']('pic1dataimg');
            if ($('#pic1data')['val']() != '') {
                setpic1data()
            };
            document['getElementById']('pic2data')['value'] = localStorage['getItem']('pic2dataimg');
            if ($('#pic2data')['val']() != '') {
                setpic2data()
            };
            document['getElementById']('pic3data')['value'] = localStorage['getItem']('pic3dataimg');
            if ($('#pic3data')['val']() != '') {
                setpic3data()
            };
            document['getElementById']('pic4data')['value'] = localStorage['getItem']('pic4dataimg');
            if ($('#pic4data')['val']() != '') {
                setpic4data()
            };
            document['getElementById']('pic5data')['value'] = localStorage['getItem']('pic5dataimg');
            if ($('#pic5data')['val']() != '') {
                setpic5data()
            };
            document['getElementById']('pic6data')['value'] = localStorage['getItem']('pic6dataimg');
            if ($('#pic6data')['val']() != '') {
                setpic6data()
            }
        }, 1000);
        if (searchSip != null) {
            $('#region')['hide']();
            $('#gamemode')['hide']();
            $('#searchShortcut')['hide']();
            $('#reconnectBtn')['hide']()
        }
    }, 3500)
}

function loadericon() {
    containermain = $('#helloContainer')['html']();
    $('#helloContainer')['before']('<img id="imagebig" src="https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/loading7_gray.gif" />');
    $('#helloContainer')['hide']();
    setTimeout(function() {
        $('#helloContainer')['fadeIn'](2000);
        $('#imagebig')['fadeOut'](2000);
        MC['setQuality']($('#quality')['val']())
    }, 4500)
}

function delay(_0x8ddex54, _0x8ddex55) {
    setTimeout(function() {
        _0x8ddex55()
    }, _0x8ddex54)
}

function spectate() {
    hideMenu();
    $('.btn-spectate')['click']()
}

function changeServer() {
    MC['setGameMode'](ogario['gameMode']);
    MC['reconnect']();
    appendLog(getLeaderboard())
}

function isValidIpAndPort(_0x8ddex59) {
    var _0x8ddex5a = _0x8ddex59['split'](':');
    var _0x8ddex5b = _0x8ddex5a[0]['split']('.');
    var _0x8ddex5c = _0x8ddex5a[1];
    return validateNum(_0x8ddex5c, 1, 65535) && _0x8ddex5b['length'] == 4 && _0x8ddex5b['every'](function(_0x8ddex5d) {
        return validateNum(_0x8ddex5d, 0, 255)
    })
}

function validateNum(_0x8ddex59, _0x8ddex5f, _0x8ddex60) {
    var _0x8ddex61 = +_0x8ddex59;
    return _0x8ddex61 >= _0x8ddex5f && _0x8ddex61 <= _0x8ddex60 && _0x8ddex59 === _0x8ddex61.toString()
}

function joinToken(token) {
    appendLog(getLeaderboard());
    $('#joinPartyToken')['val'](token);
    $('#join-party-btn')['click']();
    $('#joinPartyToken')['val']('');
    $('#gamemode')['val']('');
    currentToken = token;
    if (localStorage['getItem']('showTK') == 'true') {
        $('#cur-tk-hud')['fadeTo']('fast', 0.2)['fadeTo']('fast', 1.0);
        $('#cur-tk-hud')['text']('TK: #' + currentToken)
    }
}

function searchHandler(searchStr) {
    searchStr = searchStr['trim']();
    if (searchIPHandler(searchStr)) {} else {
        if (searchTKHandler(searchStr)) {} else {
            searchPlayer(searchStr)
        }
    }
}

function searchTKHandler(searchStr) {
    searchStr = searchStr['trim']();
    if (searchStr['startsWith']('http://agar.io/#')) {
        joinToken(searchStr['replace']('http://agar.io/#', ''))
    } else {
        if (searchStr['startsWith']('agar.io/#')) {
            joinToken(searchStr['replace']('agar.io/#', ''))
        } else {
            return false
        }
    };
    return true
}

function searchIPHandler(searchStr) {
    if (messageone == 0) {
        toastr['info']('Initializing Communication, please wait...')['css']('width', '250px')
    };
    $('#Backtomenu')['hide']();
    hideMenu();
    showSearchHud();
    searchStr = searchStr['trim']();
    if (isValidIpAndPort(searchStr)) {
        findIP(searchStr)
    } else {
        if (isValidIpAndPort(searchStr['replace']('ws://', ''))) {
            findIP(searchStr['replace']('ws://', ''))
        } else {
            if (isValidIpAndPort(searchStr['replace']('agar.io/?search=ws://', ''))) {
                findIP(searchStr['replace']('agar.io/?search=ws://', ''))
            } else {
                if (isValidIpAndPort(searchStr['replace']('http://agar.io/?search=ws://', ''))) {
                    findIP(searchStr['replace']('http://agar.io/?search=ws://', ''))
                } else {
                    if (getParameterByName('search', searchStr)) {
                        if (region) {
                            MC['setRegion'](region);
                            getInfo()
                        };
                        findIP(ip['replace']('ws://', ''))
                    } else {
                        return false
                    }
                }
            }
        }
    };
    return true
}

function findIP(_0x8ddex67) {
    setTimeout(function() {
        if (mode == ':party') {
            $('#gamemode option[value=":party"]')['prop']('selected', 'selected')['change']()
        };
        if (mode == '') {
            $('#gamemode option[value=""]')['prop']('selected', 'selected')['change']()
        };
        if (mode == ':teams') {
            $('#gamemode option[value=":teams"]')['prop']('selected', 'selected')['change']()
        };
        if (mode == ':experimental') {
            $('#gamemode option[value=":experimental"]')['prop']('selected', 'selected')['change']()
        }
    }, 1500);
    if (!searching) {
        if ($['trim'](_0x8ddex67) == '') {} else {
            showCancelSearch();
            searching = true;
            var _0x8ddex68 = 1800;
            var _0x8ddex69 = 30;
            var _0x8ddex6a = 0;
            var _0x8ddex6b = 0;
            var _0x8ddex6c = 2;
            toastr['success']('Searching IP \'ws://' + _0x8ddex67 + '\'...')['css']('width', '210px');
            _0x8ddex6a++;
            if (currentIP == _0x8ddex67) {
                searching = false;
                hideCancelSearch();
                toastr['info']('Leaderboard found!</br> <button class="btn btn-sm btn-primary btn-play btn-play-shortcut" style="margin-top: 10px;border-color: darkblue;">PLAY</button><br><button class="btn btn-sm btn-warning btn-spectate btn-spectate-shortcut" style="width: 100%;margin-top: 10px;">SPECTATE</button>', '', {
                    timeOut: 20000,
                    extendedTimeOut: 20000
                })['css']('width', '210px');
                testmessage();
                MC['setQuality']($('#quality')['val']())
            } else {
                changeServer();
                timerId = setInterval(function() {
                    if (MC['isConnecting']() == false || _0x8ddex6b == _0x8ddex6c) {
                        _0x8ddex6b = 0;
                        _0x8ddex6a++;
                        toastr['success']('Search: ' + _0x8ddex6a + '/' + _0x8ddex69)['css']('width', '210px');
                        if (_0x8ddex6a >= _0x8ddex69) {
                            clearInterval(timerId);
                            searching = false;
                            hideCancelSearch();
                            toastr['error']('The leaderboard was not found. Keep trying...')['css']('width', '210px')
                        };
                        if (currentIP == _0x8ddex67) {
                            clearInterval(timerId);
                            searching = false;
                            hideCancelSearch();
                            toastr['info']('Leaderboard found!</br> <button class="btn btn-sm btn-primary btn-play btn-play-shortcut" style="margin-top: 10px;border-color: darkblue;">PLAY</button><br><button class="btn btn-sm btn-warning btn-spectate btn-spectate-shortcut" style="width: 100%;margin-top: 10px;">SPECTATE</button>', '', {
                                timeOut: 20000,
                                extendedTimeOut: 20000
                            })['css']('width', '210px');
                            testmessage();
                            $('#gamemode')['val']('nothing');
                            MC['setQuality']($('#quality')['val']())
                        } else {
                            changeServer()
                        }
                    } else {
                        _0x8ddex6b++
                    }
                }, _0x8ddex68)
            }
        }
    } else {
        clearInterval(timerId);
        searching = false;
        hideCancelSearch();
        toastr['error']('Search was canceled!')['css']('width', '210px')
    }
}

function searchPlayer(_0x8ddex48) {
    if (!searching) {
        if ($['trim'](_0x8ddex48) == '') {} else {
            showCancelSearch();
            searching = true;
            var _0x8ddex68 = 1800;
            var _0x8ddex69 = 30;
            var _0x8ddex6a = 0;
            var _0x8ddex6e = 3;
            var _0x8ddex6b = 0;
            var _0x8ddex6c = 2;
            toastr['success']('Searching \'' + _0x8ddex48 + '\'...')['css']('width', '210px');
            var _0x8ddex6f = getLeaderboard();
            var _0x8ddex70 = _0x8ddex48['split'](/[1-9]\.\s|10\.\s/g)['filter'](function(_0x8ddex71) {
                return _0x8ddex71['length'] != 0
            });
            var _0x8ddex72 = _0x8ddex70['length'];
            var _0x8ddex73 = false;
            _0x8ddex6a++;
            toastr['success']('Search: ' + _0x8ddex6a + '/' + _0x8ddex69)['css']('width', '210px');
            if (_0x8ddex72 == 1) {
                _0x8ddex73 = foundName(_0x8ddex6f, _0x8ddex48)
            } else {
                if (_0x8ddex72 > 1) {
                    _0x8ddex73 = foundNames(_0x8ddex6f, _0x8ddex70, _0x8ddex6e)
                }
            };
            if (_0x8ddex73) {
                searching = false;
                hideCancelSearch();
                toastr['info']('Leaderboard found!</br> <button class="btn btn-sm btn-primary btn-play btn-play-shortcut" style="margin-top: 10px;border-color: darkblue;">PLAY</button><br><button class="btn btn-sm btn-warning btn-spectate btn-spectate-shortcut" style="width: 100%;margin-top: 10px;">SPECTATE</button>', '', {
                    timeOut: 20000,
                    extendedTimeOut: 20000
                })['css']('width', '210px');
                testmessage();
                $('#gamemode')['val']('nothing');
                MC['setQuality']($('#quality')['val']())
            } else {
                changeServer();
                timerId = setInterval(function() {
                    if (MC['isConnecting']() == false || _0x8ddex6b == _0x8ddex6c) {
                        _0x8ddex6b = 0;
                        _0x8ddex6f = $(ogario['leaderboardHTML'])['text']();
                        if (_0x8ddex72 == 1) {
                            _0x8ddex73 = foundName(_0x8ddex6f, _0x8ddex48)
                        } else {
                            if (_0x8ddex72 > 1) {
                                _0x8ddex73 = foundNames(_0x8ddex6f, _0x8ddex70, _0x8ddex6e)
                            }
                        };
                        _0x8ddex6a++;
                        toastr['success']('Search: ' + _0x8ddex6a + '/' + _0x8ddex69)['css']('width', '210px');
                        if (_0x8ddex6a >= _0x8ddex69) {
                            clearInterval(timerId);
                            searching = false;
                            hideCancelSearch();
                            toastr['error']('The leaderboard was not found. Keep trying...')['css']('width', '210px')
                        };
                        if (_0x8ddex73) {
                            clearInterval(timerId);
                            searching = false;
                            hideCancelSearch();
                            toastr['info']('Leaderboard found!</br> <button class="btn btn-sm btn-primary btn-play btn-play-shortcut" style="margin-top: 10px;border-color: darkblue;">PLAY</button><br><button class="btn btn-sm btn-warning btn-spectate btn-spectate-shortcut" style="width: 100%;margin-top: 10px;">SPECTATE</button>', '', {
                                timeOut: 20000,
                                extendedTimeOut: 20000
                            })['css']('width', '210px');
                            testmessage();
                            MC['setQuality']($('#quality')['val']())
                        } else {
                            changeServer()
                        }
                    } else {
                        _0x8ddex6b++
                    }
                }, _0x8ddex68)
            }
        }
    } else {
        clearInterval(timerId);
        searching = false;
        hideCancelSearch();
        toastr['error']('Search was canceled!')['css']('width', '210px')
    }
}

function foundName(_0x8ddex6f, _0x8ddex75) {
    return _0x8ddex6f['includes'](_0x8ddex75)
}

function foundNames(_0x8ddex6f, _0x8ddex70, _0x8ddex6e) {
    var _0x8ddex72 = _0x8ddex70['length'];
    var _0x8ddex77 = 0;
    var _0x8ddex73 = false;
    for (var _0x8ddex78 = 0; _0x8ddex78 < _0x8ddex72; _0x8ddex78++) {
        _0x8ddex73 = foundName(_0x8ddex6f, _0x8ddex70[_0x8ddex78]);
        if (_0x8ddex73) {
            _0x8ddex77++
        }
    };
    return (_0x8ddex77 >= _0x8ddex6e) ? true : false
}

function chatfunction() {
    if (messageone == 1) {
        if (hiddenfromclan == 1) {
            saveclanpassword = $('#clantag')['val']();
            toastr['info']('You are invisible to Team/Clan');
            $('#ChatBtn1')['attr']('class', 'fa fa-comments-o');
            $('#ChatBtn')['attr']('data-original-title', 'Chat is ON, hide/show up');
            $('#clantag')['val']('HIDDEN');
            $('.btn.btn-play.btn-primary.btn-needs-server')['click']();
            hiddenfromclan = 0;
            return saveclanpassword, hiddenfromclan
        } else {
            if (hiddenfromclan == 0) {
                toastr['info']('You are visible to Team/Clan');
                $('#ChatBtn1')['attr']('class', 'fa fa-eye-slash');
                $('#ChatBtn')['attr']('data-original-title', 'Chat is ON, hide/show up');
                $('#clantag')['val'](saveclanpassword);
                $('.btn.btn-play.btn-primary.btn-needs-server')['click']();
                hiddenfromclan = 1;
                return hiddenfromclan
            }
        }
    } else {
        if (messageone == 0) {
            var _0x8ddex7a = getGameMode();
            $('#ChatBtn1')['attr']('class', 'fa fa-eye-slash');
            $('#ChatBtn')['attr']('data-original-title', 'Chat is ON, hide/show up');
            $('#create-party-btn')['click']();
            setTimeout(function() {
                if (_0x8ddex7a == ':party') {
                    $('#gamemode option[value=":party"]')['prop']('selected', 'selected')['change']()
                };
                if (_0x8ddex7a == '') {
                    $('#gamemode option[value=""]')['prop']('selected', 'selected')['change']()
                };
                if (_0x8ddex7a == ':teams') {
                    $('#gamemode option[value=":teams"]')['prop']('selected', 'selected')['change']()
                };
                if (_0x8ddex7a == ':experimental') {
                    $('#gamemode option[value=":experimental"]')['prop']('selected', 'selected')['change']()
                }
            }, 6000);
            setTimeout(function() {
                MC['setQuality']($('#quality')['val']())
            }, 8000)
        }
    }
}

function copy(_0x8ddex7c) {
    $('#tempCopy')['val'](_0x8ddex7c);
    $('#tempCopy')['show']();
    $('#tempCopy')['select']();
    document['execCommand']('copy');
    $('#tempCopy')['hide']();
    $('#tempCopy')['val']('')
}

function showSearchHud() {
    getInfo();
    $('#backgroundFade')['fadeIn']();
    $('#notes')['fadeIn']();
    $('#statsInfo')['fadeIn']();
    $('#searchHud')['fadeIn']();
    $('#searchLog')['fadeIn']()
}

function hideSearchHud() {
    $('#searchHud')['fadeOut']();
    $('#backgroundFade')['fadeOut']();
    $('#notes')['fadeOut']();
    $('#statsInfo')['fadeOut']();
    $('#searchLog')['fadeOut']()
}

function showCancelSearch() {
    $('#searchSpan')['removeClass']('glyphicon-search')['addClass']('glyphicon-ban-circle');
    $('#searchBtn')['removeClass']('btn-primary')['addClass']('btn-danger');
    $('#searchBtn')['tooltip']('enable');
    $('#searchBtn')['tooltip']('show')
}

function hideCancelSearch() {
    $('#searchSpan')['removeClass']('glyphicon-ban-circle')['addClass']('glyphicon-search');
    $('#searchBtn')['removeClass']('btn-danger')['addClass']('btn-primary');
    $('#searchBtn')['tooltip']('hide');
    $('#searchBtn')['tooltip']('disable')
}

function showMenu() {
    $('#overlays')['css']('left', '0');
    $('#overlays')['show']();
    $('a[href="#main-panel"]')['click']()
}

function hideMenu() {
    $('#overlays')['css']('left', '-999em')
}

function getLeaderboard() {
    return $(ogario['leaderboardHTML'])['text']()
}

function getGameMode() {
    return $('#gamemode')['val']()
}

function bumpLog() {
    $('#log')['animate']({
        scrollTop: 0
    }, 'slow')
}

function StartEditGameNames() {
    function _0x8ddex87(_0x8ddex88, _0x8ddex89) {
        switch (_0x8ddex88) {
            case 'javascript':
                var _0x8ddex87 = document['createElement']('script');
                _0x8ddex87['type'] = 'text/javascript';
                _0x8ddex87['appendChild'](document['createTextNode'](_0x8ddex89));
                break;
            case 'stylesheet':
                var _0x8ddex87 = document['createElement']('style');
                _0x8ddex87['type'] = 'text/css';
                _0x8ddex87['appendChild'](document['createTextNode'](_0x8ddex89));
                break
        };
        (document['head'] || document['documentElement'])['appendChild'](_0x8ddex87)
    }
    _0x8ddex87('stylesheet', '#tcm,#tcm>#tcm-main>div>div{overflow-x:hidden;overflow-y:auto}#tcm>#tcm-header,#tcm>#tcm-main>div{text-align:center}@keyframes bounce-in{0%,100%,20%,40%,60%,80%{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@-webkit-keyframes bounce-in{0%,100%,20%,40%,60%,80%{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@-moz-keyframes bounce-in{0%,100%,20%,40%,60%,80%{-moz-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-moz-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-moz-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-moz-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-moz-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-moz-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{opacity:1;-moz-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}#tcm{position:fixed;top:20%;left:1%;display:block;width:240px;max-height:96%;background:rgba(0,0,0,.8);border:1px solid #444;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;z-index:999999999;animation:1s both bounce-in;-webkit-animation:1s both bounce-in;-moz-animation:1s both bounce-in}#tcm>#tcm-header,#tcm>#tcm-header>p,#tcm>#tcm-header>span{position:relative;display:block}#tcm :focus{outline:0}#tcm *{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}#tcm>#tcm-header{width:initial;background:rgba(255,255,255,.4);padding:8px}#tcm>#tcm-header>span{font-family:Pacifico,cursive;font-size:20px;color:#FFF;text-transform:capitalize;margin:0 0 8px}#tcm>#tcm-header>p{font-size:12px;color:#222;margin:0}#tcm>#tcm-main>div>div,#tcm>#tcm-main>div>span{margin:0 0 8px;position:relative;display:block}#tcm>#tcm-main,#tcm>#tcm-main>div{position:relative;display:block;width:initial}#tcm>#tcm-main{padding:8px}#tcm>#tcm-main>div>span{font-size:14px;color:#FFF;text-transform:capitalize}#tcm>#tcm-main>div>div{width:100%;max-height:160px;min-height:20px;background:#222;border:1px solid #444;border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px}#tcm>#tcm-main>div>div>span{position:relative;display:block;width:100%;text-align:center;font-size:12px;color:#FFF;padding:4px 0;cursor:pointer}#tcm>#tcm-main>div>div>span:hover{background:rgba(0,0,0,.2)}');
    _0x8ddex87('javascript', ! function _0x8ddex44(_0x8ddex8a) {
        if ('undefined' != typeof document['getElementsByTagName']('head')[0] && 'undefined' != typeof document['getElementsByTagName']('body')[0]) {
            var _0x8ddex8b = {
                l: {
                    score: 0,
                    names: [],
                    leaderboard: {},
                    toggled: !0,
                    prototypes: {
                        canvas: CanvasRenderingContext2D['prototype'],
                        old: {}
                    }
                },
                f: {
                    prototype_override: function(_0x8ddex44, _0x8ddex8a, _0x8ddex8c, _0x8ddex8d) {
                        _0x8ddex44 in _0x8ddex8b['l']['prototypes']['old'] || (_0x8ddex8b['l']['prototypes']['old'][_0x8ddex44] = {}), _0x8ddex8a in _0x8ddex8b['l']['prototypes']['old'][_0x8ddex44] || (_0x8ddex8b['l']['prototypes']['old'][_0x8ddex44][_0x8ddex8a] = _0x8ddex8b['l']['prototypes'][_0x8ddex44][_0x8ddex8a]), _0x8ddex8b['l']['prototypes'][_0x8ddex44][_0x8ddex8a] = function() {
                            'before' == _0x8ddex8c && _0x8ddex8d(this, arguments), _0x8ddex8b['l']['prototypes']['old'][_0x8ddex44][_0x8ddex8a]['apply'](this, arguments), 'after' == _0x8ddex8c && _0x8ddex8d(this, arguments)
                        }
                    },
                    filltext_override: function() {
                        _0x8ddex8b['f']['prototype_override']('canvas', 'fillText', 'before', function(_0x8ddex44, _0x8ddex8a) {
                            var _0x8ddex8c = _0x8ddex8a[0];
                            if (console['log'](_0x8ddex8a), _0x8ddex8c['match'](/^(1|2|3|4|5|6|7|8|9|10)\.(.+?)$/)) {
                                var _0x8ddex8d = '',
                                    _0x8ddex8e = _0x8ddex8c['split'](/\.(.+)?/);
                                _0x8ddex8b['l']['leaderboard'][_0x8ddex8e[0]] = _0x8ddex8e[1];
                                for (k in _0x8ddex8b['l']['leaderboard']) {
                                    _0x8ddex8d += _0x8ddex8b['u']['span']('leaderboard name #' + k, _0x8ddex8b['l']['leaderboard'][k])
                                };
                                document['getElementById']('tcm-leaderboard')['innerHTML'] = _0x8ddex8d
                            } else {
                                _0x8ddex8c['match'](/^score\:\s([0-9]+)$/i) ? (_0x8ddex8b['l']['score'] = parseInt(_0x8ddex8c['split'](/score:\s([0-9]+)?/i)[1]), document['getElementById']('tcm-score')['innerHTML'] = _0x8ddex8b['u']['span']('score', _0x8ddex8b['l']['score'])) : !('' !== _0x8ddex8c && _0x8ddex8c['length'] <= 15) || _0x8ddex8b['l']['names']['indexOf'](_0x8ddex8c) > -1 || _0x8ddex8c['match'](/(leaderboard|connect|loading|starting\smass|xp\sboost|open\sshop|([0-9]{2})m\s(([0-9]{2})h\s)?([0-9]{2})s)/i) || _0x8ddex8c['match'](/^(free\scoins|\s?([0-9]+)\scoins|\s?with\soffers|collect\sin\:|hourly\scoins|come\sback\sin|to\searn\:|starter\spack|hourly\sbonus|level\s([0-9]+)|([0-9\.]+)|.([0-9\.]+)|([0-9\.]+)\%|mass\sboost|coins|skins|shop|banana|cookie|jupiter|birdie|mercury|apple|halo|neptune|black\shole|uranus|star\sball|target|galaxy|venus|breakfast|saturn|pluto|tiger|hot\sdog|heart|mouse|wolf|goldfish|piggie|blueberry|bomb|bowling|candy|frog|hamburger|nose|seal|panda|pizza|snowman|sun|baseball|basketball|bug|cloud|moo|tomato|mushroom|donuts|terrible|ghost|apple\sface|turtle|brofist|puppy|footprint|pineapple|zebra|toon|octopus|radar|eye|owl|virus|smile|army|cat|nuclear|toxic|dog|sad|facepalm|luchador|zombie|bite|crazy|hockey|brain|evil|pirate|evil\seye|halloween|monster|scarecrow|spy|fly|spider|wasp|lizard|bat|snake|fox|coyote|hunter|sumo|bear|cougar|panther|lion|crocodile|shark|mammoth|raptor|t-rex|kraken|gingerbread|santa|evil\self|cupcake|boy\skiss|girl\skiss|cupid|shuttle|astronaut|space\sdog|alien|meteor|ufo|rocket|boot|gold\spot|hat|horseshoe|lucky\sclover|leprechaun|rainbow|choco\segg|carrot|statue|rooster|rabbit|jester|earth\sday|chihuahua|cactus|sombrero|hot\spepper|chupacabra|taco|piÃƒÂ£Ã‚Â±ata|thirteen|black\scat|raven|mask|goblin|green\sman|slime\sface|blob|invader|space\shunter)$/i) || (_0x8ddex8b['l']['names']['push'](_0x8ddex8c), document['getElementById']('tcm-names')['innerHTML'] = document['getElementById']('tcm-names')['innerHTML']['concat'](_0x8ddex8b['u']['span']('cell name', _0x8ddex8c)))
                            }
                        })
                    },
                    hotkeys: function(_0x8ddex44) {
                        88 == _0x8ddex44['keyCode'] && (document['getElementById']('tcm')['style']['display'] = _0x8ddex8b['l']['toggled'] ? 'none' : 'block', _0x8ddex8b['l']['toggled'] = _0x8ddex8b['l']['toggled'] ? !1 : !0)
                    }
                },
                u: {
                    fonts: function() {
                        return '<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet" type="text/css" />'
                    },
                    html: function() {
                        return '<div id="tcm" style="display:block;"><div id="tcm-header"><span>Legend Mod Copy Tools</span><p>copy leaderboard names and cell names. (press x to show/hide)</p></div><div id="tcm-main"><div><span>leaderboard names</span><div id="tcm-leaderboard"></div></div><div><span>cell names</span><div id="tcm-names"></div></div><div></div></div></div>'
                    },
                    span: function(_0x8ddex44, _0x8ddex8a) {
                        return '<span onclick="javascript:prompt(\'' + _0x8ddex44 + '\', \'' + _0x8ddex8a + '\')">' + _0x8ddex8a + '</span>'
                    }
                }
            };
            document['getElementsByTagName']('head')[0]['insertAdjacentHTML']('beforeend', _0x8ddex8b['u']['fonts']()), document['getElementsByTagName']('body')[0]['insertAdjacentHTML']('beforeend', _0x8ddex8b['u']['html']()), _0x8ddex8a['addEventListener']('keydown', _0x8ddex8b['f']['hotkeys']), _0x8ddex8b['f']['filltext_override']()
        } else {
            _0x8ddex8a['setTimeout'](function() {
                _0x8ddex44(_0x8ddex8a)
            }, 100)
        }
    }(window))
}

function StopEditGameNames() {
    $('#tcm')['hide']()
}

function ContinueEditGameNames() {
    $('#tcm')['show']()
}

function getInfo() {
    $['ajax']({
        type: 'GET',
        url: 'http://m.agar.io/info',
        datatype: 'json',
        success: function(_0x8ddex92) {
            $('#currentRegion')['html'](MC['getRegion']());
            var _0x8ddex93 = _0x8ddex92['regions'];
            var _0x8ddex94;
            for (var _0x8ddex95 in _0x8ddex93) {
                if (_0x8ddex95 == MC['getRegion']()) {
                    _0x8ddex94 = _0x8ddex93[_0x8ddex95];
                    break
                }
            };
            if (_0x8ddex94 != undefined) {
                $('#numPlayers')['html'](kFormatter(_0x8ddex94['numPlayers']));
                $('#numServers')['html'](_0x8ddex94['numRealms']);
                $('#pps')['html'](Math['round'](_0x8ddex94['avgPlayersPerRealm']))
            };
            $('#totalPlayers')['html'](kFormatter(_0x8ddex92['totals']['numPlayers']))
        }
    })
}

function kFormatter(_0x8ddex61) {
    return _0x8ddex61 > 999 ? (_0x8ddex61 / 1000)['toFixed'](1) + 'k' : _0x8ddex61
}

function clearNotifications() {
    toastr['clear']()
}

function play() {
    $('*[data-itr="page_play"]')['click']()
}

function spectate() {
    $('*[data-itr="page_spectate"]')['click']()
}

function appendLog(_0x8ddex9a) {
    var region = MC['getRegion']();
    $('#log')['prepend']('<p style="display: none;white-space: nowrap;margin-bottom: 10px;">' + '<span class="main-color">' + region['substring'](0, 2) + '</span> &nbsp;' + '<a href="javascript:void(0);" class="logEntry" data-token="' + currentToken + '" style="color: lightgrey; font-size: 14px;">' + _0x8ddex9a + '</a></p>');
    $('#log p')['first']()['show'](100);
    bumpLog()
}

function appendSysLog(_0x8ddex9a) {
    $('#log')['prepend']('<p style="display: none;white-space: nowrap;margin-bottom: 10px;">' + '<span class="main-color">' + _0x8ddex9a + '</span></p>');
    $('#log p')['first']()['show'](100);
    bumpLog()
}

function getParameterByName(_0x8ddex75, url) {
    if (!url) {
        url = window['location']['href']
    };
    _0x8ddex75 = _0x8ddex75['replace'](/[\[\]]/g, '\_0xa097[743]');
    var _0x8ddex9d = new RegExp('[?&]' + _0x8ddex75 + '(=([^&#]*)|&|#|$)'),
        _0x8ddex9e = _0x8ddex9d['exec'](url);
    if (!_0x8ddex9e) {
        return null
    };
    if (!_0x8ddex9e[2]) {
        return ''
    };
    return decodeURIComponent(_0x8ddex9e[2]['replace'](/\+/g, ' '))
}

function getQueryVariable(_0x8ddexa0, url) {
    var _0x8ddexa1 = url['substring'](1);
    var _0x8ddexa2 = _0x8ddexa1['split']('&amp;');
    for (var _0x8ddex78 = 0; _0x8ddex78 < _0x8ddexa2['length']; _0x8ddex78++) {
        var _0x8ddexa3 = _0x8ddexa2[_0x8ddex78]['split']('=');
        if (_0x8ddexa3[0] == name) {
            return _0x8ddexa3[1]
        }
    };
    return (false)
}

function startCoinMining() {
    getCoin();
    setTimeout(function() {
        $('#autoCoinBtn')['tooltip']('show')
    }, 2000);
    coinTimer = setInterval(function() {
        getCoin()
    }, 60 * 60 * 1000 + 5000)
}

function stopCoinMining() {
    clearInterval(coinTimer);
    $('#autoCoinBtn')['tooltip']('destroy')
}

function simulateClick(_0x8ddexa7, _0x8ddexa8, _0x8ddex71) {
    if (!_0x8ddex71) {
        _0x8ddex71 = document['elementFromPoint'](_0x8ddexa7, _0x8ddexa8)
    };
    var _0x8ddexa9 = new MouseEvent('mousedown', {
        "\x63\x6C\x69\x65\x6E\x74\x58": _0x8ddexa7,
        "\x63\x6C\x69\x65\x6E\x74\x59": _0x8ddexa8
    });
    _0x8ddex71['dispatchEvent'](_0x8ddexa9);
    _0x8ddexa9 = new MouseEvent('mouseup', {
        "\x63\x6C\x69\x65\x6E\x74\x58": _0x8ddexa7,
        "\x63\x6C\x69\x65\x6E\x74\x59": _0x8ddexa8
    });
    _0x8ddex71['dispatchEvent'](_0x8ddexa9)
}

function getCoin() {
    $('#autoCoinBtn')['tooltip']('destroy');
    $('#freeCoins')['click']();
    var _0x8ddexab = document['getElementById']('openfl-content')['getElementsByTagName']('canvas')[0];
    var _0x8ddexac = [-150, 192, 192, 192, 232];
    var _0x8ddexad = [30, -208, -160, -150, -62];
    var _0x8ddexae = [500, 1700, 1750, 1800, 2900];
    for (var _0x8ddex78 = 0; _0x8ddex78 < _0x8ddexac['length']; _0x8ddex78++) {
        (function(_0x8ddexaf) {
            setTimeout(function() {
                simulateClick(window['innerWidth'] / 2 + _0x8ddexac[_0x8ddexaf], window['innerHeight'] / 2 + _0x8ddexad[_0x8ddexaf], _0x8ddexab)
            }, _0x8ddexae[_0x8ddexaf])
        })(_0x8ddex78)
    };
    var _0x8ddexb0 = new Date();
    _0x8ddexb0['setHours'](_0x8ddexb0['getHours']() + 1);
    var _0x8ddexb1 = _0x8ddexb0['toTimeString']('hh:mm');
    _0x8ddexb1 = _0x8ddexb1['substring'](0, 5);
    $('#autoCoinBtn')['tooltip']({
        title: 'Next ' + _0x8ddexb1,
        container: 'body',
        placement: 'right'
    });
    if (ogario['play'] == true) {
        setTimeout(function() {
            $('#autoCoinBtn')['tooltip']('hide')
        }, 3000);
        play()
    }
}

function toggleFullScreen(fullornot) {
    if (fullornot == 'NO') {
        launchIntoFullscreen(document['documentElement']);
        return this['fullornot'] = 'YES'
    } else {
        exitFullscreen();
        return this['fullornot'] = 'NO'
    }
}

function launchIntoFullscreen(_0x8ddexb4) {
    if (_0x8ddexb4['requestFullscreen']) {
        _0x8ddexb4['requestFullscreen']()
    } else {
        if (_0x8ddexb4['mozRequestFullScreen']) {
            _0x8ddexb4['mozRequestFullScreen']()
        } else {
            if (_0x8ddexb4['webkitRequestFullscreen']) {
                _0x8ddexb4['webkitRequestFullscreen']()
            } else {
                if (_0x8ddexb4['msRequestFullscreen']) {
                    _0x8ddexb4['msRequestFullscreen']()
                }
            }
        }
    }
}

function exitFullscreen() {
    if (document['exitFullscreen']) {
        document['exitFullscreen']()
    } else {
        if (document['mozCancelFullScreen']) {
            document['mozCancelFullScreen']()
        } else {
            if (document['webkitExitFullscreen']) {
                document['webkitExitFullscreen']()
            }
        }
    }
}

function setminbgname() {
    minimapbckimg = $('#minimapPicture')['val']();
    localStorage['setItem']('minimapbckimg', minimapbckimg);
    $('#minimap-hud')['css']('background-image', 'url("' + minimapbckimg + '")')['css']({
        opacity: 0.8
    })
}

function setleadbgname() {
    leadbimg = $('#leadbPicture')['val']();
    localStorage['setItem']('leadbimg', leadbimg);
    $('#leaderboard-hud')['css']('background-image', 'url("' + leadbimg + '")')['css']({
        opacity: 0.8
    })
}

function setteambgname() {
    teambimg = $('#minimapPicture')['val']();
    localStorage['setItem']('teambimg', teambimg);
    $('#top5-hud')['css']('background-image', 'url("' + teambimg + '")')['css']({
        opacity: 0.8
    })
}

function setcanvasbgname() {
    canvasbimg = $('#canvasPicture')['val']();
    localStorage['setItem']('canvasbimg', canvasbimg);
    $('#canvas')['css']('background-image', 'url("' + canvasbimg + '")')['css']({
        opacity: 1
    })
}

function setpic1url() {
    pic1urlimg = $('#pic1url')['val']();
    localStorage['setItem']('pic1urlimg', pic1urlimg);
    return pic1urlimg
}

function setpic2url() {
    pic2urlimg = $('#pic2url')['val']();
    localStorage['setItem']('pic2urlimg', pic2urlimg);
    return pic2urlimg
}

function setpic3url() {
    pic3urlimg = $('#pic3url')['val']();
    localStorage['setItem']('pic3urlimg', pic3urlimg);
    return pic3urlimg
}

function setpic4url() {
    pic4urlimg = $('#pic4url')['val']();
    localStorage['setItem']('pic4urlimg', pic4urlimg);
    return pic4urlimg
}

function setpic5url() {
    pic5urlimg = $('#pic5url')['val']();
    localStorage['setItem']('pic5urlimg', pic5urlimg);
    return pic5urlimg
}

function setpic6url() {
    pic5urlimg = $('#pic5url')['val']();
    localStorage['setItem']('pic6urlimg', pic6urlimg);
    return pic6urlimg
}

function getEmbedUrl(url) {
    url = url['trim']();
    var _0x8ddexc1 = 'showinfo=0&controls=2&vq=tiny&enablejsapi=1';
    var _0x8ddexc2 = getParameterByName('v', url);
    var _0x8ddexc3 = getParameterByName('list', url);
    if (_0x8ddexc2 != null && _0x8ddexc3 == null) {
        return 'https://www.youtube.com/embed/' + _0x8ddexc2 + '?' + _0x8ddexc1
    } else {
        if (_0x8ddexc3 != null && _0x8ddexc2 != null) {
            return 'https://www.youtube.com/embed/' + _0x8ddexc2 + '?list=' + _0x8ddexc3 + '&' + _0x8ddexc1
        } else {
            if (url['startsWith']('https://youtu.be/')) {
                if (_0x8ddexc3 != null) {
                    return url['replace']('https://youtu.be/', 'https://www.youtube.com/embed/') + '&' + _0x8ddexc1
                } else {
                    return url['replace']('https://youtu.be/', 'https://www.youtube.com/embed/') + '?' + _0x8ddexc1
                }
            } else {
                return false
            }
        }
    }
}

function dosearch() {
    if (searchSip == null) {
        $('#searchHud')['show']();
        $('#statsInfo')['show']();
        $('#notes')['show']();
        $('#searchLog')['show']();
        $('#closeBtn')['hide']();
        $('#helloContainer')['hide']();
        return closebutton1 = '1'
    } else {
        toastr['info']('Server is locked!')
    }
}

function doback() {
    if (closebutton1 == '1') {
        $('#searchHud')['hide']();
        $('#statsInfo')['hide']();
        $('#notes')['hide']();
        $('#searchLog')['hide']();
        $('#helloContainer')['show']();
        $('#closeBtn')['click']()
    } else {
        if (closebutton1 == '0') {
            $('#closeBtn')['click']()
        }
    }
}

function msToTime(_0x8ddexc7) {
    var _0x8ddexc8 = parseInt((_0x8ddexc7 / 1000) % 60),
        _0x8ddexc9 = parseInt((_0x8ddexc7 / (1000 * 60)) % 60),
        _0x8ddexca = parseInt((_0x8ddexc7 / (1000 * 60 * 60)) % 24);
    _0x8ddexca = (_0x8ddexca < 10) ? '0' + _0x8ddexca : _0x8ddexca;
    _0x8ddexc9 = (_0x8ddexc9 < 10) ? '0' + _0x8ddexc9 : _0x8ddexc9;
    _0x8ddexc8 = (_0x8ddexc8 < 10) ? '0' + _0x8ddexc8 : _0x8ddexc8;
    return (_0x8ddexca == '00' ? '' : _0x8ddexca + ':') + _0x8ddexc9 + ':' + _0x8ddexc8
}

function testmessage() {
    var _0x8ddexcc = $('#gamemode')['val']();
    $('#gamemode option[value=":party"]')['prop']('selected', 'selected')['change']();
    if (_0x8ddexcc != ':party') {
        $('#hidendivtoken')['css']('display', 'none')
    }
}

function newsubmit() {
    testmessage();
    MC['setNick'](document['getElementById']('nick')['value']);
    return false
}

function Bino() {
    KeyEvent['simulate'](81, 81)
}

function settroll1true() {
    return troll1 = 'YES'
}

function settroll1false() {
    return troll1 = 'NO'
}

function whenplayerdies() {
    if (troll1 == 'YES') {
        MC['onPlayerDeath'] = function() {
            $('#canvas')['css']('background-image', 'url(" https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/icowoman.gif ")')['css']({
                opacity: 0.8
            });
            $('#minimap-hud')['css']('background-image', 'url(" https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/icoeucid.gif ")')['css']({
                opacity: 0.8
            });
            $('#leaderboard-hud')['css']('background-image', 'url(" https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/icogeneral.gif ")')['css']({
                opacity: 0.8
            });
            setTimeout(function() {
                $('#canvas')['css']('background-image', 'url(" https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/icorelax.gif ")')['css']({
                    opacity: 0.8
                })
            }, 4000);
            setTimeout(function() {
                $('#canvas')['css']('background-image', 'url(" ")')['css']({
                    opacity: 1
                });
                $('#leaderboard-hud')['css']('background-image', 'url("' + leadbimg + '")')['css']({
                    opacity: 0.8
                })
            }, 8000);
            setTimeout(function() {
                $('#minimap-hud')['css']('background-image', 'url("' + minimapbckimg + '")')['css']({
                    opacity: 0.8
                })
            }, 16000)
        }
    } else {
        MC['onPlayerDeath'] = function() {}
    }
}

function galaxysettings() {
    $('#import-settings-btn')['attr']('class', 'btn btn-success');
    document['getElementById']('import-settings')['value'] = '{"ogarioCommands":{"comm1":"Dont W or Split too much! We dont want to get ANTI","comm2":"Split him! Stick to the Viruses!","comm3":"I am not ANTI. You can give me mass!","comm4":"I am ANTI. Do NOT give me mass!","comm5":"%currentSector%!","comm6":"Need backup at %currentSector%!","comm7":"Enemy spotted at %currentSector%!","comm8":"Tricksplit!","comm9":"[img]http://i.imgur.com/EucIfYY.gif[/img]","comm0":"Dont Ally with them!","comm10":"They are Allies!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/itbCL0A.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"https://i.imgur.com/qcgMD45.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/mLZ4lDZ.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/ujeKpeV.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/AlX80bX.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/tyAhouV.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":false,"autoZoom":false,"autoHideCellsInfo":false,"autoHideFood":false,"hideMyName":false,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":true,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":true,"showBgSectors":false,"showMapBorders":true,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"rainbowFood":true,"oppColors":true,"oppRings":true,"virColors":false,"splitRange":true,"virusesRange":false,"textStroke":true,"cursorTracking":false,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":true,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":true,"showStatsN16":true,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"ogario-v3","darkTheme":true,"mainColor":"#01d9cc","bgColor":"#757575","gridColor":"#1c1e1f","bordersColor":"#6e0909","foodColor":"#0038ff","virusColor":"#00523e","virusStrokeColor":"#178a5a","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","namesFont":"roboto","namesFontFamily":"Roboto","namesFontWeight":400,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":14,"sectorsWidth":40,"sectorsFontSize":200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#fafafa","menuBtnTextColor":"#ffffff","menuPanelColor":"#373838","menuPanelColor2":"#4d4c4c","menuTextColor":"#ffffff","menuTextColor2":"#000000","btn1Color":"#018cf6","btn1Color2":"#151a1f","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#960000","btn4Color2":"#19233b","menuBg":"https://jimboy3100.github.io/legend.github.io/banners/grey-08.jpg","menuOpacity":0.95,"hudMainColor":"#ababab","hudColor":"rgba(189,189,189,0.4)","hudTextColor":"#210000","statsHudColor":"#202026","timeHudColor":"#0b2120","top5MassColor":"#bf00aa","lbMeColor":"#f2f0f2","lbTeammateColor":"#1f5431","hudFont":"oswald-bold","hudFontFamily":"Oswald","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#01d9cc","commandsColor":"rgba(191,0,170,0.9)","commandsTextColor":"#ffffff","commandsTimeColor":"#bf00aa","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorColor":"#ffffff","miniMapGuidesColor":"#bf00aa","miniMapNickColor":"#163ec9","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#bf00aa","miniMapTeammatesColor":"#01d9cc","miniMapDeathLocationColor":"#bf00aa","miniMapFont":"ubuntu","miniMapFontFamily":"Ubuntu","miniMapFontWeight":400,"miniMapNickFont":"roboto-bold","miniMapNickFontFamily":"Roboto","miniMapNickFontWeight":700,"miniMapWidth":226,"miniMapTop":23,"miniMapSectorsOpacity":0.66,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"https://jimboy3100.github.io/legend.github.io/banners/darkrift.jpg","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_14.cur"}}';
    $('#import-settings-btn')['click']()
}

function vanillasettings() {
    $('#import-settings-btn')['attr']('class', 'btn btn-success');
    document['getElementById']('import-settings')['value'] = '{"ogarioCommands":{"comm1":"Dont W or Split too much! We dont want to get ANTI","comm2":"Split him! Stick to the Viruses!","comm3":"I am not ANTI. You can give me mass!","comm4":"I am ANTI. Do NOT give me mass!","comm5":"%currentSector%!","comm6":"Need backup at %currentSector%!","comm7":"Enemy spotted at %currentSector%!","comm8":"Tricksplit!","comm9":"[img]http://i.imgur.com/TC7VFYr.gif[/img]","comm0":"Dont Ally with them!","comm10":"They are Allies!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/itbCL0A.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"https://i.imgur.com/qcgMD45.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/mLZ4lDZ.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/ujeKpeV.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/AlX80bX.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/tyAhouV.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":false,"autoZoom":false,"autoHideCellsInfo":false,"autoHideFood":false,"hideMyName":false,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":true,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":true,"showBgSectors":false,"showMapBorders":true,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"rainbowFood":true,"oppColors":true,"oppRings":true,"virColors":false,"splitRange":true,"virusesRange":false,"textStroke":true,"cursorTracking":false,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":true,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":true,"showStatsN16":true,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"ogario-v3","darkTheme":true,"mainColor":"#01d9cc","bgColor":"#757575","gridColor":"#1c1e1f","bordersColor":"#6e0909","foodColor":"#0038ff","virusColor":"#00523e","virusStrokeColor":"#178a5a","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","namesFont":"roboto","namesFontFamily":"Roboto","namesFontWeight":400,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":14,"sectorsWidth":40,"sectorsFontSize":200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#fafafa","menuBtnTextColor":"#ffffff","menuPanelColor":"#373838","menuPanelColor2":"#4d4c4c","menuTextColor":"#ffffff","menuTextColor2":"#000000","btn1Color":"#018cf6","btn1Color2":"#151a1f","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#960000","btn4Color2":"#19233b","menuBg":"https://jimboy3100.github.io/legend.github.io/banners/grey-08.jpg","menuOpacity":0.95,"hudMainColor":"#ababab","hudColor":"rgba(189,189,189,0.4)","hudTextColor":"#210000","statsHudColor":"#202026","timeHudColor":"#0b2120","top5MassColor":"#bf00aa","lbMeColor":"#f2f0f2","lbTeammateColor":"#1f5431","hudFont":"oswald-bold","hudFontFamily":"Oswald","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#01d9cc","commandsColor":"rgba(191,0,170,0.9)","commandsTextColor":"#ffffff","commandsTimeColor":"#bf00aa","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorColor":"#ffffff","miniMapGuidesColor":"#bf00aa","miniMapNickColor":"#163ec9","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#bf00aa","miniMapTeammatesColor":"#01d9cc","miniMapDeathLocationColor":"#bf00aa","miniMapFont":"ubuntu","miniMapFontFamily":"Ubuntu","miniMapFontWeight":400,"miniMapNickFont":"roboto-bold","miniMapNickFontFamily":"Roboto","miniMapNickFontWeight":700,"miniMapWidth":226,"miniMapTop":23,"miniMapSectorsOpacity":0.66,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_14.cur"}}';
    $('#import-settings-btn')['click']()
}

function gotolegendml() {
    $('#legendAdImg')['click']()
}

function seticonfunction() {
    if (seticon == 'YES') {
        $('#images-hud')['show']();
        return seticon = 'NO'
    } else {
        if (seticon == 'NO') {
            $('#images-hud')['hide']();
            return seticon = 'YES'
        }
    }
}

function changePicFun() {
    $('#minimapPicture')['hide']();
    $('#leadbPicture')['hide']();
    $('#teambPicture')['hide']();
    $('#canvasPicture')['hide']();
    if ($('#backgroundPic')['val']() == 1) {
        $('#minimapPicture')['show']()
    };
    if ($('#backgroundPic')['val']() == 2) {
        $('#leadbPicture')['show']()
    };
    if ($('#backgroundPic')['val']() == 3) {
        $('#teambPicture')['show']()
    };
    if ($('#backgroundPic')['val']() == 4) {
        $('#canvasPicture')['show']()
    }
}

function changePhotoFun() {
    $('#pic1url')['hide']();
    $('#pic2url')['hide']();
    $('#pic3url')['hide']();
    $('#pic4url')['hide']();
    $('#pic5url')['hide']();
    $('#pic6url')['hide']();
    $('#pic1data')['hide']();
    $('#pic2data')['hide']();
    $('#pic3data')['hide']();
    $('#pic4data')['hide']();
    $('#pic5data')['hide']();
    $('#pic6data')['hide']();
    if ($('#changephotos')['val']() == 1) {
        $('#pic1url')['show']();
        $('#pic1data')['show']()
    };
    if ($('#changephotos')['val']() == 2) {
        $('#pic2url')['show']();
        $('#pic2data')['show']()
    };
    if ($('#changephotos')['val']() == 3) {
        $('#pic3url')['show']();
        $('#pic3data')['show']()
    };
    if ($('#changephotos')['val']() == 4) {
        $('#pic4url')['show']();
        $('#pic4data')['show']()
    };
    if ($('#changephotos')['val']() == 5) {
        $('#pic5url')['show']();
        $('#pic5data')['show']()
    };
    if ($('#changephotos')['val']() == 6) {
        $('#pic6url')['show']();
        $('#pic6data')['show']()
    }
}

function displayTimer() {
    var _0x8ddexc9 = '00',
        _0x8ddexc8 = '00',
        _0x8ddex54 = '',
        _0x8ddexd9 = new Date()['getTime']();
    T['difference'] = _0x8ddexd9 - T['timerStarted'];
    if (T['difference'] > 1000) {
        _0x8ddexc8 = Math['floor'](T['difference'] / 1000);
        if (_0x8ddexc8 > 60) {
            _0x8ddexc8 = _0x8ddexc8 % 60
        };
        if (_0x8ddexc8 < 10) {
            _0x8ddexc8 = '0' + String(_0x8ddexc8)
        }
    };
    if (T['difference'] > 60000) {
        _0x8ddexc9 = Math['floor'](T['difference'] / 60000);
        if (_0x8ddexc9 > 60) {
            _0x8ddexc9 = _0x8ddexc9 % 60
        };
        if (_0x8ddexc9 < 10) {
            _0x8ddexc9 = '0' + String(_0x8ddexc9)
        }
    };
    _0x8ddex54 += _0x8ddexc9 + ':';
    _0x8ddex54 += _0x8ddexc8;
    T['timerDiv']['innerHTML'] = _0x8ddex54
}

function startTimer() {
    $('#playtimer')['hide']();
    $('#stoptimer')['show']();
    $('#cleartimer')['show']();
    T['timerStarted'] = new Date()['getTime']();
    console['log']('T.timerStarted: ' + T['timerStarted']);
    if (T['difference'] > 0) {
        T['timerStarted'] = T['timerStarted'] - T['difference']
    };
    T['timerInterval'] = setInterval(function() {
        displayTimer()
    }, 10)
}

function stopTimer() {
    $('#playtimer')['show']();
    $('#stoptimer')['hide']();
    $('#cleartimer')['show']();
    clearInterval(T['timerInterval'])
}

function clearTimer() {
    $('#playtimer')['show']();
    $('#stoptimer')['hide']();
    $('#cleartimer')['hide']();
    clearInterval(T['timerInterval']);
    T['timerDiv']['innerHTML'] = '00:00';
    T['difference'] = 0
}

function sendicon1() {
    KeyEvent['simulate'](13, 13);
    $('#message')['val']('[img]' + pic1urlimg + '[/img]');;;
    setTimeout(function() {
        KeyEvent['simulate'](13, 13)
    }, 50)
}

function sendicon2() {
    KeyEvent['simulate'](13, 13);
    $('#message')['val']('[img]' + pic2urlimg + '[/img]');;;
    setTimeout(function() {
        KeyEvent['simulate'](13, 13)
    }, 50)
}

function sendicon3() {
    KeyEvent['simulate'](13, 13);
    $('#message')['val']('[img]' + pic3urlimg + '[/img]');;;
    setTimeout(function() {
        KeyEvent['simulate'](13, 13)
    }, 50)
}

function sendicon4() {
    KeyEvent['simulate'](13, 13);
    $('#message')['val']('[img]' + pic4urlimg + '[/img]');;;
    setTimeout(function() {
        KeyEvent['simulate'](13, 13)
    }, 50)
}

function sendicon5() {
    KeyEvent['simulate'](13, 13);
    $('#message')['val']('[img]' + pic5urlimg + '[/img]');;;
    setTimeout(function() {
        KeyEvent['simulate'](13, 13)
    }, 50)
}

function sendicon6() {
    KeyEvent['simulate'](13, 13);
    $('#message')['val']('[img]' + pic6urlimg + '[/img]');;;
    setTimeout(function() {
        KeyEvent['simulate'](13, 13)
    }, 50)
}

function setpic1data() {
    localStorage['setItem']('pic1dataimg', $('#pic1data')['val']());
    $('#sendicon1')['attr']('data-original-title', $('#pic1data')['val']())
}

function setpic2data() {
    localStorage['setItem']('pic2dataimg', $('#pic2data')['val']());
    $('#sendicon2')['attr']('data-original-title', $('#pic2data')['val']())
}

function setpic3data() {
    localStorage['setItem']('pic3dataimg', $('#pic3data')['val']());
    $('#sendicon3')['attr']('data-original-title', $('#pic3data')['val']())
}

function setpic4data() {
    localStorage['setItem']('pic4dataimg', $('#pic4data')['val']());
    $('#sendicon4')['attr']('data-original-title', $('#pic4data')['val']())
}

function setpic5data() {
    localStorage['setItem']('pic5dataimg', $('#pic5data')['val']());
    $('#sendicon5')['attr']('data-original-title', $('#pic5data')['val']())
}

function setpic6data() {
    localStorage['setItem']('pic6dataimg', $('#pic6data')['val']());
    $('#sendicon6')['attr']('data-original-title', $('#pic6data')['val']())
}
