const express = require('express');

const router = express.Router();

const ReportController = require('../controllers/ReportController');
const TopicController = require('../controllers/TopicController');
const NotifyController = require('../controllers/NotifyController');
const MonitorController = require('../controllers/MonitorController');

const validateDto = require('../middleware/validate-dto');
const authMiddleware = require('../middleware/auth');

const topicDto = require('../dto/topic');
const reportDto = require('../dto/report');
const notifyDto = require('../dto/notify');

// MonitorController
router.post('/register', MonitorController.register);
router.post('/authenticate', MonitorController.authenticate);

// TopicController
router.get('/topics', TopicController.getFiltered);
router.post('/topics', validateDto(topicDto), authMiddleware, TopicController.create);
router.put('/topics/:topicId', validateDto(topicDto), authMiddleware, TopicController.update);
router.delete('/topics/:topicId', authMiddleware, TopicController.delete);
router.get('/specific/:id', TopicController.getSpecific);

// ReportController
router.post('/report', validateDto(reportDto), ReportController.send);

// NotifyController
router.post('/notify', validateDto(notifyDto), NotifyController.sendEmail);
router.get('/notify', NotifyController.loadEmails);

module.exports = router;