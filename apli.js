function checkAnswers() {
    const answers = {
        num1: ['D'],
        num2: ['B'],      
        num3: ['C'], 
        num4: ['A'],           
        num5: ['D'], 
        num6: ['A'],            
        num7: ['B'], 
        num8: ['C'],
        num9: ['B'],      
        num10: ['A'] 
    };

    Object.keys(answers).forEach((question) => {
        const selectedOptions = [...document.querySelectorAll(`input[name="${question}"]:checked`)]
            .map(checkbox => checkbox.value);
        
        const isCorrect = selectedOptions.sort().toString() === answers[question].sort().toString();
        
        const feedback = document.querySelector(`small.Answer:nth-of-type(${Array.from(Object.keys(answers)).indexOf(question) + 1})`);
        if (isCorrect) {
            feedback.textContent = "Correct!";
            feedback.classList.remove('error');
            feedback.classList.add('correct');
        } else {
            feedback.textContent = "Incorrect. Correct answers are: " + answers[question].join(', ');
            feedback.classList.remove('correct');
            feedback.classList.add('error');
        }
    });
}


/*
1. use select button 

*/