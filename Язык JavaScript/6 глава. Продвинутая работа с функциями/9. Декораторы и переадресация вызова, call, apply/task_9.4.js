/* Тормозящий (throttling) декоратор
важность: 5
Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.
Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце. */

function throttle(f, ms) {

    let isThrottled = false;
    let savedArgs;
    let savedThis;
  
    function wrapper() {
  
        if (isThrottled) { 
            savedArgs = arguments;
            savedThis = this;
            return;
        };
    
        f.apply(this, arguments); 
    
        isThrottled = true;
    
        setTimeout(function() {
            isThrottled = false; 
            
            if (savedArgs) {
            wrapper.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;
            };
        }, ms);
    };
  
    return wrapper;
};