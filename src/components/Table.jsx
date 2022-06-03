import React from 'react';

const Table = () => {
    return (

        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead >
                    <tr className="text-md mt-7  text-gray-500 ">

                        <th className="font-medium">Assigned</th>
                        <th className="font-medium">Name</th>
                        <th className="font-medium">Priority</th>
                        <th className="font-medium">Budget</th>
                    </tr>
                </thead>   
              <br />
                <tbody>
                    <tr className="text-md mt-7  text-gray-500 ">
                        <td>

                           <div className="flex items-center">
                           <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <img src="https://api.lorem.space/image/face?hash=28212" alt='' />
                            </div>
                            </div>
                            <h2 className='mx-2 font-semibold'>Sunil Joshi</h2>
                           </div>



                        </td>
                        <td><h2 className='text-sm' >Elite Admin</h2></td>
                        <td> <button className="btn btn-xs btn-secondary text-xs font-medium text-white">Low</button> </td>
                        <td><h2 className='text-md font-semibold' >$3.9k</h2></td>
                    </tr>

                    <tr className="text-md mt-7  text-gray-500 ">
                        <td>

                           <div className="flex items-center">
                           <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <img src="https://api.lorem.space/image/face?hash=28212" alt='' />
                            </div>
                            </div>
                            <h2 className='mx-2 font-semibold'>Sunil Joshi</h2>
                           </div>



                        </td>
                        <td><h2 className='text-sm' >Elite Admin</h2></td>
                        <td> <button className="btn btn-xs btn-secondary text-xs font-medium text-white">Low</button> </td>
                        <td><h2 className='text-md font-semibold' >$3.9k</h2></td>
                    </tr>

                    <tr className="text-md mt-7  text-gray-500 ">
                        <td>

                           <div className="flex items-center">
                           <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <img src="https://api.lorem.space/image/face?hash=28212" alt='' />
                            </div>
                            </div>
                            <h2 className='mx-2 font-semibold'>Sunil Joshi</h2>
                           </div>



                        </td>
                        <td><h2 className='text-sm' >Elite Admin</h2></td>
                        <td> <button className="btn btn-xs btn-secondary text-xs font-medium text-white">Low</button> </td>
                        <td><h2 className='text-md font-semibold' >$3.9k</h2></td>
                    </tr>

                    <tr className="text-md mt-7  text-gray-500 ">
                        <td>

                           <div className="flex items-center">
                           <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <img src="https://api.lorem.space/image/face?hash=28212" alt='' />
                            </div>
                            </div>
                            <h2 className='mx-2 font-semibold'>Sunil Joshi</h2>
                           </div>



                        </td>
                        <td><h2 className='text-sm' >Elite Admin</h2></td>
                        <td> <button className="btn btn-xs btn-secondary text-xs font-medium text-white">Low</button> </td>
                        <td><h2 className='text-md font-semibold' >$3.9k</h2></td>
                    </tr>


                    
                </tbody>
            </table>



        </div>

    );
};

export default Table;