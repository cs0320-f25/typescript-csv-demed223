import { parseCSV } from "../src/basic-parser";
import * as path from "path";
import { z} from "zod";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const PEOPLE1_CSV_PATH = path.join(__dirname, "../data/people1.csv");
const QUOTE_CSV_PATH = path.join(__dirname, "../data/quotes.csv");
const WHITESPACE_CSV_PATH = path.join(__dirname, "../data/whitespace.csv");
const EMPTY_ROW_CSV_PATH = path.join(__dirname, "../data/empty_row.csv");
const EMPTY_FILE_CSV_PATH = path.join(__dirname, "../data/empty_file.csv");

const PersonRowSchema = z.tuple([z.string(), z.coerce.number()])
                         .transform( tup => ({name: tup[0], age: tup[1]}))

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH,undefined);

  expect(results).toHaveLength(5);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH,undefined)
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
});


test("parseCSV distinguishes commas in data", async () => {
  const results = await parseCSV(QUOTE_CSV_PATH,undefined);
  expect(results[1]).toEqual(["Bob","thirty", "I think, therefore I am."]);
});

test("parseCSV recognizes empty CSV", async () => {
  const results = await parseCSV(EMPTY_FILE_CSV_PATH,undefined);
  expect(results[0]).toEqual(undefined);
});

test("parseCSV deletes whitespaces", async () => {
  const results = await parseCSV(WHITESPACE_CSV_PATH,undefined);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"])
  });

test("parseCSV accounts for emptyspace", async () => {
  const results = await parseCSV(EMPTY_ROW_CSV_PATH,undefined);
  expect(results[1]).toEqual(["Alice", "23", ""]);
  expect(results[2]).toEqual(["Bob", "","HI"])
});

test("new parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE1_CSV_PATH, PersonRowSchema)
  
  expect(results).toHaveLength(5);
  expect(results[1]).toMatchObject({success: true, data:{name: 'Alice', age: 23}});
  expect(results[2]).toMatchObject({success: true, data:{name: 'Bob', age: 30}});
  expect(results[3]).toMatchObject({success: true, data:{name: 'Charlie', age: 25}});
  expect(results[4]).toMatchObject({success: true, data:{name: 'Nim', age: 22}});
  });

test("new parseCSV throws error if issue emerges", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH, PersonRowSchema)
  
  expect(results).toHaveLength(5);
  expect(results[1]).toMatchObject({success: true, data:{name: 'Alice', age: 23}});
  expect(results[2]).toMatchObject({success: false, error: "Row 2: Invalid Type"});
  expect(results[3]).toMatchObject({success: true, data:{name: 'Charlie', age: 25}});
  expect(results[4]).toMatchObject({success: true, data:{name: 'Nim', age: 22}});
});
