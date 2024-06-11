import { useFormik } from 'formik';
import * as yup from 'yup';

export function FormikValidation(){
    const formik = useFormik({
        initialValues:{
            UserName: '',
            Age: 0,
            Mobile: ''
        },
        validationSchema: yup.object({
            UserName: yup.string()
                         .required("User name required")
                         .min(4, "Name too short min 4 chars")
                         .max(10, "Name too long max 4 chars"),
            Age:yup.number()
                   .required('Age required'),
            Mobile:yup.string()
                      .required("Mobile required")
                      .matches(/\+91\d{10}/, "Invalid mobile +91 and 10 digits")
        }),
        onSubmit: (values)=>{
            alert(JSON.stringify(values));
        }
    })
    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name='UserName' {...formik.getFieldProps("UserName")} type="text"/></dd>
                    <dd className='text-danger'>{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input name='Age' {...formik.getFieldProps("Age")} type="text"/></dd>
                    <dd className='text-danger'>{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input name='Mobile' {...formik.getFieldProps("Mobile")} type="text"/></dd>
                    <dd className='text-danger'>{formik.errors.Mobile}</dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}