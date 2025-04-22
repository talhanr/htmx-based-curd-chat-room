import {
  setCurrentUser,
  addRoom,
  findRoomByName,
  deleteRoomByName,
  currentUser,
} from "./state.js";
import {
  renderChatRooms,
  updateLoggedInUser,
  updateChatArea,
  showRoomMessage,
  setRoomNameInput,
} from "./dom.js";

export function handleLogin(event) {
  const username = event.detail.parameters.username.trim();
  if (!username) {
    showRoomMessage("Please enter a valid username.");
    return;
  }
  setCurrentUser(username);
  updateLoggedInUser(username);
  renderChatRooms();
}

export function handleCreateRoom(event) {
  const roomName = event.detail.parameters.roomName.trim();
  if (!currentUser) {
    showRoomMessage("Please log in to create a room.");
    return;
  }
  if (!roomName) {
    showRoomMessage("Room name cannot be empty.");
    return;
  }
  const existingRoom = findRoomByName(roomName);
  if (existingRoom) {
    showRoomMessage(
      existingRoom.owner === currentUser
        ? "This room is already assigned to you!"
        : "Room already exists."
    );
    return;
  }
  addRoom(roomName, currentUser);
  renderChatRooms();
}

export function handleEditRoom(event) {
  const roomName = event.detail.path.split("/")[2];
  const room = findRoomByName(roomName);
  if (room) {
    setRoomNameInput(room.name);
  }
}

export function handleDeleteRoom(event) {
  const roomName = event.detail.path.split("/")[2];
  deleteRoomByName(roomName);
  renderChatRooms();
}

export function handleJoinRoom(event) {
  const roomName = event.detail.path.split("/")[2];
  updateChatArea(roomName);
}
