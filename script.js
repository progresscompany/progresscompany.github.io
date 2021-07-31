'use strict'
    
function success(pos){
    ajaxRequest(pos.coords.latitude, pos.coords.longitude);
}
function fail(error){
    alert('位置情報の取得に失敗しました。エラーコード：' + error.code);
}

navigator.geolocation.getCurrentPosition(success, fail);

//UTCをミリ秒に
function utcTOJSTime(utctime){
    return utctime * 1000;
}



//データ取得
function ajaxRequest(lat, long){
    const url = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/';
    const appId = '0af33bed11144401';

    $.ajax({
        //Access-Control-Allow-Origin: url;
        url: url,
        dataType: 'json',
        data:{
            key: appId,
            lat: lat,
            lng: long,
            format: 'json',
            range: '1'
        }
    })
    .done(function(data){
        data.addHeader("Access-Control-Allow-Origin", "*");
        console.log(data);
    
    })
    .fail(function(){
        console.log('$.ajax failed!');
    })
}