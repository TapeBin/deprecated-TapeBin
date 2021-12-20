import mongoose from "mongoose";

export type ConfigurationType = {
    maintenance: boolean;
    termsUpdated: boolean;
    privacyUpdated: boolean;
}

const configuration = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        default: 0
    },
    maintenance: {
        type: Boolean,
        required: true,
        default: false
    },
    termsUpdated: {
        type: Boolean,
        required: true,
        default: false
    },
    privacyUpdated: {
        type: Boolean,
        required: true,
        default: false
    }
});


export default mongoose.model("Configuration", configuration);
