import React from 'react';
import './Table.css'

const Table = () => {
    return (

        <div className="overflow-x-auto">

            <table className="table __head  w-full">
                <thead className="__head">
                    <tr className="text-md text-gray-500 ">
                        <th className="font-medium">Assigned</th>
                        <th className="font-medium">Name</th>
                        <th className="font-medium">Priority</th>
                        <th className="font-medium">Budget</th>
                    </tr>
                </thead>   
              <br />
                <tbody>
                    <tr className="text-md  text-gray-500 ">
                        
                        <td>

                           <div className="flex items-center">
                           <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <img src="https://i.ibb.co/y5szpzZ/download.jpg" alt='' />
                            </div>
                            </div>
                            <h2 className='mx-2 font-semibold'>Sunil Joshi</h2>
                           </div>



                        </td>
                        <td><h2 className='text-sm' >Elite Admin</h2></td>
                        <td> <button className="btn btn-xs btn-secondary text-xs font-medium text-white">Low</button> </td>
                        <td><h2 className='text-sm font-semibold' >$3.9k</h2></td>
                    </tr>

                    <tr className="text-md  text-gray-500 ">
                        <td>

                           <div className="flex items-center">
                           <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <img src="https://i.ibb.co/B3tfbP8/download.jpg" alt='' />
                            </div>
                            </div>
                            <h2 className='mx-2 font-semibold'>Andrew McDownland</h2>
                           </div>



                        </td>
                        <td><h2 className='text-sm' >Real Homes WP Theme</h2></td>
                        <td> <button className="btn btn-xs bg-orange-400 border-0 text-xs font-medium text-white">Medium</button> </td>
                        <td><h2 className='text-sm font-semibold' >$24.5k</h2></td>
                    </tr>

                    <tr className="text-md text-gray-500 ">
                        <td>

                           <div className="flex items-center">
                           <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <img src="https://i.ibb.co/1fKf22Q/download.jpg" alt='' />
                            </div>
                            </div>
                            <h2 className='mx-2 font-semibold'>Christopher Jamil</h2>
                           </div>



                        </td>
                        <td><h2 className='text-sm' >MedicalPro WP Theme</h2></td>
                        <td> <button className="btn btn-xs bg-yellow-400 border-0 text-xs font-medium text-white">High</button> </td>
                        <td><h2 className='text-sm font-semibold' >$12.8k</h2></td>
                    </tr>

                    <tr className="text-md  text-gray-500 ">
                        <td>

                           <div className="flex items-center">
                           <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <img src="https://i.ibb.co/qBXPtvg/download-1.jpg" alt='' />
                            </div>
                            </div>
                            <h2 className='mx-2 font-semibold'>Nirav Joshi</h2>
                           </div>



                        </td>
                        <td><h2 className='text-sm' >Hosting Press HTML</h2></td>
                        <td> <button className="btn btn-xs btn-error text-xs font-medium text-white">Critical</button> </td>
                        <td><h2 className='text-sm font-semibold' >$2.4k</h2></td>
                    </tr>

                    <tr className="text-md text-gray-500 ">
                        <td>

                           <div className="flex items-center">
                           <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <img src="https://i.ibb.co/VCn0PQ3/download-2.jpg" alt='' />
                            </div>
                            </div>
                            <h2 className='mx-2 font-semibold'>Micheal Doe</h2>
                           </div>



                        </td>
                        <td><h2 className='text-sm' >Helping Hands Theme</h2></td>
                        <td> <button className="btn btn-xs btn-success text-xs font-medium text-white">Moderate</button> </td>
                        <td><h2 className='text-sm font-semibold' >$9.3k</h2></td>
                    </tr>

              



                    
                </tbody>
            </table>



        </div>

    );
};

export default Table;