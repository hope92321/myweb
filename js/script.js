/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    // 統一使用你在 HTML 裡設定的 ID
    const darkModeBtn = document.getElementById('darkModeToggle');
    const body = document.body;

    // 1. 檢查記憶體
    if (localStorage.getItem('theme') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // 2. 設定點擊事件
    if (darkModeBtn) {
        darkModeBtn.onclick = function() {
            body.classList.toggle('dark-mode');
            
            // 同步記憶
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'enabled');
            } else {
                localStorage.setItem('theme', 'disabled');
            }
        };
    }
});