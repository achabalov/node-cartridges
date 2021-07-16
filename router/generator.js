const generateDocx = require('generate-docx')
const {Router} = require('express');
const router = Router();
const path = require('path');
const fs = require('fs');

router.post('/generator', async (req, res)=> {

    const data = await req.body;

    const options = {
      template: {
        filePath: './folderOnSave/testdoc.docx',
        data: {
          ...data,
          description: 'Description is good',
          body: 'My body is my temple'
        }
      },
      save: {
        filePath: './folderOnSave/savedfile.docx'
      }
    } 
    await generateDocx(options)
  })
  
  router.get('/generator', async (req, res)=> {
    res.download('./folderOnSave/savedfile.docx')
})
 

module.exports = router;