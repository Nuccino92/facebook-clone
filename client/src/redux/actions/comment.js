import { addCommentRequest } from "../../api/comment";

export const addComment = (data) => async (dispatch) => {
  try {
    await addCommentRequest(data);
  } catch (err) {
    console.log(err);
  }
};
