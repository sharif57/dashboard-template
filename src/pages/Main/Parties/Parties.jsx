import { useState } from "react"
import { ChevronLeft, ChevronRight, Globe } from "lucide-react"

export default function Parties() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [currentPage, setCurrentPage] = useState(1)
 

  // Mock event data
  const events = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: "Oxford Road NightsOut",
    date: "21/03",
    price: 50,
    image: "/Parties.png",
    description:
      "Join us for an unforgettable night experience exploring the vibrant Oxford Road while discovering beats of night long.",
    startDate: "12/03/2023",
    startTime: "09:00pm - 02:00am",
    location: "Yellowstone National Park, Wyoming",
    hostEarned: 500,
    adminEarned: 75,
    seatsSold: 10,
    totalSeats: 40,
  }))

 
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen bg-[#FFF1F0] p-4 md:p-6">
      {/* Header with tabs and location */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "upcoming" ? "bg-[#E64A19] text-white" : "bg-white text-gray-700"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "completed" ? "bg-[#E64A19] text-white" : "bg-white text-gray-700"
            }`}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
        </div>
        <button className="flex items-center bg-[#E64A19] text-white px-4 py-2 rounded-md">
          <Globe className="w-4 h-4 mr-2" />
          USA
        </button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="h-40 overflow-hidden">
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-gray-800">{event.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-600">{event.date}</span>
                <span className="font-bold text-[#E64A19]">${event.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-2 bg-white rounded-full px-2 py-1 shadow-sm">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center p-2 rounded-full text-[#E64A19] disabled:text-gray-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <button
            onClick={() => handlePageChange(1)}
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentPage === 1 ? "bg-[#E64A19] text-white" : "text-gray-700"
            }`}
          >
            1
          </button>

          <span className="text-gray-500">...</span>

          <button
            onClick={() => handlePageChange(15)}
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentPage === 15 ? "bg-[#E64A19] text-white" : "text-gray-700"
            }`}
          >
            15
          </button>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === 15}
            className="flex items-center justify-center p-2 rounded-full text-[#E64A19] disabled:text-gray-300"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Event Modal */}
      {/* {selectedEvent && <EventModel event={selectedEvent} isOpen={isModalOpen} onClose={closeModal} />} */}
    </div>
  )
}

