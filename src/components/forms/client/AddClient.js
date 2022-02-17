import { CreditCard, DollarSign, Phone, User } from 'react-feather'
import Button from '../../custom/Button'

export default function AddClient() {
    return (
        <div className="">
            <form action="" className="text-sm space-y-5 text-gray-500">
                <div className="form-group">
                    <label htmlFor="" className="block text-gray-500">
                        Names
                    </label>

                    <div className="border rounded p-2 flex gap-2 items-center">
                        <User />

                        <input
                            type="text"
                            name=""
                            id=""
                            className="p-1 border-none w-full focus:ring-0"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="block text-gray-500">
                        Phone number
                    </label>

                    <div className="border rounded p-2 flex gap-2 items-center">
                        <Phone />

                        <input
                            type="number"
                            name=""
                            id=""
                            className="p-1 border-none w-full focus:ring-0"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="" className="block text-gray-500">
                        Assign Meter
                    </label>

                    <div className="border rounded p-2 flex gap-2 items-center">
                        <CreditCard />

                        <input
                            type="text"
                            name=""
                            id=""
                            className="p-1 border-none w-full focus:ring-0"
                        />
                    </div>
                </div>


                <Button title="Add"/>
            </form>
        </div>
    )
}
