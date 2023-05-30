import React from "react"
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"

const TableRow = () => {
  return (
    <tr>
      <td>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </td>
      <td>1</td>
      <td>
        <div className="font-bold">Farhan Aziz Mukto</div>
      </td>
      <td>+8801408491626</td>
      <td>iamfarhanaziz@gmail.com</td>
      <td>Coding,Gardeing</td>
      <td className="flex gap-1 items-center ">
        <label
          htmlFor="edit-data"
          className="btn btn-secondary btn-sm rounded-md text-white"
        >
          <PencilSquareIcon className="h-5 w-5 " />
        </label>

        <input type="checkbox" id="edit-data" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Edit Data</h3>
            <form>
              <div className="form-control my-3">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  name="name"
                  className="input input-bordered rounded-none border-0 border-b-2 input-secondary w-full focus:outline-none"
                />
              </div>
              <div className="form-control my-3">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  name="email"
                  className="input input-bordered rounded-none border-0 border-b-2 input-secondary w-full focus:outline-none"
                />
              </div>
              <div className="form-control my-3">
                <input
                  type="number"
                  required
                  minLength={10}
                  placeholder="Phone"
                  name="phone"
                  className="input input-bordered rounded-none border-0 border-b-2 input-secondary w-full focus:outline-none"
                />
              </div>
              <div className="form-control my-3">
                <input
                  type="text"
                  required
                  placeholder="Hobbies"
                  name="hobbies"
                  className="input input-bordered rounded-none border-0 border-b-2 input-secondary w-full focus:outline-none"
                />
              </div>
              <div className="modal-action mt-10">
                <label htmlFor="edit-data" className="btn btn-error text-white">
                  Cancel
                </label>
                <button type="submit" className="btn btn-secondary text-white">
                  Edit Data
                </button>
              </div>
            </form>
          </div>
        </div>

        <button className="btn btn-error btn-sm rounded-md text-white">
          <TrashIcon className="h-5 w-5 " />
        </button>
      </td>
    </tr>
  )
}

export default TableRow
