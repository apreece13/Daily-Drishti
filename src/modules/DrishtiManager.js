const remoteURL = "http://localhost:8088";

const DrishtiManager = {
  get(id) {
    return fetch(`${remoteURL}/dailyDrishti/${id}`).then((result) => result.json());
  },
  getAll() {
    // Refactor this fetch call to ask for animals that match the logged in user's id
    return fetch(`${remoteURL}/dailyDrishti`).then((result) => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/dailyDrishti/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newDailyDrishti) {
    // refactor this fetch call to make sure that the new animal has the employeeId of the logged in user
    return fetch(`${remoteURL}/dailyDrishti`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDailyDrishti),
    }).then((data) => data.json());
  },
  update(editedDailyDrishti) {
    // refactor this fetch call as well to make sure that the edited animal retains the logged in user's id
    return fetch(`${remoteURL}/newsArticles/${editedDailyDrishti.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedDailyDrishti),
    }).then((data) => data.json());
  },
};

export default DrishtiManager;