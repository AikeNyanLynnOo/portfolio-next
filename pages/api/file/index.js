import fs from "fs";
import * as path from "path";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return response.status(405).end();
  }

  response.setHeader(
    "Content-Disposition",
    "attachment; filename=filename.txt",
  );
  response.setHeader("Content-Type", "application/text");

  const filePath = path.join(process.cwd(), "src/assets", "Aike-Nyan-Lynn-Oo-Resume.pdf");
  const fileStream = fs.createReadStream(filePath);

  fileStream.pipe(response);

  response.on("finish", () => {
    fileStream.close();
  });
}
