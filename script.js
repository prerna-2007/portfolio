// === OPEN WINDOW ON ICON CLICK ===
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const windowId = icon.dataset.window;
    const win = document.getElementById(windowId);
    win.style.display = 'flex';
    bringToFront(win);
  });
});

// === CLOSE & MINIMIZE BUTTONS ===
document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', e => {
    e.target.closest('.window').style.display = 'none';
  });
});

document.querySelectorAll('.minimize').forEach(btn => {
  btn.addEventListener('click', e => {
    e.target.closest('.window').style.display = 'none';
  });
});

// === DRAGGABLE WINDOWS ===
let zIndex = 10;
function bringToFront(win) {
  zIndex++;
  win.style.zIndex = zIndex;
}

document.querySelectorAll('.window').forEach(win => {
  const header = win.querySelector('.window-header');
  let isDragging = false;
  let offsetX, offsetY;

  header.addEventListener('mousedown', e => {
    isDragging = true;
    bringToFront(win);
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  });

  document.addEventListener('mousemove', e => {
    if (isDragging) {
      win.style.left = e.clientX - offsetX + 'px';
      win.style.top = e.clientY - offsetY + 'px';
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
});

// === DARK MODE TOGGLE ===
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// === FORM VALIDATION ===
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email.');
    return;
  }

  alert('Message sent successfully!');
  e.target.reset();
});
// === MAXIMIZE BUTTON ===
document.querySelectorAll('.maximize').forEach(btn => {
  btn.addEventListener('click', e => {
    const win = e.target.closest('.window');
    win.classList.toggle('maximized');
    bringToFront(win);
  });
});
