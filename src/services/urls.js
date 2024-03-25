export const appUrls = {
    //AUTH ENDPOINTS
    SIGNUP_URL: "/talent/register",
    CONFIRM_EMAIL_URL: "/register/email-confirm",
    RESEND_OTP_URL: "/register/resend-email-verification",
    LOGIN_URL: '/login',
    FORGOT_PASSWORD_URL: "/forgot-password",
    RESET_PASSWORD_URL: "/users/forgot-password",
    VERIFY_TOKEN_URL: "/verify-token",

    //JOBS ENDPOINT
    FETCH_JOBS_URL: "/opportunities/search",
    FETCH_COUNTRIES_URL: "/opportunities/search",
    SAVE_JOB_URL: "/opportunities/save_multiple_job_interests",
    SAVE_SINGLE_JOB_URL: "/opportunities/save_job_interest",
    FETCH_RECOMMENDED_OPPORTUNITIES_URL: "/opportunities/recommended",
    FETCH_TRENDING_OPPORTUNITIES_URL: "/opportunities/trending",
    POST_BOOKMARK_JOB_URL: "/opportunities/bookmark",
    VIEW_SINGLE_JOB_URL: "/opportunities/view",
    SEARCH_JOB_URL: "/opportunities/search",
    
    //DOCUMENT UPLOAD
    UPLOAD_DOCUMENT_URL: "/account/documents/upload",
    GET_ALL_DOCUMENT_URL: "/account/documents",
    DELETE_DOCUMENT_URL: "/account/documents/delete",

    //ASK A PRO CONTACT FORM ENDPOINT
    ASK_A_PRO: "/employer/contact-request",

    //HIRING FORM ENDPOINT
    HIRING_FORM: "/employer/hiring-form",

    // EXPERIENCE ENDPOINT
    GET_EXPERIENCE_URL: "/account/list_experience",
    ADD_EXPERIENCE_URL: "/account/add_experience",
    DELETE_EXPERIENCE_URL: "/account/delete_experience",

    //EDUCATION ENDPOINT
    LOAD_SCHOOLS_URL: "/account/load_schools",
    ADD_EDUCATION_URL: "/account/add_education",
    GET_EDUCATION_URL: "/account/list_education",
    DELETE_EDUCATION_URL: '/account/delete_education',

    //SKILLS ENDPOINT
    GET_TECHNICAL_SKILLS_URL: "/account/skills/core",
    POST_TECHNICAL_SKILLS_URL: "/account/add_skill",
    GET_SOFT_SKILLS_URL: "/account/skills/soft",
    POST_SOFT_SKILLS_URL: "/account/add_skill",
    DELETE_SOFT_SKILLS_URL: "/account/delete_skill",

    //PROFILE ENDPOINT
    GET_PROFILE_URL: "/account/profile",
    UPDATE_PROFILE_URL: "/account/update_profile",
};
