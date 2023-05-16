const { response } = require("express");
const { ObjectId, MongoDBNamespace } = require("mongodb")

const postCourse = async(req, res) => {
    //Create body to hold data
    const newCourse = {
      courseTitle: courseTitle,
      courseId: courseId,
      instructor: instructor,
      classMax: classMax,
      currentEnrollment: currentEnrollment,
      startDate: startDate,
      endDate: endDate,
    };

    try {
      const response = await mongodb 
        .getDb() 
        .db() 
        .collection('courses') 
        .insertOne(newCourse);
      if (response.acknowledged) {
        console.log(response.insertedId);
        res.status(201).json(response);
      }
      } catch (error) {
      res 
        .status(500) 
        .json(response.error || "An error occured. Please try again");
    }
};


// function to update a course from the database
const putCourse = async(req,res) => {
    if (ObjectId.isValid(req.params.id)) {
        const courseId = new ObjectId(req.params.id);

        const updateData = {
            courseTitle: req.body.courseTitle,
            coourseId: req.body.courseId,
            instructor: req.body.instructor,
            classMax: req.body.classMax,
            currentEnrollment: req.body.currentEnrollment,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
        };

        const response = await Mongodb 
        .getDb()
        .db()
        .collection('courses')
        .replaceOne({ _id: courseId }, updateData);
      if (response. modifiedCount > 0) {
        res.status(204).json(response);
      } else {
        res 
          .status(500)
          .json(response.error || "An error occured. Please try again.");
        }
   } else {
     res.status(400).json("Invalid ID entered. Please try again.")
   }
};

// function to delete course from database
const deleteCourse = async (req,res) => {
    if (ObjectId.isValid(req.params.id)) {
        const courseId = new ObjectId(req.params.id);
        const response = await mongodb 
           .getDb() 
           .db() 
           .collection('courses') 
           .deleteOne({ id: courseId });
        if (response. modifiedCount > 0) {
        res.status(204).json(response);
        } else {
        res 
            .status(500)
            .json(response.error || "An error occured. Please try again.");
        }
    } else {
        res.status(400).json("Invalid ID entered. Please try again.")
    }
};

module.exports {
    postCourse,
    putCourse,
    deleteCourse
}