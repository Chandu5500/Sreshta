import { useFormik } from "formik"

export function Formik2(){

    function VerifyUserDetails(formData){
        var errors = {}

        if (formData.UserName==''){
            errors.UserName = 'User name Required';
        }else if(formData.UserName.length<4){
            errors.UserName = "Name too short min 4 chars";
        }else if(formData.UserName.length>10){
            errors.UserName = "Name too long max 10 chars";
        }

        if (formData.Age==''){
            errors.Age= 'Age required'
        }else if(isNaN(formData.Age)){
            errors.Age= 'Age must be a Number'
        }

        if (formData.Mobile.match(/\+91\d{10}/)){
            errors.Mobile = ''
        }else{
            errors.Mobile="Invalid mobile number +91 and 10 digits"
        }

        if (formData.City=='-1'){
            errors.City = "Please select your city"
        }else{
            errors.City = "";
        }

        return errors;
    }

    const formik = useFormik({
        initialValues:{
            UserName: '',
            Age: 0,
            Mobile: '',
            City: ''
        },
        validate: VerifyUserDetails,
        onSubmit:  (values) => {
            alert(JSON.stringify(values));
        }
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