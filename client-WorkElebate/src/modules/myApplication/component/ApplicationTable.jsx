import ApplicationTableRow from "./ApplicationTableRow";

const ApplicationTable = ({ applications }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {applications.map((application, idx) => (
            <ApplicationTableRow
              application={application}
              key={idx}
              index={idx + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTable;
