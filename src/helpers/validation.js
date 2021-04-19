export function isEmpty(val){
    if (!val) val='';
    val = val.trim();
    return val.length === 0; // return true/false
}

export function validateEmailOrURL(value,type) {
    var re = '';
    if ( type == "email"){
        re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }else if( type == "url"){
        re = /([a-z]+\:\/+)([^\/\s]*)([a-z0-9\-@\^=%&;\/~\+]*)[\?]?([^ \#]*)#?([^ \#]*)/ig;
    }else{

    }
    return re.test(String(value).toLowerCase());
}