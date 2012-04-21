// orb.js tips 2012.04.19
// How to calc the position of satellites
// https://github.com/lizard-isana/orb.js

// 人工衛星の位置を計算する方法
// 衛星の位置計算に必要なのは core.js と satellite.js の二つ.。
// https://github.com/lizard-isana/orb.js/blob/master/core.js
// https://github.com/lizard-isana/orb.js/blob/master/satellite.js

// 軌道要素をこういうオブジェクト形式で作っておいて
var tle = {
  "first_line":  "1 25544U 98067A   11318.51274148  .00016717  00000-0  10270-3 0  9003",
  "second_line": "2 25544  51.6365 124.1685 0021724  56.2169 304.1052 15.60123650 24381"
}

// 軌道要素でSatellite オブジェクトを初期化
var satellite = new Orb.Satellite(tle);

// jsのDateからOrb.jsのTimeオブジェクトを作って
var date = new Date();
var time = new Orb.Time(date);

// 地理座標系(geographic coodinates)で位置を計算
var geo = satellite.position.geographic(time);

// これで
geo = {
  longitude:[経度],
  latitude:[緯度],
  altitude[高度km]
}
// というオブジェクトが返ります。

// 一度作ったSatelliteオブジェクトは当然使い回せます。
var date2 = new Date();
var time2 = new Orb.Time(date2);
var geo2 = satellite.position.geographic(time2);

// 地心直交座標(rectangular coordinates)が欲しいなら
var rect = satellite.position.rectangular(time);
rect = {
  x:[x km], //経緯度0度方向
  y:[y km], //東経90度方向
  z:[z km]　//北極方向
}

// Have fun!
