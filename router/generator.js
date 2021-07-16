const generateDocx = require('generate-docx')
const {Router} = require('express');
const router = Router();
const path = require('path');
const fs = require('fs');


router.post('/generator', async (req, res)=> {
  
    const data = await req.body;
    console.log(data);
    const {TK1200 = 0 , TK1170 = 0, TK170 = 0, TK1150 = 0, Canon703 = 0, HP435CANON712 = 0, Canon728 = 0, HP285CANON725 = 0} = data
    
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
          'HP285CANON725': HP285CANON725
        },
      },
      save: {
        filePath: './folderOnSave/savedfile.docx'
      }
    } 
    await generateDocx(options)
    // console.log(req.headers);
    req.headers({
      "host":"localhost:3000",
      "connection":"keep-alive",
      "cache-control":"max-age=0",
      "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "upgrade-insecure-requests":"1",
      "user-agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.107 Safari/537.36",
      "accept-encoding":"gzip, deflate, sdch",
      "accept-language":"en-US,en;q=0.8,et;q=0.6"
      })
  })
  
  router.get('/generator', async (req, res)=> {
    res.download('./folderOnSave/savedfile.docx')
})


module.exports = router;