const generateDocx = require('generate-docx')
const {Router} = require('express');
const router = Router();
const path = require('path');
const fs = require('fs');


router.post('/generator', async (req, res)=> {
    try {
      const data = await req.body;

      const {TK1200 = 0 , TK1170 = 0, TK170 = 0, TK1150 = 0, Canon703 = 0, HP435CANON712 = 0, Canon728 = 0, HP285CANON725 = 0} = data
      const date = new Date().toLocaleDateString();
      const options = {
        template: {
          filePath: './folderOnSave/test.docx',
          data: {
            'TK1200': TK1200,
            'TK1170':TK1170,
            'TK170': TK170,
            'TK1150': TK1150,
            'Canon703': Canon703,
            'HP435CANON712': HP435CANON712,
            'Canon728': Canon728,
            'HP285CANON725': HP285CANON725,
            "date": date
          },
        },
        save: {
          filePath: './folderOnSave/savedfile.docx'
        }
      } 
      await generateDocx(options)
        res.status(201).json({message: 'Запись произошла'})
    } catch (err) {
      res.status(500).json({message: err})
    }
    
  })
  
  router.get('/generator', async (req, res)=> {
    try {
      res.download('./folderOnSave/savedfile.docx');
    } catch(err) {
      res.status(500).json({message: err})
    }
})


module.exports = router;