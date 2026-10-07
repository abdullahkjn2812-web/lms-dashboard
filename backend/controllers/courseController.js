const Course = require("../models/course");

const getpublishedCourses = async (req, res) => {
  try {
    const courses = await Course.find({ status: "Published" }).sort({
      createdAt: -1,
    });
    return res.status(200).json({
      message: "Published courses fetched successfully",
      courses,
    });
  } catch (error) {
    console.error("Error fetching published courses:", error);
    res.status(500).json({ message: "Server error" });
  }
};
const updateCourseStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!["draft", "published"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    course.status = status;
    await course.save();
    res.status(200).json({
      message: `Course ${status} successfully`,
      course,
    });
  } catch (error) {
    console.error("Error updating course status:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getAdminCourses = async (req, res) => {
  try {
    const courses = await Course.find({ createdBy: req.user.id });
    res.status(200).json({ message: "Course Fetched Sucessfully", courses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const createCourse = async (req, res) => {
  try {
    const { title, description, instructor, price, type } = req.body;
    if (!title || !description || !instructor) {
      return res.status(400).json({ message: "Required fields are missing" });
    }
    const course = await Course.create({
      title,
      description,
      type,
      price: type === "Free" ? 0 : price,
      createdBy: req.user.id,
    });
    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createCourse,
  getAdminCourses,
  updateCourseStatus,
  getpublishedCourses,
};
