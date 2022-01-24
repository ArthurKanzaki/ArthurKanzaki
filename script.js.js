function myScopo(){
    const recarga = document.location.reload(true);
    const data = new Date();
    const information = document.querySelector('.hour-date');
    information.innerHTML = showInfo(data);
    
    
    //Date.now()
    
    
    
    // Segunda-feira, 7 de outubro de 2019 22:52
    
    function showInfo(data){
        const dayweek = formatWeek(data.getDay());
        const day = showZero(data.getDate());
        const month = formatMonth(data.getMonth());
        const year = data.getFullYear();
        const hour = showZero(data.getHours());
        const min = showZero(data.getMinutes());
        return `${dayweek}, ${day} de ${month} de ${year} ${hour}:${min}:${showZero(data.getSeconds())}`

        function showZero(num){
            if(num >= 10){return num;}
            else{return num = `0${num}`}
        }


    }

    function formatMonth(data){
    const month = data;
    console.log(month);

    if (month === 0){return 'janeiro'} 
    else if(month === 1){return 'fevereiro';}
    else if(month === 2){return 'março';} 
    else if(month === 3){return 'abril';} 
    else if(month === 4){return 'maio';}
    else if(month === 5){return 'junho';} 
    else if(month === 6){return 'julho';}
    else if(month === 7){return 'agosto';}
    else if(month === 8){return 'setembro';}
    else if(month === 9){return 'outubro';}
    else if(month === 10){return 'novembro';} 
    else if(month === 11){return 'dezembro';}
    
    }

    function formatWeek(data){
    const weekday = data
    console.log(weekday);

    if (weekday === 0){return `Domingo`;}
    else if(weekday === 1){return `Segunda-feira`;}
    else if(weekday === 2){return `Terça-feira`;}
    else if(weekday === 3){return `Quarta-feira`;}
    else if(weekday === 4){return `Quinta-feira`;}
    else if(weekday === 5){return `Sexta-feira`;}
    else if(weekday === 6){return `Sábado`;}
    
    }

}

myScopo();

