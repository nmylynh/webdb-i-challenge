const express = require("express");
const router = express.Router();
const accountsDB = require('../data/accounts-model');

//endpoints

router.get('/', async (req, res) => {
    try {
        const accounts = await accountsDB.find(req.query);

        res.status(200).json(accounts);
    } catch(err) {
        res.status(500).json({success: false, err});
    }
});


router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const account = await accountsDB.findById(id);

        res.status(200).json(account);
    } catch(err) {
        res.status(500).json({success: false, err});
    }
}); 


router.post('/', async (req, res) => {
    try {
        const newAccount = await accountsDB.add(req.body);

        res.status(201).json(newAccount);
    } catch(err) {
        res.status(500).json({success: false, err});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const updateAccount = await accountsDB.update(id, req.body);

        updateAccount
        ? res.status(200).json({message: "successfully updated account"})
        : res.status(404).json({message: "Account not found"});
    } catch(err) {
        res.status(500).json({success: false, err});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const success = await accountsDB.remove(id);

        success 
        ? res.status(204).end()
        : res.status(404).end();
    }  catch(err) {
         res.status(500).json({success: false, err});
    }
});





module.exports = router;