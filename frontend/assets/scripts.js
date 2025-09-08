// Theme switch
document.getElementById('themeSelect').addEventListener('change', function(){
  document.body.className = this.value;
});

// Language switch (mock)
document.getElementById('langSelect').addEventListener('change', function(){
  alert('Language switched to ' + this.value + ' (mock)');
});

// Notifications (mock)
document.getElementById('notifBtn').addEventListener('click', function(){
  alert('You have 3 notifications (mock)');
});
