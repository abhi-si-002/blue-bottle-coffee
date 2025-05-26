
// import { ThemeToggle } from "@/components/theme-toggle";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-200">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold tracking-tight text-amber-400">
              Book an Appointment
            </h1>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                Schedule Your Service
              </h2>
              <p className="text-slate-300">
                Choose your preferred service, date, and time. We will confirm your appointment shortly.
              </p>
            </div>

            {/* Booking Form */}
            <form className="space-y-6 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-amber-400">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-200"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-amber-400">Select Service</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="radio"
                      id="classicHaircut"
                      name="service"
                      value="classicHaircut"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="classicHaircut"
                      className="block p-4 bg-slate-900 border border-slate-700 rounded-lg cursor-pointer peer-checked:border-amber-400 peer-checked:ring-2 peer-checked:ring-amber-400 hover:border-amber-400/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-slate-200">Classic Haircut</h4>
                          <p className="text-sm text-slate-400">45-60 minutes</p>
                        </div>
                        <span className="text-amber-400 font-semibold">$25</span>
                      </div>
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="radio"
                      id="beardTrim"
                      name="service"
                      value="beardTrim"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="beardTrim"
                      className="block p-4 bg-slate-900 border border-slate-700 rounded-lg cursor-pointer peer-checked:border-amber-400 peer-checked:ring-2 peer-checked:ring-amber-400 hover:border-amber-400/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-slate-200">Beard Trim & Style</h4>
                          <p className="text-sm text-slate-400">20-30 minutes</p>
                        </div>
                        <span className="text-amber-400 font-semibold">$15</span>
                      </div>
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="radio"
                      id="hotTowelShave"
                      name="service"
                      value="hotTowelShave"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="hotTowelShave"
                      className="block p-4 bg-slate-900 border border-slate-700 rounded-lg cursor-pointer peer-checked:border-amber-400 peer-checked:ring-2 peer-checked:ring-amber-400 hover:border-amber-400/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-slate-200">Hot Towel Shave</h4>
                          <p className="text-sm text-slate-400">45 minutes</p>
                        </div>
                        <span className="text-amber-400 font-semibold">$30</span>
                      </div>
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="radio"
                      id="combo"
                      name="service"
                      value="combo"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="combo"
                      className="block p-4 bg-slate-900 border border-slate-700 rounded-lg cursor-pointer peer-checked:border-amber-400 peer-checked:ring-2 peer-checked:ring-amber-400 hover:border-amber-400/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-slate-200">Haircut & Beard Combo</h4>
                          <p className="text-sm text-slate-400">60-75 minutes</p>
                        </div>
                        <span className="text-amber-400 font-semibold">$35</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Date and Time Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-amber-400">Select Date & Time</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-slate-300 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-slate-300 mb-1">
                      Time
                    </label>
                    <select
                      id="time"
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-200"
                      required
                    >
                      <option value="">Select a time</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-amber-400">Additional Notes</h3>
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-slate-300 mb-1">
                    Special Requests or Notes
                  </label>
                  <textarea
                    id="notes"
                    rows="4"
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-200"
                    placeholder="Any specific requests or information we should know?"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-all hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
} 