import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:7000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);
  const handleDelete = (id) => {
    fetch(`http://localhost:7000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire("Removed!", "The service removed Successfully", "success");
        }
        const remaining = bookings.filter((booking) => booking._id !== id);
        setBookings(remaining);
      });
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:7000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Updated", "Service updated successfully", "success");
        }
        const remaining = bookings.filter((booking) => booking._id !== id);
        const updated = bookings.find((booking) => booking._id === id);
        updated.status = "confirm";
        const newBookings = [updated, ...remaining];
        setBookings(newBookings);
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-lg">
            <tr>
              <th></th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((item) => (
              <tr key={item._id}>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-sm btn-circle btn-outline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask rounded-xl w-28 h-28">
                        <img src={item.img} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.service}</div>
                      <div className="text-sm opacity-50">
                        {item.customerName}
                      </div>
                      <div className="text-sm opacity-50">{item.email}</div>
                    </div>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>{item.date}</td>
                <th>
                  {item.status === "confirm" ? (
                    <button className="btn btn-success btn-sm cursor-default">
                      Confirmed
                    </button>
                  ) : (
                    <button
                      onClick={() => handleConfirm(item._id)}
                      className="btn btn-info btn-sm"
                    >
                     Please Confirm
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
