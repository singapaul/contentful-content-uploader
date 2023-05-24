const contentful = require("contentful-management");
const results = require("./output/file");

const greet = () => {
  console.log("delay waited");
};

const client = contentful.createClient({
  accessToken: "_6eQ_KaRxREC685Bq56csw-gt4b8aG0NWhLr3e668Go",
});

const upLoadEntry = async (entry) => {
  setTimeout(greet, 5000);
  await client
    .getSpace("clau520o6xa1")
    .then((space) => space.getEnvironment("master-2023-05-24"))
    .then((environment) =>
      environment.createEntry("word", {
        fields: {
          title: {
            "en-US": entry.title,
          },
          countryOfOrigin: {
            "en-US": entry.country,
          },
          definition: {
            "en-US": entry.definition,
          },
          phoneticSpelling: {
            "en-US": entry.phonetic,
          },
          slug: {
            "en-US": entry.slug,
          },
        },
      })
    )
    .then((entry) => console.log(entry))
    .catch(console.error);
  setTimeout(greet, 5000);
};

results.forEach((element) => {
  console.log(element);
  upLoadEntry(element);
});
