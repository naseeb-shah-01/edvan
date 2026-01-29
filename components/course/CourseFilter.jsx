export default function CourseFilter() {
  return (
    <div className="mb-4">
      <label className="mr-4">Filter by Category:</label>
      <select className="border p-2">
        <option>All</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Database</option>
      </select>
    </div>
  );
}
