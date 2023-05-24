const contentful = require("contentful-management");

const client = contentful.createClient({
  accessToken: "_6eQ_KaRxREC685Bq56csw-gt4b8aG0NWhLr3e668Go",
});

client
  .getSpace("clau520o6xa1")
  .then((space) => space.getEnvironment("master-2023-05-24"))
  .then((environment) =>
    environment.createEntry("word", {
      fields: {
        title: {
          "en-US": "ABABA",
        },
        countryOfOrigin: {
          "en-US": "ABABA",
        },
        definition: {
          "en-US": "ABABA",
        },
        phoneticSpelling: {
          "en-US": "qwdqwd",
        },
        slug: {
          "en-US": "ABABA",
        },
      },
    })
  )
  .then((entry) => console.log(entry))
  .catch(console.error);
