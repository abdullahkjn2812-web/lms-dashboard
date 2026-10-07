const express = require("express");
const authMidleware = require("../midleware/authMidleware");
const allowRoles = require("../midleware/roleMidleware");
const {
  createCourse,
  getAdminCourses,
  updateCourseStatus,
  getpublishedCourses,
} = require("../controllers/courseController");

const router = express.Router();
router.post("/", authMidleware, allowRoles("admin"), createCourse);
router.get("/", authMidleware, allowRoles("admin"), getAdminCourses);
router.put("/:id", authMidleware, allowRoles("admin"), updateCourseStatus);
router.get("/published", getpublishedCourses);
module.exports = router;
