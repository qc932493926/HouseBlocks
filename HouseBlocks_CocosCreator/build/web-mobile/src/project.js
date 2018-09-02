require=function i(r,a,s){function u(t,o){if(!a[t]){if(!r[t]){var e="function"==typeof require&&require;if(!o&&e)return e(t,!0);if(d)return d(t,!0);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}var n=a[t]={exports:{}};r[t][0].call(n.exports,function(o){return u(r[t][1][o]||o)},n,n.exports,i,r,a,s)}return a[t].exports}for(var d="function"==typeof require&&require,o=0;o<s.length;o++)u(s[o]);return u}({AnimationMediator:[function(o,t,e){"use strict";cc._RF.push(t,"850acVP8ohKtJ/rgxP+hm+d","AnimationMediator");t.exports={backgroundLoop:function(o,t){o.node.x>-t?(o.node.x-=1,o.node.y-=1):o.node.setPosition(0,0)}},cc._RF.pop()},{}],CollisionManager:[function(o,t,e){"use strict";cc._RF.push(t,"a00b4da9iZP44MoJZX6URzO","CollisionManager");var f=o("GlobalData");cc.Class({extends:cc.Component,properties:{scoreLabel:cc.Label,bottom:cc.Node,backgroundColor:cc.Sprite,audio:cc.AudioClip},onBeginContact:function(o,t,e){var c=o.getWorldManifold().points;if(1<f.HouseVector.length&&c[0].y<10&&cc.director.loadScene("GameOverScene"),this.scoreLabel.string="思考："+f.HouseVector.length,c[0].y>cc.winSize.height/4){var n=cc.moveTo(.5,cc.v2(this.bottom.x,this.bottom.y-f.HouseVector[0].getContentSize().height));this.bottom.runAction(n);var i=!0,r=!1,a=void 0;try{for(var s,u=f.HouseVector[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var d=s.value;n=cc.moveTo(.5,d.x,d.y-d.getContentSize().height);d.runAction(n)}}catch(o){r=!0,a=o}finally{try{!i&&u.return&&u.return()}finally{if(r)throw a}}}if(0<f.HouseVector.length){var l=cc.tintTo(2,120,232,254),h=cc.tintBy(2,120,232,254),p=cc.tintTo(0,0,0,0),g=cc.sequence(l,h,p);this.backgroundColor.node.runAction(g)}this.current=cc.audioEngine.play(this.audio,!1,1)}}),cc._RF.pop()},{GlobalData:"GlobalData"}],GameOverScene:[function(o,t,e){"use strict";cc._RF.push(t,"972b2XOvzFA9IvaULAh0wLN","GameOverScene");var c=o("GlobalData"),n=o("AnimationMediator");cc.Class({extends:cc.Component,properties:{score:cc.Label,restartBtn:cc.Button,list:cc.Label,background:cc.Sprite,audio:cc.AudioClip},start:function(){this.score.string=c.HouseVector.length,c.scoreVector.push(this.score.string),this.list.string=Math.max.apply(null,c.scoreVector),this.restartBtn.node.on("click",this.gotoPlayScene,this)},gotoPlayScene:function(){this.current=cc.audioEngine.play(this.audio,!1,1),cc.director.loadScene("PlayScene")},update:function(){n.backgroundLoop(this.background,64)},onDestroy:function(){this.unschedule(this.update)}}),cc._RF.pop()},{AnimationMediator:"AnimationMediator",GlobalData:"GlobalData"}],GlobalData:[function(o,t,e){"use strict";cc._RF.push(t,"7f9814DO85E77/dUJScK+ox","GlobalData");var c={HouseVector:null,scoreVector:[],randColor:function(){var o=55+200*cc.random0To1(),t=55+200*cc.random0To1(),e=55+200*cc.random0To1(),c=55+200*cc.random0To1();return cc.color(o,t,e,c)}};t.exports=c,cc._RF.pop()},{}],PlayScene:[function(o,t,e){"use strict";cc._RF.push(t,"acec6fuRF9BZJjsK3UHefh4","PlayScene");var c=o("GlobalData"),n=o("AnimationMediator");cc.Class({extends:cc.Component,properties:{background:cc.Sprite,backBtn:cc.Button,house_onRope:cc.Node,houseColor:cc.Sprite,house:cc.Node,audio:cc.AudioClip},randColor:c.randColor,onLoad:function(){this.gravity=cc.v2(0,-320),cc.director.getPhysicsManager().enabled=!0,cc.director.getPhysicsManager().gravity=this.gravity,this.background.node.on("touchstart",function(o){cc.log("touched!"),this.addHouse()},this),c.HouseVector=[]},start:function(){this.backBtn.node.on("click",this.backToStartScene,this),this.houseColor.node.color=this.randColor()},backToStartScene:function(){this.current=cc.audioEngine.play(this.audio,!1,1),cc.director.loadScene("StartScene")},addHouse:function(){var o=cc.instantiate(this.house);o.parent=this.node,o.setPosition(this.house_onRope.x,this.house_onRope.y),c.HouseVector.push(o),c.HouseVector.length%5==0&&(this.gravity=cc.v2(this.gravity.x,this.gravity.y-200))},update:function(o){n.backgroundLoop(this.background,24)},onDestroy:function(){this.unschedule(this.update)}}),cc._RF.pop()},{AnimationMediator:"AnimationMediator",GlobalData:"GlobalData"}],StartScene:[function(o,t,e){"use strict";cc._RF.push(t,"95a22xhUZ5Bo5IdfjcyArJj","StartScene");var c=o("AnimationMediator");cc.Class({extends:cc.Component,properties:{startBtn:cc.Button,background:cc.Sprite,hero:cc.Sprite,audio:cc.AudioClip},origin:null,onLoad:function(){this.origin=this.background.node.getPosition()},start:function(){this.startBtn.node.on("click",this.delayToReplaceScene,this)},delayToReplaceScene:function(){this.current=cc.audioEngine.play(this.audio,!1,1);var o=cc.moveTo(1,cc.p(this.hero.node.x,this.hero.node.y-200)),t=cc.rotateBy(1,360),e=cc.spawn(o,t);this.hero.node.runAction(e),this.scheduleOnce(this.gotoPlayScene,1)},gotoPlayScene:function(){cc.director.loadScene("PlayScene")},update:function(o){c.backgroundLoop(this.background,64)},onDestroy:function(){this.unschedule(this.update)}}),cc._RF.pop()},{AnimationMediator:"AnimationMediator"}]},{},["AnimationMediator","CollisionManager","GameOverScene","GlobalData","PlayScene","StartScene"]);