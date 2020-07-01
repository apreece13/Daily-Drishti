const remoteURL = "http://localhost:8088";

const RegisterManager = {
  getAll() {
    // Refactor this fetch call to ask for animals that match the logged in user's id
    return fetch(`${remoteURL}/users`).then((result) => result.json());
  },
  post(newUser) {
    // refactor this fetch call to make sure that the new animal has the employeeId of the logged in user
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((data) => data.json());
  },
  update(editedUser) {
    // refactor this fetch call as well to make sure that the edited animal retains the logged in user's id
    return fetch(`${remoteURL}/users/${editedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedUser),
    }).then((data) => data.json());
  },
  get(id) {
    return fetch(`${remoteURL}/users/${id}`).then((result) => result.json());
  },
}

export default RegisterManager;