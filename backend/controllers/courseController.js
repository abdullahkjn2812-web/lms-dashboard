const Course = require("../models/courseModel");

const createCourse = async (req, res) => {
  try {
    const { title, description, instructor } = req.body;
    if (!title || !description || !instructor) {
      return res.status(400).json({ message: "Required fields are missing" });
    }
    const course = await Course.create({
      title,
      description,
      type,
      price: type === "Free" ? 0 : price,
      CreatedBy: req.user._id,
    });
    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ message: "Server error" });
  }
};
