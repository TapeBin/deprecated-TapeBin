import Bin from "../schemas/Bin";
import cryptoRandomString from "crypto-random-string";

const router = require("express").Router();

interface Bin {
  id: number,
  fileName: string,
  languageId: number,
  languageExtension: string,
  text: string
}

router.post("/bin/create", (req: any, res: any) => {

  createBin(req.body, req.user as MongoUser).then(binCreation => {
    if (binCreation.succeed)
      res.status(201).json(binCreation);
    else res.status(500).json(binCreation);
  }).catch(err => console.log(err));


});

function generateKey(): Promise<String> {
  return cryptoRandomString.async({
    length: 10,
    type: "alphanumeric"
  });
}

async function createBin(data: any, user: MongoUser) {
  let succeed = false;

  if (data.bins.length === 0)
    return { succeed, url: "" };

  let userId = null;

  if (user)
    userId = user._id;

  const url = await generateKey();
  const bins = data.bins;
  const correctBins: any[] = [];

  bins.forEach((bin: any) => correctBins.push({
    id: bin._id,
    fileName: bin._fileName,
    languageId: bin._languageId,
    languageExtension: bin._languageExtension,
    text: bin._text
  }));

  const bin = await new Bin({
    binId: url,
    createdAt: Date.now(),
    ownerId: userId,
    title: data.title,
    description: data.description,
    bins: correctBins
  });

  await bin.save().then(() => succeed = true).catch((err: any) => {
    console.log(err);
    succeed = false;
  });

  return { succeed, url };
}

export interface MongoUser {
  githubId?: string;
  discordId?: string;
  username: string;
  _id: string;
}

export default router;
