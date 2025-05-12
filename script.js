// Button Click Event
document.getElementById('changeTextButton').addEventListener('click', function() {
  this.textContent = 'You clicked me!';
});

// Hover Effect Event (Already done with CSS but adding JS for bonus)
document.getElementById('hoverDiv').addEventListener('mouseover', function() {
  this.style.backgroundColor = '#4CAF50';
});

document.getElementById('hoverDiv').addEventListener('mouseout', function() {
  this.style.backgroundColor = '#f0f0f0';
});

// Keypress Event Detection
document.getElementById('keypressInput').addEventListener('keypress', function(event) {
  console.log(`Key pressed: ${event.key}`);
});

// Bonus: Double-click to reset text of button
document.getElementById('changeTextButton').addEventListener('dblclick', function() {
  this.textContent = 'Click Me to Change Text';
});

// Bonus: Long press detection
let pressTimer;
document.getElementById('hoverDiv').addEventListener('mousedown', function() {
  pressTimer = setTimeout(() => alert('Long press detected!'), 1000);
});

document.getElementById('hoverDiv').addEventListener('mouseup', function() {
  clearTimeout(pressTimer);
});
