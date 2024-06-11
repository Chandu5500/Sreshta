import { Formik, useFormik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

export function FormikComponents1(){
    function CityChange(e){
        alert(e.target.value);
    }
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik
                initialValues={
                    {
                        UserName: "",
                        Age: 0,
                        Mobile: ""
                    }
                }
                validationSchema={
                    yup.object({
                        UserName: yup.string()
                                     .required("User name required")
                                     .min(4, "Name too short min 4 chars")
                                     .max(10, "Name too long max 4 chars"),
                        Age:yup.number()
                               .required('Age required'),
                        Mobile:yup.string()
                                  .required("Mobile required")
                                  .matches(/\+91\d{10}/, "Invalid mobile +91 and 10 digits")
                    })
                }
                onSubmit={
                    (values)=>{
                        alert(JSON.stringify(values));
                    }
                }
            >
                {
                    props=>
                    <Form className={(props.isValid)?'bg-success':'bg-danger'}>
                        <dl>
                            <dt>User Name</dt>
                            <dd>
                                <Field name="UserName" type="text" />
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="UserName" />
                            </dd>
                            <dt>Age</dt>
                            <dd>
                                <Field name="Age" type="text" />
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Age" />
                            </dd>
                            <dt>Mobile</dt>
                            <dd>
                                <Field name="Mobile" type="text" />
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Mobile" />
                            </dd>
                            <dt>City</dt>
                            <dd>
                                <Field as="select" onChange={CityChange}>
                                    <option>Delhi</option>
                                    <option>Bapatla</option>
                                    <option>Chirala</option>
                                </Field>
                            </dd>
                        </dl>
                        <button disabled={!props.isValid}>Register</button>
                        <button disabled={!props.dirty}>Save</button>
                    </Form>
                }

            </Formik>
        </div>
    )
}