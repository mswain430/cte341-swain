import { Router } from 'express';
const router = Router();
import contact from 'contacts';
router.use('/contacts', require('./contacts'))

router.use('/contacts', contact);

router.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://swain341-test.onrender.com/swain-byui-api-docs',
    };
    res.send(docData);
  })
);

export default router;