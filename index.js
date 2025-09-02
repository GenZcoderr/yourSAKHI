function predictPeriod() {
  const lastPeriod = document.getElementById("lastPeriod").value;
  const result = document.getElementById("result");

  if (!lastPeriod) {
    result.innerText = "Please select your last period date.";
    return;
  }

  // Simple 28-day cycle prediction
  const lastDate = new Date(lastPeriod);
  const nextDate = new Date(lastDate);
  nextDate.setDate(lastDate.getDate() + 28);

  result.innerText = "Your next period is likely around: " + nextDate.toDateString();
}

// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for reaching out! We’ll get back to you soon.");
  this.reset();
});
