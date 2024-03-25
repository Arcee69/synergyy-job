import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage';

import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import loginReducer from "../features/auth/talent/loginSlice";
import getExperienceReducer from "../features/credentials/getExperienceSlice";
import addExperienceReducer from "../features/credentials/addExperienceSlice";
import removeExperienceReducer from "../features/credentials/removeExperienceSlice";
import getEducationReducer from "../features/credentials/getEducationSlice";
import addEducationReducer from "../features/credentials/addEducationSlice";
import removeEducationReducer from "../features/credentials/removeEducationSlice";
import getSoftSkillsReducer from "../features/profile/getSoftSkillsSlice";
import getTechnicalSkillsReducer from "../features/profile/getTechnicalSkillsSlice";
import postTechnicalSkillsReducer from "../features/profile/postTechnicalSkillsSlice";
import postSoftSkillsReducer from "../features/profile/postSoftSkillsSlice";
import getProfileReducer from "../features/profile/getProfileSlice";
import updateProfileReducer from "../features/profile/updateProfileSlice";
import updateJobProfileReducer from "../features/profile/updateJobProfileSlice";
import getAllDocumentsReducer from "../features/resume/getAllDocumentsSlice";
import uploadAllDocumentReducer from "../features/resume/uploadAllDocumentSlice";
import deleteDocumentReducer from "../features/resume/deleteDocumentSlice";
import getRecommendedOpportunitiesReducer from "../features/jobs/getRecommendedOpportunitiesSlice";
import getTrendingOpportunitiesReducer from "../features/jobs/getTrendingOpportunitiesSlice";
import getAllOpportunitiesReducer from "../features/jobs/getAllOpportunitiesSlice";
import postBookmarkJobReducer from "../features/jobs/postBookmarkJobSlice";
import searchJobReducer from "../features/jobs/searchJobSlice";
import getSingleJobReducer from "../features/jobs/getSingleJobSlice";


    const persistConfig = {
        key: 'root',
        storage,
    };

    //All reducers should be put here so as to access it across the app
    const rootReducer = combineReducers({
        userLogin: loginReducer,
        fetchExperience: getExperienceReducer,
        postExperience: addExperienceReducer,
        removeExperience: removeExperienceReducer,
        fetchEducation: getEducationReducer,
        postEducation: addEducationReducer,
        removeEducation: removeEducationReducer,
        fetchSoftSkills: getSoftSkillsReducer,
        postSoftSkills: postSoftSkillsReducer,
        fetchTechnicalSkills: getTechnicalSkillsReducer,
        postTechnicalSkills: postTechnicalSkillsReducer,
        fetchProfileData: getProfileReducer,
        updateProfileData: updateProfileReducer,
        updateJobProfile: updateJobProfileReducer,
        getAllDocuments: getAllDocumentsReducer,
        uploadAllDocument: uploadAllDocumentReducer,
        removeDocument: deleteDocumentReducer,
        fetchRecommendedOpportunities: getRecommendedOpportunitiesReducer,
        fetchTrendingOpportunities: getTrendingOpportunitiesReducer,
        fetchAllOpportunities: getAllOpportunitiesReducer,
        bookmarkJob: postBookmarkJobReducer,
        searchJobs: searchJobReducer,
        viewSingleJob: getSingleJobReducer
    });
  
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    export const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    });

export const persistor = persistStore(store)

