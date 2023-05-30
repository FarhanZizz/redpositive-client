import React from "react"
import TableRow from "./TableRow"
import { useQuery } from "react-query"
import { toast } from "react-hot-toast"

const Table = () => {
  const { data = [], refetch } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/get-data`)
      const data = await res.json()
      return data
    },
  })

  console.log(data)

  const handleAddData = async (event) => {
    event.preventDefault()

    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const phone = form.phone.value
    const hobbies = form.hobbies.value

    const modal = document.getElementById("add-data")

    const newData = { name, email, phone, hobbies }

    console.log(newData)

    try {
      const response = await fetch("http://localhost:5000/add-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      })

      const data = await response.json()

      if (response.ok && data.acknowledged) {
        refetch()
        form.reset()
        toast.success("Data Successfully added")
        modal.checked = false
      } else {
        throw new Error(data.message || "Failed to add data")
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="rounded-md bg-white p-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-bold">List of Data</h1>
        <div className="flex gap-3">
          <button className="btn btn-secondary text-white">Send data</button>
          <label htmlFor="add-data" className="btn btn-primary text-white">
            Add New data
          </label>
          <input type="checkbox" id="add-data" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Add New Data</h3>
              <form onSubmit={handleAddData}>
                <div className="form-control my-3">
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    name="name"
                    className="input input-bordered rounded-none border-0 border-b-2 input-primary w-full focus:outline-none"
                  />
                </div>
                <div className="form-control my-3">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    name="email"
                    className="input input-bordered rounded-none border-0 border-b-2 input-primary w-full focus:outline-none"
                  />
                </div>
                <div className="form-control my-3">
                  <input
                    type="number"
                    required
                    minLength={10}
                    placeholder="Phone"
                    name="phone"
                    className="input input-bordered rounded-none border-0 border-b-2 input-primary w-full focus:outline-none"
                  />
                </div>
                <div className="form-control my-3">
                  <input
                    type="text"
                    required
                    placeholder="Hobbies"
                    name="hobbies"
                    className="input input-bordered rounded-none border-0 border-b-2 input-primary w-full focus:outline-none"
                  />
                </div>
                <div className="modal-action mt-10">
                  <label
                    htmlFor="add-data"
                    className="btn btn-error text-white"
                  >
                    Cancel
                  </label>
                  <button type="submit" className="btn btn-primary text-white">
                    Add Data
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead
            className="border-primary border-b-2
          "
          >
            <tr>
              <th className="bg-white"></th>
              <th className="bg-white">ID</th>
              <th className="bg-white">Name</th>
              <th className="bg-white">Phone</th>
              <th className="bg-white">Email</th>
              <th className="bg-white">Hobbies</th>
              <th className="bg-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <TableRow key={index} index={index} row={row} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
