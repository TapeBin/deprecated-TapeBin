import Bin from "../schemas/Bin";
import cryptoRandomString from "crypto-random-string";
import * as mongoose from "mongoose";
import { MAX_CHARACTERS } from "../constants";
import { isAuthenticated } from "../utils/routeUtils";

const router = require("express").Router();

interface Bin {
  id: number,
  fileName: string,
  languageId: number,
  languageExtension: string,
  text: string
}

router.post("/bin/create", (req: any, res: any) => {
  console.log(req.body);
  createBin(req.body, req.user as MongoUser).then(binCreation => {
    if (binCreation.succeed)
      res.status(201).json(binCreation);
    else res.status(413).json(binCreation);
  }).catch(err => console.log(err));
});

router.get("/bin", isAuthenticated, (req: any, res: any) => {
  Bin.find({ownerId: req.user._id}, function(err: mongoose.Error, document: any) {
    if (err)
      console.log(err);

    if (!document)
      res.json({succeed: false});
    else {
      res.json(document);
    }

  });
});

router.get("/bin/:id", (req: any, res: any) => {
  Bin.findOne({ binId: req.params.id }, function (err: mongoose.Error, document: any) {

    if (err)
      console.log(err);

    if (!document)
      res.json({ succeed: false });
    else {
      const bins: any[] = [];

      document.bins.forEach((bin: any) => {
        bins.push({
          id: bin.id,
          fileName: bin.fileName,
          languageId: bin.languageId,
          text: bin.text
        })
      });

      res.json({ succeed: true, title: document.title, description: document.description, bins: bins });
    }

  });
});

function generateKey(): Promise<String> {
  return cryptoRandomString.async({
    length: 10,
    type: "alphanumeric"
  });
}

function exceedsMaximumCharacters(bins: any[]): boolean {
  let amountOfCharacters = 0;
  bins.forEach(bin => {
    if (bin.text)
      amountOfCharacters += bin.text.length;
    else amountOfCharacters += bin._text.length;
  });

  return amountOfCharacters >= MAX_CHARACTERS;
}


/**
 *
 * The request needs to have this structure:
 *
 * {
 *   title: string,
 *   description: string
 *   bins: [
 *      id: number,
 *      fileName: string | undefined,
 *      languageId: string,
 *      text: string
 *   ]
 * }
 *
 */
async function createBin(data: any, user: MongoUser) {
  let succeed = false;

  if (data.bins.length === 0 || exceedsMaximumCharacters(data.bins))
    return { succeed, url: "" };

  let userId = null;

  if (user)
    userId = user._id;

  const url = await generateKey();
  const bins = data.bins;
  const correctBins: any[] = [];



  bins.forEach((bin: any) => {
    console.log(bin._languageId);
    console.log(bin.languageId);
    correctBins.push({
      id: bin.id,
      fileName: bin.fileName,
      languageId: bin.languageId,
      text: bin.text
    });
  } );

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
