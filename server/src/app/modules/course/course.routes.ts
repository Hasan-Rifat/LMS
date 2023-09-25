import express from "express";

const router = express.Router();

// admin
router.post("/crete-course");
router.patch("/update-course/:id");

// user
router.get(
  "/get-course/:id"
  /* 
don't show 
- courseData.video 
- courseData.suggestion
- courseData.question
- courseData.links
*/
);

router.post(
  "/get-course-content/:id"
  /* 
    after user purchased course 
*/
);

router.get(
  "/get-all-courses"

  /* 
get all course without purchased

*/
);

router.post("/add-question/" /* user add a questions */);
router.post("/add-answer/:id" /* admin add a answer */);

router.post("/add-review/" /* after buy a course then user can review */);
