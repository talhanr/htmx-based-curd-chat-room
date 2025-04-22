// const chatRoomList = document.getElementById("chatRoomList");
// const chatRoomNameInput = document.getElementById("chatRoomName");
// const roomMessage = document.getElementById("roomMessage");
// const loggedInUser = document.getElementById("loggedInUser");
// const chatArea = document.getElementById("chatArea");

// const chatRooms = [];
// let currentUser = null;

// function renderChatRooms() {
//   if (chatRooms.length === 0) {
//     chatRoomList.innerHTML = "<p>No rooms available. Create a new room!</p>";
//     return;
//   }

//   chatRoomList.innerHTML = chatRooms
//     .map(
//       (room) => `
//       <li>
//         ${room.name} (Owner: ${room.owner})
//         ${
//           room.owner === currentUser
//             ? `
//           <button hx-get="/edit-room/${room.name}" type="button" class="btn-edit">Edit</button>
//           <button hx-delete="/delete-room/${room.name}" hx-target="closest li" hx-swap="outerHTML" type="button" class="btn-delete">Delete</button>
//         `
//             : ""
//         }
//         <button class="btn-join" type="button" onclick="joinRoom('${
//           room.name
//         }')">Join</button>
//       </li>
//     `
//     )
//     .join("");
//   htmx.process(chatRoomList);
// }

// // Handle user login
// function handleLogin(event) {
//   const username = event.detail.parameters.username.trim();
//   if (!username) {
//     loggedInUser.innerHTML = "Please enter a valid username.";
//     return;
//   }
//   currentUser = username;
//   loggedInUser.innerHTML = `Logged in as: ${currentUser}`;
//   renderChatRooms(); // Re-render the room list for the new user
// }

// // Handle room creation
// function handleCreateRoom(event) {
//   const roomName = event.detail.parameters.roomName.trim();
//   if (!currentUser) {
//     roomMessage.innerHTML = "Please log in to create a room.";
//     return;
//   }
//   if (!roomName) {
//     roomMessage.innerHTML = "Room name cannot be empty.";
//     return;
//   }
//   const existingRoom = chatRooms.find((room) => room.name === roomName);
//   if (existingRoom) {
//     roomMessage.innerHTML =
//       existingRoom.owner === currentUser
//         ? "This room is already assigned to you!"
//         : "Room already exists.";
//     return;
//   }
//   chatRooms.push({ name: roomName, owner: currentUser });
//   renderChatRooms(); // Re-render the room list
// }

// // Handle room editing
// function handleEditRoom(event) {
//   const roomName = event.detail.path.split("/")[2];
//   const room = chatRooms.find((room) => room.name === roomName);
//   if (room) {
//     chatRoomNameInput.value = room.name;
//   }
// }

// // Handle room deletion
// function handleDeleteRoom(event) {
//   const roomName = event.detail.path.split("/")[2];
//   const roomIndex = chatRooms.findIndex((room) => room.name === roomName);
//   if (roomIndex > -1) {
//     chatRooms.splice(roomIndex, 1);
//     renderChatRooms(); // Re-render the room list
//   }
// }

// // Handle joining a room
// function joinRoom(roomName) {
//   chatArea.innerHTML = `<h3>Chat Room: ${roomName}</h3><p>Welcome to the chat room!</p>`;
// }

// document.addEventListener("htmx:configRequest", (event) => {
//   if (event.detail && event.detail.path) {
//     const url = event.detail.path;
//     event.preventDefault(); // Prevent the actual HTTP request

//     if (url === "/login") {
//       handleLogin(event);
//     } else if (url === "/create-room") {
//       handleCreateRoom(event);
//     } else if (url.startsWith("/edit-room")) {
//       handleEditRoom(event);
//     } else if (url.startsWith("/delete-room")) {
//       handleDeleteRoom(event);
//     }
//   } else {
//     console.error("event.detail or event.detail.path is undefined");
//   }
// });

import {
  handleLogin,
  handleCreateRoom,
  handleEditRoom,
  handleDeleteRoom,
  handleJoinRoom,
} from "./event.js";

document.addEventListener("htmx:configRequest", (event) => {
  if (event.detail && event.detail.path) {
    const url = event.detail.path;
    event.preventDefault();

    if (url === "/login") {
      handleLogin(event);
    } else if (url === "/create-room") {
      handleCreateRoom(event);
    } else if (url.startsWith("/edit-room")) {
      handleEditRoom(event);
    } else if (url.startsWith("/delete-room")) {
      handleDeleteRoom(event);
    } else if (url.startsWith("/join-room")) {
      handleJoinRoom(event);
    }
  } else {
    console.error("event.detail or event.detail.path is undefined");
  }
});
