import { register } from 'module';
import { pathToFileURL } from 'url';

// Register the custom JSX loader
register("./node-jsx-loader.js", pathToFileURL("./"));

// Dynamically import and run all modules
async function execute() {
  const files = ["ssr.js", "rsc.js"];
  for (const file of files) {
    try {
      await import(pathToFileURL("./server/" + file));
    } catch (err) {
      console.error(err);
    }
  }
}

execute();
