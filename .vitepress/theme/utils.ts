import { globby } from "globby";
import matter from "gray-matter";
import fs from "fs-extra";
import path from "path";

// EXAMPLE OF USING "INTERFACE" FOR POSTS
// const {} = await import("vue");
export interface PostDetails {
  regularPath: string;
  dateSorting: string;
  frontMatter: {
    date?: string;
    title?: string;
    tags?: string[];
    description?: string;
  };
}

export type Damn = {
  regularPath: string;
  dateSorting: string;
  frontMatter: {
    date?: string;
    title?: string;
    tags?: string[];
    description?: string;
  };
};

export async function getPosts() {
  let paths = await getPostMDFilePaths();
  let posts = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, "utf-8");
      const { data } = matter(content);
      const sortingDate = _convertDate(data.date);
      return {
        regularPath: `/${_transformPath(item)}`,
        dateSorting: sortingDate,
        frontMatter: data,
      };
    })
  );
  posts.sort(_dateSort);
  return posts;
}

async function getPostMDFilePaths() {
  let paths = await globby(["files/blog/**.md", "!files/blog/index.md"]);
  return paths;
}

function _convertDate(dateString) {
  const parts = dateString.split(".");
  return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
}

function _dateSort(a, b) {
  return new Date(b.dateSorting).getTime() - new Date(a.dateSorting).getTime();
}

function _transformPath(path) {
  return path.replace(".md", ".html").split("/").slice(-2).join("/");
}
