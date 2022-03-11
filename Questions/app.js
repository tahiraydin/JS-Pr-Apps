const questions = document.querySelector('.question');

questions.forEach(function(question) {
    const btn = question.querySelector('.question_btn');
    // console.log(btn);

    btn.addEventListener('click', function() {

        question.forEach(function(item) {
            if(item !== question) {
                item.classList.remove('show-text');
            }
            
});

        question.classList.toggle('show-text');
    });
});