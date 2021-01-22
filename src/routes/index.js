const express = require('express');

const router = express.Router();

const ReportController = require('../controllers/ReportController');
const TopicController = require('../controllers/TopicController');
const NotifyController = require('../controllers/NotifyController');

const validateDto = require('../middleware/validate-dto');

const topicDto = require('../dto/topic');
const reportDto = require('../dto/report');
const notifyDto = require('../dto/notify');

// TopicController
router.get('/topics', TopicController.getFiltered);
router.post('/topics', validateDto(topicDto), TopicController.create);
router.get('/specific/:id', TopicController.getSpecific);

// ReportController
router.post('/report', validateDto(reportDto), ReportController.send);

// NotifyController
router.post('/notify', validateDto(notifyDto), NotifyController.sendEmail);

module.exports = router;