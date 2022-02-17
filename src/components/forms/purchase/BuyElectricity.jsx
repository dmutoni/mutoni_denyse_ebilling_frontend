import { CreditCard, DollarSign } from 'react-feather'
import Button from '../../custom/Button'
import {useState, useEffect} from 'react'

export default function BuyElectricity() {

    const [meter, setMeter] = useState({
        meterNumber: "",
        amount: 0,
      });
    
      const [errors, setErrors] = useState({
        meterNumber: "",
        amount: "",
      });
    
      function handleChange(e) {
        setMeter((prev) => ({
          ...prev,
          [e.name]: e.value,
        }));
      }
    
      useEffect(() => {
        if (meter.amount % 100 === 0 && meter.amount < 182500) {
          setErrors((prev) => ({
            ...prev,
            amount: "",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            amount: "Amount must be a multiple of 100 and less than 182,500",
          }));
        }
    
        if (meter.meterNumber.split("").length < 6) {
          setErrors((prev) => ({
            ...prev,
            meterNumber: "Invalid meter, only 6 digits accepted",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            meterNumber: "",
          }));
        }
      }, [meter.amount, meter.meterNumber]);
    return (
        <div className="">
            <form action="" className="text-sm space-y-5 text-gray-500">
                <div className="form-group">
                    <label htmlFor="" className="block text-gray-500">
                        Meter number
                    </label>

                    <div className="border rounded h- p-2  flex gap-2 items-center">
                        <CreditCard />

                        <input
                            type="text"
                            name="meterNumber"
                            id=""
                            className="p-1 border-none w-full focus:outline-none"
                            minLength="6"
                            maxLength="6"
                            placeholder="Meter number"
                            value={meter.meterNumber}
                            onChange={(e) => handleChange(e.target)}
                        />
                    </div>

                    {errors.meterNumber && (
                    <p className="text-red-500">{errors.meterNumber}</p>
                  )}
                </div>
                <div className="form-group">
                    <label htmlFor="" className="block text-gray-500">
                        Amount
                    </label>

                    <div className="border rounded p-2 flex gap-2 items-center">
                        <DollarSign />

                        <input
                            type="text"
                            name="amount"
                            id=""
                            placeholder="Amount"
                            className="p-1 border-none w-full focus:outline-none"
                            onChange={(e) => handleChange(e.target)}
                            value={meter.amount}
                        />
                    </div>
                    {errors.amount && (
                    <p className="text-red-500">{errors.amount}</p>
                  )}
                </div>
                <Button title="Buy"/>
            </form>
        </div>
    )
}
