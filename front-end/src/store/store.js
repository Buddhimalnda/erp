import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../features/auth/userSlice";
// import postReducer from "../features/posts/postSlice";
// import statusReducer from "../features/status/statusSlice";
import testReducer from "./reducer/testReducer";

// import { firebaseReducer } from "react-redux-firebase";

// import { firestoreReducer } from "redux-firestore";

export default configureStore({
  reducer: {
    // user: userReducer,
    // posts: postReducer,
    // firebase: firebaseReducer,
    // firestore: firestoreReducer,
    // status: statusReducer,
    test: testReducer,
  },
});
