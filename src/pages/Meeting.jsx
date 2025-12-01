import React, { useState } from "react";

const App = () => {
  const services = [
    { name: "Saç Kesimi", price: 50 },
    { name: "Ombre", price: 120 },
    { name: "Manikür", price: 40 },
    { name: "Pedikür", price: 45 },
  ];

  const timeSlots = [
    { time: "10:00", busy: false },
    { time: "11:00", busy: true },
    { time: "12:00", busy: false },
    { time: "13:00", busy: false },
    { time: "14:00", busy: true },
    { time: "15:00", busy: false },
    { time: "16:00", busy: false },
  ];

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const nextStep = () => {
    if (step === 1 && !selectedService) {
      alert("Lütfen bir hizmet seçin!");
      return;
    }
    if (step === 2 && !selectedTime) {
      alert("Lütfen bir saat seçin!");
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 border border-gray-300">
        <h1 className="text-3xl font-bold text-center mb-6 text-black">
          Randevu Sistemi
        </h1>

        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-black">
              Hizmet Seçin:
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.name}
                  onClick={() => setSelectedService(service)}
                  className={`p-4 rounded-lg border text-center font-medium transition ${
                    selectedService?.name === service.name
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200"
                  }`}
                >
                  {service.name}
                  <br />
                  {service.price}₺
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-black">
              Saat Seçin:
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.time}
                  disabled={slot.busy}
                  onClick={() => setSelectedTime(slot)}
                  className={`p-3 rounded-lg border text-center font-medium transition ${
                    slot.busy
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : selectedTime?.time === slot.time
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-blue-500 text-white hover:bg-blue-600 border-blue-500"
                  }`}
                >
                  {slot.time}
                  {slot.busy && " (Dolu)"}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center text-black">
            <h2 className="text-xl font-semibold mb-4">
              Randevunuz Oluşturuldu!
            </h2>
            <p className="mb-2">
              Hizmet:{" "}
              <span className="font-medium">{selectedService.name}</span>
            </p>
            <p className="mb-2">
              Saat: <span className="font-medium">{selectedTime.time}</span>
            </p>
            <p className="mb-2">
              Ücret:{" "}
              <span className="font-medium">{selectedService.price}₺</span>
            </p>
            <p className="mt-4 text-red-500 font-semibold">
              Lütfen belirtilen saatte orada olun!
            </p>
          </div>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300"
            >
              Geri
            </button>
          )}
          {step < 3 && (
            <button
              onClick={nextStep}
              className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 bg"
            >
              İleri
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
