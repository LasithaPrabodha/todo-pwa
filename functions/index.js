const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

// Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase
exports.pushNotification = functions.firestore
  .document("/todos/{documentId}")
  .onUpdate((change, context) => {
    console.log("Push notification event triggered");
    const newValue = change.after.data();

    // Create a notification
    const payload = {
      notification: {
        title: "To do",
        body: newValue.description,
      },
    };

    return admin
      .firestore()
      .doc("/users/lasitha")
      .get()
      .then((doc) => {
        const data = doc.data();

        const token = data.token;

        return admin.messaging().sendToDevice(token, payload);
      })
      .catch((err) => {
        console.error(err.message);
      });
  });
