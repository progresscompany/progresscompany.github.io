'use strict'

//データ取得

    const url = 'https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628';
    const appId = '1065666727137661273';

    $.ajax({
        url: url,
        dataType: 'json',
        data:{
            applicationId: appId,
            //age: 20,
            //period: 'realtime'
        }
    })
    .done(function(data){
        console.log(data);
        
        data.Items.forEach(function(forecast, index){
            const img1 = forecast.Item.mediumImageUrls[0].imageUrl;
            const img2 = forecast.Item.mediumImageUrls[1].imageUrl;
            const img3 = forecast.Item.mediumImageUrls[2].imageUrl;
            const name = forecast.Item.itemName;
            const price = forecast.Item.itemPrice;
            const order = forecast.Item.rank;
            const reviewAverage = forecast.Item.reviewAverage;
            const link = forecast.Item.itemUrl;

        if(index === 0){

        const No1_1 = `
        <img src="${img1}">`;
        $('#No1_1').html(No1_1);

        const No1_2 = `
        <img src="${img2}">`;
        $('#No1_2').html(No1_2);

        const No1_3 = `
        <img src="${img3}">`;
        $('#No1_3').html(No1_3);

        const No1_name = `
        <p>${name}</name>`;
        $('#No1_name').html(No1_name);

        const No1_price = `
        <p>価格:${price}円</name>`;
        $('#No1_price').html(No1_price);

        const No1_order = `
        <p>順位:${order}位</name>`;
        $('#No1_order').html(No1_order);

        const No1_reviewAverage = `
        <p>レビュー平均:${reviewAverage}/5.00</name>`;
        $('#No1_reviewAverage').html(No1_reviewAverage);
        }else if(index === 1){

            const No2_1 = `
            <img src="${img1}">`;
            $('#No2_1').html(No2_1);
    
            const No2_2 = `
            <img src="${img2}">`;
            $('#No2_2').html(No2_2);
    
            const No2_3 = `
            <img src="${img3}">`;
            $('#No2_3').html(No2_3);
    
            const No2_name = `
            <p>${name}</name>`;
            $('#No2_name').html(No2_name);
    
            const No2_price = `
            <p>価格:${price}円</name>`;
            $('#No2_price').html(No2_price);
    
            const No2_order = `
            <p>順位:${order}位</name>`;
            $('#No2_order').html(No2_order);
    
            const No2_reviewAverage = `
            <p>レビュー平均:${reviewAverage}/5.00</name>`;
            $('#No2_reviewAverage').html(No2_reviewAverage);
        }else if(index === 2){

                const No3_1 = `
                <img src="${img1}">`;
                $('#No3_1').html(No3_1);
        
                const No3_2 = `
                <img src="${img2}">`;
                $('#No3_2').html(No3_2);
        
                const No3_3 = `
                <img src="${img3}">`;
                $('#No3_3').html(No3_3);
        
                const No3_name = `
                <p>${name}</name>`;
                $('#No3_name').html(No3_name);
        
                const No3_price = `
                <p>価格:${price}円</name>`;
                $('#No3_price').html(No3_price);
        
                const No3_order = `
                <p>順位:${order}位</name>`;
                $('#No3_order').html(No3_order);
        
                const No3_reviewAverage = `
                <p>レビュー平均:${reviewAverage}/5.00</name>`;
                $('#No3_reviewAverage').html(No3_reviewAverage);
        }else if(index === 3){

            const No4_1 = `
            <img src="${img1}">`;
            $('#No4_1').html(No4_1);
    
            const No4_2 = `
            <img src="${img2}">`;
            $('#No4_2').html(No4_2);
    
            const No4_name = `
            <p>${name}</name>`;
            $('#No4_name').html(No4_name);
    
            const No4_price = `
            <p>価格:${price}円</name>`;
            $('#No4_price').html(No4_price);
    
            const No4_order = `
            <p>順位:${order}位</name>`;
            $('#No4_order').html(No4_order);
    
            const No4_reviewAverage = `
            <p>レビュー平均:${reviewAverage}/5.00</name>`;
            $('#No4_reviewAverage').html(No4_reviewAverage);
        }
        })

    })
    .fail(function(){
        console.log('$.ajax failed!');
    })
