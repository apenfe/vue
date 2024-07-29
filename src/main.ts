import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App)

app.directive('font-size', {

    beforeMount: (el) => {  // el: etiqueta del elemento sobre el que se actua binding: los datos o argumentos que se recieben para ejecutar comportamiento
        el.style.fontSize = "70px";
    }

})

app.directive('custom-size', {

    beforeMount: (el, binding) => {  // el: etiqueta del elemento sobre el que se actua binding: los datos o argumentos que se recieben para ejecutar comportamiento
        el.style.fontSize = binding.value + "px";
    }

})

app.directive('custom-size-argumento', {

    beforeMount: (el, binding) => {  // el: etiqueta del elemento sobre el que se actua binding: los datos o argumentos que se recieben para ejecutar comportamiento
        
        let size = 18

        switch(binding.arg){
        case 'sm':
            size = 10
            break
            case 'md':
                size = 18
                break
            case 'lg':
                size = 25
                break
            case 'xl':
                size = 40
                break
            case 'xxl':
                size = 72
        }

        el.style.fontSize = size + "px";

    }

})

app.directive('custom-font', {

    beforeMount: (el, binding) => {  
        
        let size = 18

        if(binding.modifiers.sm){
            size = 10
        }else if(binding.modifiers.lg){
            size = 25
        }else if(binding.modifiers.xxl){
            size = 72
        }

        el.style.fontsize = size +"px";

        if(binding.modifiers.red){
            el.style.color = 'red';
        }else if(binding.modifiers.blue){
            el.style.color = 'blue';
        }else if(binding.modifiers.green){
            el.style.color = 'green';
        }else{
            el.style.color = 'black';
        }

    }

})

app.mount('#app')
