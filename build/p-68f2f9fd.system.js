System.register(["./p-0de14d41.system.js","./p-91c1f7a0.system.js"],(function(t){"use strict";var e,r;return{setters:[function(t){e=t.c},function(t){r=t.createGesture}],execute:function(){var a=t("createSwipeBackGesture",(function(t,a,n,i,s){var v=t.ownerDocument.defaultView;var c=function(t){return t.startX<=50&&a()};var u=function(t){var e=t.deltaX;var r=e/v.innerWidth;i(r)};var o=function(t){var r=t.deltaX;var a=v.innerWidth;var n=r/a;var i=t.velocityX;var c=a/2;var u=i>=0&&(i>.2||t.deltaX>c);var o=u?1-n:n;var f=o*a;var d=0;if(f>5){var l=f/Math.abs(i);d=Math.min(l,540)}s(u,n<=0?.01:e(0,n,.9999),d)};return r({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:c,onStart:n,onMove:u,onEnd:o})}))}}}));