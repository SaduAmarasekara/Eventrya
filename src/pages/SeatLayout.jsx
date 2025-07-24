import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import Loading from '../Components/Loading'

const SeatLayout = () => {
  const { id, date } = useParams()
  const [selectedSeats, setSelectedSeats] = useState([])
  const [selectedTime, setSelectedSeatsTime] = useState(null)
  const [show, setShow] = useState(null)
  
  const navigate = useNavigate()
  const getShow = async () => {
    const show = dummyShowsData.find(show => show._id == id)
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData
      })
    }
  }
  useEffect(() => {
    getShow()
  },[])

  return show ? (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">
      {/* available Timings */}
      <div className="w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30">
        <p className="text-lg font-semibold px-6">Available Timings</p>

        <div>
          {show.dateTime[date].map((item) => (
            <div></div>
          ))}
        </div>
      </div>





      {/* Seat Layout */}
      <div>

      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default SeatLayout
