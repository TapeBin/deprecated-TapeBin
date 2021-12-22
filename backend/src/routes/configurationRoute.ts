import Configuration, { ConfigurationType } from "../schemas/Configuration";

const router = require("express").Router();

router.get("/configuration", (req: any, res: any) => {
    Configuration.findOne({ id: 0 }, (err: any, document: any) => {

        const configuration = {
            maintenance: document.maintenance,
            maintenanceNotification: document.maintenanceNotification,
            termsUpdated: document.termsUpdated,
            privacyUpdated: document.privacyUpdated,
            notify: document.notify,
            notification: document.notification
        } as ConfigurationType;

        res.json(configuration);
    });

});

export default router;