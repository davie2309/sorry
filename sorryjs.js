document.getElementById('forgive').addEventListener('click', function() {
    alert('Thank you for forgiving me! I will always make it up to you.');
    document.querySelector('.container').style.display = 'none';
    document.body.innerHTML += '<h2 style="text-align: center; color: white;">You are the best, Kuku! ❤️</h2>';
});

document.getElementById('notForgive').addEventListener('click', function() {
    alert('I understand. I will keep trying to make things right.');
});
