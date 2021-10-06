const Task = require("../models/task.js");

module.exports = class TaskController {
    static getTasks(req, res) {
        Task.find({}, function (err, docs) {
            if (err) {
                res.send(err);
            }
            res.send(docs);
        });
    }

    static addTask(req, res) {
        const task = new Task({
            text: req.body.text
        });
        task.save(function (err, doc) {
            if (err) {
                res.send(err);
            }
            res.send(doc);
        });
    }

    static updateTask(req, res) {
        const id = req.params.id;
        Task.findByIdAndUpdate(id, {status: true}, function (err, doc) {
            if (err) {
                res.send(err);
            }
            res.send(doc);
        });
    }

    static deleteTask(req, res) {
        const id = req.params.id;
        Task.findByIdAndRemove(id, function (err, doc) {
            if (err) {
                res.send(err);
            }
            res.send(doc);
        });
    }
}
