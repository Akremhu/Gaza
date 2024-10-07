document.getElementById('more-resistance').addEventListener('click', function() {
    alert('المزيد من المعلومات حول المقاومة الفلسطينية سيتم إضافتها قريباً.');
});

document.getElementById('latest-events').addEventListener('click', function() {
    document.getElementById('events-popup').style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('events-popup').style.display = 'none';
});
