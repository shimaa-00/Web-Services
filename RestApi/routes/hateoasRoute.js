import express from "express";
const hateoasRoute = express.Router();
router.get("/", (req, res, next) => {
  res.status(201).json({
    "Get all users ": "http://localhost:8888/api/v1/users/",
    "Get specific user ": "http://localhost:8888/api/v1/users/{:id}",
    "Get all Articles ": "http://localhost:8888/api/v1/articles/",
    "Get specific Article ": "http://localhost:8888/api/v1/articles/{:id}",
    "Get all Comments ": "http://localhost:8888/api/v1/comments/{:user_id}",
    "Get specific Comment ": "http://localhost:8888/api/v1/comments/find/{:id}",
  });
});

export default hateoasRoute;
