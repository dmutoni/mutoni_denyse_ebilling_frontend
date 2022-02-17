import { CreditCard } from 'react-feather'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Button from '../../custom/Button'
import { Toast } from '../../toasts/Toast'
import { useState } from 'react'
import { Api } from '../../../pages/api/services/Api'
export default function AddMeter() {
    const [loading, setLoading] = useState(false)

    const [{ status, message }, setStatus] = useState({
        status: '',
        message: ''
    })

    const meterScheme = Yup.object().shape({
        meternum: Yup.number()
            .required('* This field is required')
    })

    async function handleForm(data) {
        setLoading(true)

        if (data.password !== data.confirmPassword) {
            setStatus({ status: 'error', message: "Passwords don't match" })
            setTimeout(() => {
                setStatus({ status: '', message: '' })
            }, 1000)
        } else
            // await new Api()
                // .connect(EbackendEndpoints.CREATE_USER, EhttpMethod.POST, data)
                // .then(response => {
                //     if (response.success) {
                //         setStatus({
                //             status: 'success',
                //             message: response.message
                //         })
                //         setTimeout(() => {
                //             setStatus({ status: '', message: '' })
                //         }, 1000)
                //     } else
                //         setStatus({
                //             status: 'error',
                //             message: response.message
                //         })
                //     setTimeout(() => {
                //         setStatus({ status: '', message: '' })
                //     }, 1000)
                // })
                // .catch(error => {
                //     setStatus({ status: 'error', message: error.message })
                //     setTimeout(() => {
                //         setStatus({ status: '', message: '' })
                //     }, 1000)
                // })
        setLoading(false)
    }

    return (
        <div className="">
            <Toast status={status} message={message} />
            <Formik
                enableReinitialize={true}
                initialValues={{
                    meternum: ''
                }}
                validationSchema={meterScheme}
                onSubmit={(values, actions) => {
                    handleForm(values)
                    actions.resetForm({
                        values: {
                            meternum: ''
                        }
                        // you can also set the other form states here
                    })
                }}
            >
                {({ errors, touched }) => (
                    <Form className="my-5 text-sm">
                        <div className="form-group">
                            <label htmlFor="" className="block text-gray-500">
                                Meter Num
                            </label>
                            <div className="border rounded p-2 flex gap-2 items-center">
                                <CreditCard />

                                <Field
                                    type="text"
                                    id="meternum"
                                    className="p-1 border-none w-full focus:ring-0"
                                    name="meternum"
                                    minLength="6"
                                    maxLength="6"
                                />
                               
                            </div>
                            {errors.meternum && touched.meternum && (
                                    <div className="text-red-600 text-xs">
                                        {errors.meternum}
                                    </div>
                                )}
                        </div>

                        <Button title="Add" />
                    </Form>
                )}
            </Formik>
        </div>
    )
}
