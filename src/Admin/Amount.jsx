import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminHearder from "./AdminHearder";

function Amount() {

  return (
    <div >
<AdminHearder/>
        <div className="bg-sky-800">
      <br></br>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-300">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium  px-6 py-4"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium  px-6 py-4"
                    >
                      Order
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium  px-6 py-4"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium  px-6 py-4"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium  px-6 py-4"
                    >
                      Total
                    </th>

                    {/* <th>Bus</th> */}
                    {/* <th>Edit Details</th> */}
                  </tr>
                </thead>
                {/* <tbody>
                  {students.map((student, index) => (
                    <tr key={index} class="bg-white border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {student.username}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {student.email}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {student.score}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {student.answer}
                      </td>
                      {/* <td>{booking.customer.bus}</td> */}
                      {/* <td  onClick={handleClick}style={{ color: "pink" }}>Edit</td> */}
                    {/* </tr>
                  ))}
                </tbody> */}
                {/* } */}
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Amount
