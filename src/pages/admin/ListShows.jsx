import React, { useEffect, useState } from 'react'
import { dummyShowsData } from '../../assets/assets';
import Title from '../../Components/admin/Title';
import Loading from '../../Components/Loading';
import { dateFormat } from '../../lib/dateFormat';

const ListShows = () => {
  
    const currency = import.meta.env.VITE_CURRENCY 
  const [shows, setshows] = useState([]);
  const [loading, setLoading] = useState(true);
  const getAllShows = async () => {
    try {
      setshows([{
        movie: dummyShowsData[0],
        sh0wDateTime: "2025-06-30T02:30:00.000z",
        showPrice: 59,
        occupiedSeats: {
          A1: "user_1",
          B1: "user_2",
          C1: "user_3",
        }
      }]);
      setLoading(false);

    } catch (error) {
      console.error(error);
   
    }
  }
  useEffect(() => {
    getAllShows();
  }, []);

     
  return !loading ? (
    <>
      <Title text1="List" text2="shows" />
      <div className="max-w-4xl mt-6 overflow-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              <th className="py-2 font-medium pl-5">Movie Name</th>
              <th className="py-2 font-medium"> Time</th>
              <th className="py-2 font-medium">Total Bookings</th>
              <th className="py-2 font-medium">Earings</th>
            </tr>
          </thead>
          <tbody className='text-sm font-light'>
            {shows.map((show, index) => (
              <tr key={index} className="border-b border-primary/10 bg-primary/5 even:bg-primary/10">
                <td className="py-2 min-w-45 pl-5">{show.movie.title}</td>
                <td className="py-2 ">
                  {dateFormat(show.showDateTime)}
                </td>
                <td className="py-2">
              
                  {Object.keys(show.occupiedSeats).length}
                </td>
                <td className="py-2" >{currency}
                  {Object.keys(show.occupiedSeats).length * show.showPrice}
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default ListShows