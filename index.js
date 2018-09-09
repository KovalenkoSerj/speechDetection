var recognition = new webkitSpeechRecognition();
 recognition.lang = 'ru-RU';


var p = document.createElement('p'),
    words = document.querySelector('.words');
        words.appendChild(p);

        recognition.addEventListener('result',function(e){
            
            p.textContent = Array.from(e.results).map(result => result[0]).map(result=> result.transcript).join('');

        if(e.results[0].isFinal) {
            p = document.createElement('p');
            words.appendChild(p);
        }
        });
recognition.addEventListener('end',recognition.start);

        recognition.start();
