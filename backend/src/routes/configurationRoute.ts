import Configuration, { ConfigurationType } from "../schemas/Configuration";

const router = require("express").Router();

router.get("/configuration", (req: any, res: any) => {
    Configuration.findOne({ id: 0 }, (err: any, document: any) => {

        const configuration = {
            maintenance: document.maintenance,
            maintenanceNotification: document.maintenanceNotification,
            notify: document.notify,
            notification: document.notification,
            url: document.url
        } as ConfigurationType;

        res.json(configuration);
    });

});

export default router;