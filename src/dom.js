import { chatRooms, currentUser } from "./state.js";

const chatRoomList = document.getElementById("chatRoomList");
const chatRoomNameInput = document.getElementById("chatRoomName");
const roomMessage = document.getElementById("roomMessage");
const loggedInUser = document.getElementById("loggedInUser");
const chatArea = document.getElementById("chatArea");

export function renderChatRooms() {
  const chatRoomList = document.getElementById("chatRoomList");

  if (!chatRoomList) {
    console.error("chatRoomList element not found");
    return;
  }

  if (chatRooms.length === 0) {
    chatRoomList.innerHTML = "<p>No rooms available. Create a new room!</p>";
    return;
  }

  chatRoomList.innerHTML = chatRooms
    .map(
      (room) => `
      <li>
        ${room.name} (Owner: ${room.owner})
        ${
          room.owner === currentUser
            ? `
          <button hx-get="/edit-room/${room.name}" type="button" class="btn-edit">Edit</button>
          <button hx-delete="/delete-room/${room.name}" hx-target="closest li" hx-swap="outerHTML" type="button" class="btn-delete">Delete</button>
        `
            : ""
        }
        <button class="btn-join" hx-post="/join-room/${
          room.name
        }" type="button">Join</button>
      </li>
    `
    )
    .join("");
  htmx.process(chatRoomList);
}

export function updateLoggedInUser(username) {
  loggedInUser.innerHTML = `Logged in as: ${username}`;
}

export function updateChatArea(roomName) {
  chatArea.innerHTML = `<h3>Chat Room: ${roomName}</h3><p>Welcome to the chat room!</p>`;
}

export function showRoomMessage(message) {
  roomMessage.innerHTML = message;
}

export function setRoomNameInput(value) {
  chatRoomNameInput.value = value;
}
