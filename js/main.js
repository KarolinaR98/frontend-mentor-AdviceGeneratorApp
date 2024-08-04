$(function(){

    const adviceNumber = $('#advice-number');
    const advice = $('#advice');
    const diceButton = $('#dice-btn');


    const getRandomAdvice = () => {
        $.getJSON('https://api.adviceslip.com/advice?t=' + Math.random())
        .done(function(data){
            adviceNumber.text('Advice #' + data.slip.id);
            advice.text('"' + data.slip.advice + '"');
        })
        .fail(function(error){
            console.error(error);
        })

    }

    getRandomAdvice();
    diceButton.on('click', getRandomAdvice);
});