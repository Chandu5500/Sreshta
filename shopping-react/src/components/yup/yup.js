import { useFormik } from "formik"
import * as yup from 'yup';

export function Yup(){

    const formik = useFormik({
        initialValues:{
            UserName: '',
            Age: 0,
            Mobile: '',
            City: ''
        },
        onSubmit:  (values) => {
            alert(JSON.stringify(values));
        },
        validationSchema : yup.object({
            UserName : yup.string()
                          .required("User name Required")
                          .min(4, "Name too short min 4 chars")
                          .max(10, "Name too long max 10 chars"),
            Age      : yup.number()
                          .required("Age Required"),
            Mobile   : yup.string()
                          .matches(/\+91\d{10}/,"Invalid Mobile")
                          .required("Mobile number required")
        })
    })
    return(
        <div className="container-fluid mt-3">
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input name='UserName' onChange={formik.handleChange} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input name='Age' onChange={formik.handleChange} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input name='Mobile' onChange={formik.handleChange} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name='City' onChange={formik.handleChange}>
                            <option value='-1'>Select your city</option>
                            <option value='Delhi'>Delhi</option>
                            <option value='Hyd'>Hyd</option>
                            <option value='Chirala'>Chirala</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                </dl>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}