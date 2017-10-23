export function createCourse(course) {
    console.log("You created a course: ", course);
    return {
        type: 'CREATE_COURSE',
        course: course
    }
};


