const contentful = require("contentful-management");
const results = require("./output/file");

const client = contentful.createClient({
  accessToken: "_6eQ_KaRxREC685Bq56csw-gt4b8aG0NWhLr3e668Go",
});

const upLoadEntry = async (entry) => {
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
};

function resolveAfter2Seconds(entry) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
      upLoadEntry(entry);
    }, 2000);
  });
}

async function asyncCall(entry) {
  console.log("calling");
  const result = await resolveAfter2Seconds(entry);
  console.log(result);
  // Expected output: "resolved"
}

// Using forEach with an asynchronous function can lead to
//  unexpected results or incorrect behavior.
//  The forEach method does not work well
//  with asynchronous operations because it does not wait for
//  the completion of each iteration before moving on to the next one
//  . This can cause concurrency issues and incorrect sequencing
//  of async operations.

const finalFunc = async (results) => {
  for (const item of results) {
    await asyncCall(item);
  }
};

finalFunc(results);
