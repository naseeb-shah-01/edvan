import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-xl font-bold">{course.title}</h3>
      <p>{course.description}</p>
      <p className="font-semibold">₹{course.price}</p>
      <Link to={`/courses/${course.id}`} className="text-blue-500 mt-2 inline-block">
        View More
      </Link>
    </div>
  );
}
