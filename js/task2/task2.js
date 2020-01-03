var randomNumber = Math.floor(Math.random() * 100);
function GassNumber(attempts,a,b)
{
    var user_version=parseInt(prompt('Введите номер'))
    user_version=validation(user_version);
    if(user_version==randomNumber)
    {
        console.log("Вы угадали с "+attempts+"  попытки");
        
    }
    else
    {
        attempts++;
        if(randomNumber<user_version)
        {
            b = user_version;
        }
        else
        {
            a = user_version;
        }
        console.log("Ваш интервал   "+a+"  "+b);
        return GassNumber(attempts,a,b);
    }

    
}
function validation(number)
{
    if(isNaN(number) || number == undefined)
    {
        number = parseInt(prompt('Введите номер'))
    }
    else
    {
        return number;
    }
}
GassNumber(0,0,100)