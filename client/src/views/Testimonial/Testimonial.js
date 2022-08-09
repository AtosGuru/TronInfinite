import React from 'react';
import { Text } from '../../components/languages/Text/Text';
import './Testimonial.css';

function Testimonial(props) {
  return (
    <>
      <div className="p-5 relative  justify-center ">
        <h1 className=" text-white text-5xl text-center font-mono ">
          Testimonial
        </h1>
        <br/>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg  color-white w-4/5 m-auto" >
            <table class="w-full text-sm text-left text-gray-500 text-gray-400 color-white">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            Product name
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Color
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Category
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Price
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-50 hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="py-4 px-6">
                            Sliver
                        </td>
                        <td class="py-4 px-6">
                            Laptop
                        </td>
                        <td class="py-4 px-6">
                            $2999
                        </td>
                        
                    </tr>
                    <tr class="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-50 hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap text-white">
                            Microsoft Surface Pro
                        </th>
                        <td class="py-4 px-6">
                            White
                        </td>
                        <td class="py-4 px-6">
                            Laptop PC
                        </td>
                        <td class="py-4 px-6">
                            $1999
                        </td>
                        
                    </tr>
                    <tr class="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-50 hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap text-white">
                            Microsoft Surface Pro
                        </th>
                        <td class="py-4 px-6">
                            White
                        </td>
                        <td class="py-4 px-6">
                            Laptop PC
                        </td>
                        <td class="py-4 px-6">
                            $1999
                        </td>
                        
                    </tr>
                    <tr class="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-50 hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap text-white">
                            Microsoft Surface Pro
                        </th>
                        <td class="py-4 px-6">
                            White
                        </td>
                        <td class="py-4 px-6">
                            Laptop PC
                        </td>
                        <td class="py-4 px-6">
                            $1999
                        </td>
                        
                    </tr>
                    <tr class="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-50 hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap text-white">
                            Microsoft Surface Pro
                        </th>
                        <td class="py-4 px-6">
                            White
                        </td>
                        <td class="py-4 px-6">
                            Laptop PC
                        </td>
                        <td class="py-4 px-6">
                            $1999
                        </td>
                        
                    </tr>
                    <tr class="bg-white bg-gray-800 hover:bg-gray-50 hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap text-white">
                            Magic Mouse 2
                        </th>
                        <td class="py-4 px-6">
                            Black
                        </td>
                        <td class="py-4 px-6">
                            Accessories
                        </td>
                        <td class="py-4 px-6">
                            $99
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>

      </div>
    </>
  );
}

export default Testimonial;
