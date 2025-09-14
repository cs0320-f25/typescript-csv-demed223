import * as fs from "fs";
import * as readline from "readline";
import { z, ZodType } from "zod";



/**
 * This is a JSDoc comment. Similar to JavaDoc, it documents a public-facing
 * function for others to use. Most modern editors will show the comment when 
 * mousing over this function name. Try it in run-parser.ts!
 * 
 * File I/O in TypeScript is "asynchronous", meaning that we can't just
 * read the file and return its contents. You'll learn more about this 
 * in class. For now, just leave the "async" and "await" where they are. 
 * You shouldn't need to alter them.
 * 
 * @param path The path to the file being loaded.
 * @returns a "promise" to produce a 2-d array of cell values
 */

type ZodSafeParseResult<T> = { success: true; data: T } | { success: false; error: string};


export async function parseCSV<T>(path: string, schema: ZodType<T> | undefined): Promise<string[][]| ZodSafeParseResult<T>[]> {
  // This initial block of code reads from a file in Node.js. The "rl"
  // value can be iterated over in a "for" loop. 
  const fileStream = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // handle different line endings
  });
  
  // Create an empty array to hold the results
  let rows = [];
  
  // We add the "await" here because file I/O is asynchronous. 
  // We need to force TypeScript to _wait_ for a row before moving on. 
  // More on this in class soon!
  for await (const line of rl) {
    const values = line.split(",").map((v) => v.trim());
    rows.push(values)
  }
  //Returns the rows if no schema is provided
  if(!schema) {
    return rows;
  } else {
    const parsedRows: ZodSafeParseResult<T>[] = [];
    //Loops through each row and parses it according to the schema
    for (let i = 0; i < rows.length; i++) {
      const result=schema.safeParse(rows[i]);
      //Pushes the result to the parsedRows array and pushes an error message if the row doesn't match the schema
      if(result.success){
        parsedRows.push({success: true, data: result.data})
      }else{
         parsedRows.push({success: false, error: "Row " +i+": Invalid Type"});}
      }
    return parsedRows;
  }}