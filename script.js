const notificationsNumber = document.querySelector(".notifications-number");
const postsUnread = document.querySelectorAll(".unread");
const redDots = document.querySelectorAll(".unread-icon");

const buttonMarkAsRead = document.querySelector(".button-mark-all");

buttonMarkAsRead.addEventListener("click", markAsRead);

function markAsRead() {
	notificationsNumber.textContent = 0;
	postsUnread.forEach((post) => post.classList.remove("unread"));
	redDots.forEach((dot) => (dot.style.display = "none"));
}
