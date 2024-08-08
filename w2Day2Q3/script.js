document.getElementById('addReminderBtn').addEventListener('click', addReminder);

let reminders = [];

function addReminder() {
    const text = document.getElementById('reminderText').value;
    const time = new Date(document.getElementById('reminderTime').value);

    if (text === '' || isNaN(time)) {
        alert('Please enter valid reminder details and time.');
        return;
    }

    const reminderId = setTimeout(() => {
        alert(`Reminder: ${text}`);
        removeReminder(reminder.id);
    }, time - new Date());

    const reminder = {
        id: reminderId,
        text: text,
        time: time
    };

    reminders.push(reminder);
    displayReminders();
    clearInputs();
}

function clearInputs() {
    document.getElementById('reminderText').value = '';
    document.getElementById('reminderTime').value = '';
}

function displayReminders() {
    const reminderList = document.getElementById('reminderList');
    reminderList.innerHTML = '';

    reminders.forEach(reminder => {
        const li = document.createElement('li');
        li.className = 'reminder-item';
        li.innerHTML = `
            ${reminder.text} - ${reminder.time.toLocaleString()}
            <div>
                <button onclick="editReminder(${reminder.id})">Edit</button>
                <button onclick="deleteReminder(${reminder.id})">Delete</button>
            </div>
        `;
        reminderList.appendChild(li);
    });
}

function editReminder(id) {
    const reminder = reminders.find(r => r.id === id);
    document.getElementById('reminderText').value = reminder.text;
    document.getElementById('reminderTime').value = reminder.time.toISOString().slice(0, 16);
    deleteReminder(id);
}

function deleteReminder(id) {
    clearTimeout(id);
    reminders = reminders.filter(reminder => reminder.id !== id);
    displayReminders();
}

function removeReminder(id) {
    reminders = reminders.filter(reminder => reminder.id !== id);
    displayReminders();
}
