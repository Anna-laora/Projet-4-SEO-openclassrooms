"use strict";!function(b,a){"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define(["jquery","googlemaps!" ],a):b.GMaps=a()}(this,function(){/* !
 * GMaps.js v0.4.25
 * http://hpneo.github.com/gmaps/
 *
 * Copyright 2017, Gustavo Léon
 * Publié sous la licence MIT.
 push(["center=",a.lat,",",a.lng].join("")),supprimer a.lat,supprimer a.lng;else if(a.visible){var s=encodeURI (a.visible.join("|"));c.push("visible="+s)}var i=a.size;i?(i.join&&(i=i.join("x")) ,supprimer a.size):i="630x300",c.push("size="+i),a.zoom|| !1===a.zoom||(a.zoom=15);var t=!a.hasOwnProperty("sensor")||!!a.sensor;for(var g in delete a.sensor,c. push("sensor="+t),a)a.hasOwnProperty(g)&&c.push(g+"="+a[g]);if(j)for(var d=0;b=j[d] ;d++){for(var g in x=[],b.size&&"normal"!==b.size?(x.push("size:"+b.size),supprimer b.size):b. icon&&(x.push("icon:"+encodeURI(b.icon)),delete b.icon),b.color&&(x.push("color:"+b.color.replace("#","0x ")), supprimer b.color), b.