// Dark/Light Mode Toggle
document.getElementById('darkModeToggle')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Notifications Example
const notifCount = document.getElementById('notifCount');
if(notifCount) notifCount.innerText = 3;
