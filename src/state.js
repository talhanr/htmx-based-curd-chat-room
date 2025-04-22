export const chatRooms = [];
export let currentUser = null;

export function setCurrentUser(username) {
  currentUser = username;
}

export function addRoom(roomName, owner) {
  chatRooms.push({ name: roomName, owner });
}

export function findRoomByName(roomName) {
  return chatRooms.find((room) => room.name === roomName);
}

export function deleteRoomByName(roomName) {
  const roomIndex = chatRooms.findIndex((room) => room.name === roomName);
  if (roomIndex > -1) {
    chatRooms.splice(roomIndex, 1);
  }
}
