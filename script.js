document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Скрываем все вкладки
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });

        // Убираем активный класс со всех кнопок
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });

        // Показываем выбранную вкладку
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).style.display = 'block';

        // Добавляем активный класс на нажатую кнопку
        button.classList.add('active');
    });
});
