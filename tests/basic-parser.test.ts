import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const QUOTE_CSV_PATH = path.join(__dirname, "../data/quotes.csv");
const WHITESPACE_CSV_PATH = path.join(__dirname, "../data/whitespace.csv");
const EMPTY_ROW_CSV_PATH = path.join(__dirname, "../data/empty_row.csv");


test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
});


test("parseCSV distinguishes commas in data", async () => {
  const results = await parseCSV(QUOTE_CSV_PATH)
  expect(results[0]).toEqual(["name", "age","quote"]);
  expect(results[1]).toMatchObject({success: false, error: "Mismatched number of fields" });
});

test("parseCSV deletes whitespaces", async () => {
  const results = await parseCSV(WHITESPACE_CSV_PATH)
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"])
});

test("parseCSV accounts for emptyspace", async () => {
  const results = await parseCSV(EMPTY_ROW_CSV_PATH)
  expect(results[1]).toEqual(["Alice", "23", ""]);
  expect(results[2]).toEqual(["Bob", "","HI"])
});

