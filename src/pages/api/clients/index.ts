/**
 * API endpoint to serve categorized client images and names.
 *
 * Scans all subfolders under `/public/assets/images/clients/` (e.g. institutional, industrial),
 * and returns an object with each category as a key, and an array of client objects:
 * {
 *   institutional: [ { name: "IIT Delhi", src: "/assets/images/clients/institutional/IIT Delhi.png" }, ... ],
 *   industrial: [ ... ],
 *   ...
 * }
 *
 * Response: { clients: ClientsProps["clients"], message: string }
 */

import { ClientsProps } from "@modules/clients/types";
import fs from "fs";
import type { NextApiHandler } from "next";
import path from "path";

/**
 * Absolute path to the clients images root directory.
 * Each subfolder is a client category (e.g. institutional, industrial).
 */
const IMAGES_DIR = path.join(
  process.cwd(),
  "public",
  "assets",
  "images",
  "clients",
);

/**
 * Base URL for serving client images from the public directory.
 */
const IMAGES_URL_BASE = "/assets/images/clients";

/**
 * Supported image file extensions.
 */
const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".svg",
]);

/**
 * Extracts the display name from a filename (removes extension only).
 * Example: "IIT Delhi.png" => "IIT Delhi"
 */
const toDisplayName = (filename: string): string => {
  const ext = path.extname(filename);
  return path.basename(filename, ext);
};

/**
 * Next.js API handler for GET /api/clients
 *
 * - Scans all subfolders in the clients images directory
 * - For each category, collects all supported image files
 * - Returns an object with category keys and arrays of { name, src }
 *
 * Example response:
 * {
 *   clients: {
 *     institutional: [ { name: "IIT Delhi", src: "/assets/images/clients/institutional/IIT Delhi.png" }, ... ],
 *     industrial: [ ... ],
 *   },
 *   message: "Clients data fetched successfully"
 * }
 */
const handler: NextApiHandler<{
  clients: ClientsProps["clients"];
  message: string;
}> = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed", clients: {} });
  }
  try {
    // Get all subdirectories (categories) in the clients images directory
    const categories = fs
      .readdirSync(IMAGES_DIR, { withFileTypes: true })
      .filter((entry) => {
        return entry.isDirectory();
      })
      .map((entry) => {
        return entry.name;
      });

    const clients: ClientsProps["clients"] = {};

    // For each category, collect all image files and build the response
    for (const category of categories) {
      const categoryDir = path.join(IMAGES_DIR, category);
      const files = fs.readdirSync(categoryDir).filter((f) => {
        return IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase());
      });

      const key = category as keyof ClientsProps["clients"];
      clients[key] = files.map((filename) => {
        return {
          name: toDisplayName(filename),
          src: `${IMAGES_URL_BASE}/${category}/${filename}`,
        };
      });
    }

    res.status(200).json({
      clients,
      message: "Clients data fetched successfully",
    });
  } catch {
    res.status(500).json({ message: "Internal Server Error", clients: {} });
  }
};

export default handler;
