import * as Yup from "yup";

export const contactUsValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
    phoneNumber: Yup.number("Enter your phone Number")
    .typeError(" Enter a valid phone number")
    .min(11, "min value is  11 digits")
    .required("phone number is required"),
});

export const signUpValidationSchema = Yup.object().shape({
    first_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required."),
    last_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name is required."),
    email: Yup.string().email("Invalid email").required("Email is required."),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must not exceed 50 characters')
    .required('Password is required')

});


export const getAccessValidationSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required."),
    organization: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Organization is required"),
    role: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Role is required"),
    workEmail: Yup.string().email("Invalid email").required("Work email is required."),
    phoneNumber: Yup.number("Enter your phone Number")
    .typeError(" Enter a valid phone number")
    .min(11, "min value is  11 digits")
    .required("phone number is required"),
    experience: Yup.string()
    .required("Experience is required"),
    jobRole: Yup.string()
    .required("Job Role is required"),
    jobType: Yup.string()
    .required("Job type is required"),
    workStyle: Yup.string()
    .required("Work style is required"),
    location: Yup.string()
    .required("Location is required"),
});

export const partnershipValidationSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required."),
    email: Yup.string().email("Invalid email").required("Email is required."),
    phone: Yup.number("Enter your phone Number")
    .typeError(" Enter a valid phone number")
    .min(11, "min value is  11 digits")
    .required("phone number is required"),
    message: Yup.string()
    .min(2, "Too Short!")
    .max(200, "Too Long!")
    .required("Message is required"),

});