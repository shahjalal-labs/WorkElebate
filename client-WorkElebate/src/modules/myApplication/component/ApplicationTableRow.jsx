const ApplicationTableRow = ({ application, index }) => {
  console.log(application, "ApplicationTableRow.jsx", 2);

  const { company_logo, title, company } = application;
  return (
    <tr>
      <td>{index}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{company}</div>
          </div>
        </div>
      </td>
      <td>
        Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default ApplicationTableRow;
