const router = require('express').Router();
const nodemailer = require('nodemailer');

module.exports = router;

const smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'whiskradoptions@gmail.com',
    pass: 'welovepets',
  },
});

router.get('/', (req, res) => {
  const {
    to, userEmail, userPhoneNumber, userZipCode, userHasYoungChildren, userPetHistory, petName, petId, petCity, petState,
  } = req.query;
  const mailOptions = {
    to: 'cuddlesanimalshelter@gmail.com',
    subject: 'An Inquiry About One of Your Pets',
    html: `
      <div>
        <h1>Greetings from Whiskr!</h1>
        <p>
          We’re reaching out to you because one of our users has shown interest
          in adopting a pet in your care. This letter is a courtesy our service
          provides to connect users with potential pets, so that caregivers may
          also ensure the best possible matches for their pets. Please review
          the following information, and reach out to the user directly if you
          would like to pursue further communication.
        </p>
        <h2>User Profile:</h2>
        <div>
          <strong>Email: </strong>
          ${userEmail}
        </div>
        <div>
          <strong>Phone Number: </strong>
          ${userPhoneNumber}
        </div>
        <div>
          <strong>Location: </strong>
          ${userZipCode}
        </div>
        <div>
          <strong>Young Children In the Home: </strong>
          ${userHasYoungChildren}
        </div>
        <div>
          <strong>Pet Owning History: </strong>
          ${userPetHistory || 'No pet history provided'}
        </div>
        <h2>This user is interested in ${petName}: </h2>
        <div>
          <strong>Id: </strong>
          ${petId}
        </div>
        <div>
          <strong>Location: </strong>
          ${petCity}, ${petState}
        </div>
        <div>
          <p>
            Thank you for all that you do to help these animals find their
            furrever homes.\n Sincerely,
          </p>
          <div>The Whiskr Team</div>
        </div>
      </div>
    `,
  };
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      res.end('error');
    } else {
      console.log(`Message sent: ${response}`);
      res.end('sent');
    }
  });
});
