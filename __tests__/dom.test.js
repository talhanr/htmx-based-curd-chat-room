import "@testing-library/jest-dom";
import { renderChatRooms } from "../src/dom.js";
import { chatRooms, setCurrentUser } from "../src/state.js";

global.htmx = {
  process: jest.fn(), // Mock the `process` method
};

describe("renderChatRooms", () => {
  beforeEach(() => {
    // Mock the DOM
    document.body.innerHTML = `
      <ul id="chatRoomList"></ul>
      <div id="roomMessage"></div>
      <div id="loggedInUser"></div>
      <div id="chatArea"></div>
    `;

    // Reset state
    chatRooms.length = 0;
    setCurrentUser(null);
  });

  test("renders a message when there are no rooms", () => {
    renderChatRooms();
    const chatRoomList = document.getElementById("chatRoomList");

    expect(chatRoomList).not.toBeNull();
    expect(chatRoomList).toHaveTextContent(
      "No rooms available. Create a new room!"
    );
  });

  test("renders rooms with edit and delete buttons for the current user", () => {
    chatRooms.push({ name: "Room1", owner: "User1" });
    setCurrentUser("User1");

    renderChatRooms();

    const chatRoomList = document.getElementById("chatRoomList");
    expect(chatRoomList).toHaveTextContent("Room1 (Owner: User1)");
    expect(chatRoomList).toHaveTextContent("Edit");
    expect(chatRoomList).toHaveTextContent("Delete");
    expect(chatRoomList).toHaveTextContent("Join");

    // Verify that htmx.process was called
    expect(htmx.process).toHaveBeenCalledWith(chatRoomList);
  });

  test("renders rooms without edit and delete buttons for other users", () => {
    chatRooms.push({ name: "Room1", owner: "User1" });
    setCurrentUser("User2");

    renderChatRooms();

    const chatRoomList = document.getElementById("chatRoomList");
    const chatRoomItem = chatRoomList.querySelector("li");

    // Check the content of the <li> element
    expect(chatRoomItem).toHaveTextContent("Room1 (Owner: User1)");
    expect(chatRoomItem).toHaveTextContent("Join");

    // Ensure there are no edit or delete buttons
    expect(chatRoomItem).not.toHaveTextContent("Edit");
    expect(chatRoomItem).not.toHaveTextContent("Delete");
  });
});
